import os
import smtplib
import ssl
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# This is the final, robust CORS setup.
origins = [
    "https://vedantraval24.netlify.app",
    "http://localhost:3000"
]
CORS(app, resources={r"/api/*": {"origins": origins}})

# NEW: Health check route. When you visit your Render URL, you'll see this message.
@app.route('/')
def index():
    return jsonify({"status": "Backend is running correctly. Ready to receive contact form submissions at /api/contact."})

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

    # NEW: Better server-side validation and logging
    if not all([sender_email, password]):
        print("CRITICAL SERVER ERROR: EMAIL_USER or EMAIL_PASS environment variables are not set on Render.")
        return jsonify({"message": "Server configuration error. Please contact the administrator."}), 500

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
        print("Attempting to connect to Gmail SMTP server...")
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            print("SMTP connection successful. Attempting to login...")
            server.login(sender_email, password)
            print("Login successful. Sending email...")
            server.sendmail(sender_email, receiver_email, email_message)
            print("Email sent successfully!")
        return jsonify({"message": "Message sent successfully!"}), 200
    except Exception as e:
        # NEW: This will print the EXACT error to your Render logs.
        print(f"CRITICAL SMTP ERROR: {e}")
        return jsonify({"message": "Failed to send email due to a server error."}), 500

if __name__ == '__main__':
    app.run(debug=True)
