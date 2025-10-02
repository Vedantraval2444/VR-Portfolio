import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

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

    # This is the email address you verified as a "Single Sender" in SendGrid
    sender_email = "ravalvedant2444@gmail.com" 
    receiver_email = "ravalvedant2444@gmail.com"
    sendgrid_api_key = os.getenv("SENDGRID_API_KEY")

    if not sendgrid_api_key:
        print("CRITICAL SERVER ERROR: SENDGRID_API_KEY environment variable is not set on Render.")
        return jsonify({"message": "Server configuration error."}), 500

    # Create the email content
    email_content = f"""
    <p>You have a new contact form submission from your portfolio:</p>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Contact No.:</strong> {contact_no}</p>
    <hr>
    <p><strong>Message:</strong></p>
    <p>{message}</p>
    """

    message = Mail(
        from_email=sender_email,
        to_emails=receiver_email,
        subject=f"New Portfolio Contact from {name}",
        html_content=email_content)
    
    try:
        sg = SendGridAPIClient(sendgrid_api_key)
        response = sg.send(message)
        print(f"SendGrid response status code: {response.status_code}")
        return jsonify({"message": "Message sent successfully!"}), 200
    except Exception as e:
        print(f"CRITICAL SENDGRID ERROR: {e}")
        return jsonify({"message": "Failed to send email due to a server error."}), 500

if __name__ == '__main__':
    app.run(debug=True)
