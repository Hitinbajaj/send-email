**Email Sender Application**

This application allows users to send emails through a simple interface. It consists of a React frontend and a Node.js backend. Users input email details such as recipient, subject, and message, then the application sends the email using the provided information via an API call to the backend.

Usage:

Clone the repository.
Navigate to the project directory.
Install dependencies for both the frontend and backend using npm install.
Start the frontend and backend servers using npm run dev in their respective directories.
Access the application in your web browser at http://localhost:3000.

Features:

Responsive UI: The application's interface adjusts to different screen sizes for a seamless user experience.
Loader Modal: Displays a loading spinner while the email is being sent.
Success Modal: Indicates successful email delivery and fades away after 2 seconds.
Error Modal: Alerts the user if there's an issue with sending the email, allowing for easy error handling.

Technologies Used:

React: Frontend library for building user interfaces.
Node.js: Backend runtime environment for running JavaScript server-side.
Express: Web application framework for Node.js.
Nodemailer: Node.js module for sending emails.
Tailwind CSS: Utility-first CSS framework for styling the application.


Ensure that you have configured the SMTP server details in the backend's server.js file and update the API endpoint in the frontend's App.js file accordingly.