import os
import smtplib
import ssl
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# THIS IS THE FINAL FIX: A more robust CORS setup for production.
# It allows requests from your live Netlify site and any localhost port for development.
origins = [
    "https://vedantraval24.netlify.app",
    "http://localhost:3000"
]

CORS(app, resources={r"/api/*": {"origins": origins}})

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    contact_no = data.get('contactNo', 'Not provided')
    message = data.get('message')

    if not all([name, email, message]):
        return jsonify({"message": "Missing required fields"}), 400

    sender_email = os.getenv("EMAIL_USER")
    password = os.getenv("EMAIL_PASS")
    receiver_email = "ravalvedant2444@gmail.com"

    if not all([sender_email, password]):
        print("ERROR: Email credentials are not set in the environment.")
        return jsonify({"message": "Server configuration error."}), 500

    email_message = f"""\
Subject: New Contact Form Submission from Your Portfolio

Name: {name}
Email: {email}
Contact No.: {contact_no}

Message:
{message}
"""
    context = ssl.create_default_context()
    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, email_message)
        
        return jsonify({"message": "Message sent successfully!"}), 200
    except Exception as e:
        print(f"SMTP ERROR: {e}")
        return jsonify({"message": "Failed to send email due to a server error."}), 500

if __name__ == '__main__':
    app.run(debug=True)
