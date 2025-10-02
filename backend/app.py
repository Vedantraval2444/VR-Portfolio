import os
import smtplib
import ssl
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

origins = [
    "https://vedantraval24.netlify.app",
    "http://localhost:3000"
]
CORS(app, resources={r"/api/*": {"origins": origins}})

@app.route('/')
def index():
    return jsonify({"status": "Backend is running correctly."})

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
        print("CRITICAL SERVER ERROR: EMAIL_USER or EMAIL_PASS environment variables are not set on Render.")
        return jsonify({"message": "Server configuration error."}), 500

    email_message = f"""\
Subject: New Contact Form Submission from Your Portfolio

Name: {name}
Email: {email}
Contact No.: {contact_no}

Message:
{message}
"""
    
    # --- THIS IS THE FINAL FIX ---
    # We are now connecting to port 587 which is less likely to be blocked.
    smtp_server = "smtp.gmail.com"
    port = 587
    context = ssl.create_default_context()
    
    try:
        print("Attempting to connect to Gmail SMTP server on port 587...")
        server = smtplib.SMTP(smtp_server, port)
        server.starttls(context=context)  # Secure the connection
        print("Connection successful. Attempting to login...")
        server.login(sender_email, password)
        print("Login successful. Sending email...")
        server.sendmail(sender_email, receiver_email, email_message)
        print("Email sent successfully!")
        return jsonify({"message": "Message sent successfully!"}), 200
    except Exception as e:
        print(f"CRITICAL SMTP ERROR: {e}")
        return jsonify({"message": "Failed to send email due to a server error."}), 500
    finally:
        # Ensure the server connection is closed
        if 'server' in locals() and server:
            server.quit()

if __name__ == '__main__':
    app.run(debug=True)
