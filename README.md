Vedant Raval - Interactive Data Science PortfolioWelcome to the official repository for my personal portfolio. This is a full-stack web application designed to showcase my skills, projects, and journey as a data science student. The entire site was built from the ground up with a focus on a professional user experience, advanced animations, and a clean, modern aesthetic.View the Live Portfolio Here✨ FeaturesThis portfolio is more than just a static page. It's a fully-featured web application with a range of modern functionalities:🌌 Interactive Particle Background: A lightweight, animated particle system (@tsparticles/react) that reacts to mouse movement, creating a dynamic and tech-forward atmosphere.🌓 Dual Theme Mode: A seamless theme switcher that allows users to toggle between a "Cosmic Indigo" dark mode and a professional, high-contrast light mode.📬 Professional Contact Form: A full-stack contact form that uses a Python backend to process submissions and the SendGrid API to send real-time email notifications.📊 Interactive Skills Radar Chart: Instead of static progress bars, my skills are visualized using a professional, interactive radar chart (Chart.js), providing a more holistic view of my capabilities.💼 Project Case Study Modals: Each project card opens a detailed pop-up modal, offering an in-depth look at the project's methodology, features, and links.🎬 Scroll-Reveal Animations: Sections and elements gracefully animate into view as you scroll down the page, powered by framer-motion.🖱️ Custom Animated Cursor: A unique custom cursor that adds a polished and memorable touch to the user experience.📱 Fully Responsive Design: The entire user interface is meticulously designed to provide a seamless experience on all devices, from mobile phones to desktops.🛠️ Tech StackThis project is built with a modern, full-stack architecture, combining a powerful frontend library with a lightweight and robust backend.FrontendTechnologyDescriptionReact.jsThe core JavaScript library for building the user interface.CSS3Custom styling with CSS variables for theming and media queries for responsiveness.Framer MotionA production-ready motion library for creating beautiful animations.Chart.jsUsed to create the interactive and professional skills radar chart.React IconsFor a comprehensive library of high-quality icons.BackendTechnologyDescriptionPythonThe core programming language for the server-side logic.FlaskA lightweight web framework for building the API endpoint.SendGrid APIA professional email service for reliably handling contact form submissions.GunicornA production-grade WSGI server for running the Python application.🚀 Getting Started LocallyTo run this project on your local machine, follow these steps.PrerequisitesNode.js (which includes npm) installed.Python installed.A code editor like VS Code.1. Clone the Repositorygit clone [https://github.com/Vedantraval2444/vr-portfolio.git](https://github.com/Vedantraval2444/vr-portfolio.git)
cd vr-portfolio
2. Set Up the Backend# Navigate to the backend directory
cd backend

# Create and activate a virtual environment
# On Windows:
python -m venv venv
.\venv\Scripts\activate

# On macOS/Linux:
# python3 -m venv venv
# source venv/bin/activate

# Install the required Python packages
pip install -r requirements.txt

# Create a .env file in the 'backend' folder
# Add your secret keys to this file:
# SENDGRID_API_KEY="SG.your_sendgrid_api_key"
3. Set Up the Frontend# Navigate to the frontend directory
cd frontend

# Install the required Node.js packages
npm install
4. Run the ApplicationYou will need two separate terminals to run both the frontend and backend servers simultaneously.In your first terminal (for the backend):cd backend
.\venv\Scripts\activate
python app.py
Your backend will now be running at http://localhost:5000.In your second terminal (for the frontend):cd frontend
npm start
Your frontend will now be running at http://localhost:3000.🌐 DeploymentThis full-stack application was deployed using a two-part strategy.Backend Deployment (Render)The Python/Flask backend is hosted on Render.The project was pushed to a GitHub repository.A new "Web Service" was created on Render, connected to the repository.Configuration:Root Directory: backendBuild Command: pip install -r requirements.txtStart Command: gunicorn app:appThe secret keys (SENDGRID_API_KEY) were added as Environment Variables in the Render dashboard.Frontend Deployment (Netlify)The React frontend is hosted on Netlify.The fetch URL in Contact.js was updated to point to the live Render backend URL.A production-ready build was created by running npm run build in the frontend directory.The resulting build folder was manually deployed to Netlify via their drag-and-drop interface.📂 Project Structurevr-portfolio/
├── backend/
│   ├── app.py          # The Flask server logic
│   └── requirements.txt  # Python dependencies
└── frontend/
    ├── public/         # Static assets like images and resume.pdf
    ├── src/
    │   ├── components/   # All the React components
    │   ├── contexts/     # Theme management context
    │   └── App.js        # The main application component
    └── package.json    # Frontend dependencies
Thank you for visiting my repository! Feel free to connect with me.Vedant Raval
