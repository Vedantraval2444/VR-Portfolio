import os
import smtplib
import ssl
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "https://vedantraval24.netlify.app"]) # Add your live URL when you deploy

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    contact_no = data.get('contactNo', 'Not provided') # Get contact number, with a default
    message = data.get('message')

    if not all([name, email, message]):
        return jsonify({"message": "Missing required fields"}), 400

    # Get email credentials from environment variables
    sender_email = os.getenv("EMAIL_USER")
    password = os.getenv("EMAIL_PASS")
    receiver_email = "ravalvedant2444@gmail.com"

    # Create the email message
    email_message = f"""\
Subject: New Contact Form Submission from Your Portfolio

You received a new message from your portfolio contact form:

Name: {name}
Email: {email}
Contact No.: {contact_no}

Message:
{message}
"""

    # Create a secure SSL context
    context = ssl.create_default_context()

    try:
        # Connect to Gmail's SMTP server and send the email
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, email_message)
        
        print("Email sent successfully!")
        return jsonify({"message": "Message sent successfully!"}), 200
    except Exception as e:
        print(f"Error sending email: {e}")
        return jsonify({"message": f"Failed to send message. Error: {e}"}), 500

if __name__ == '__main__':

    app.run(debug=True)
