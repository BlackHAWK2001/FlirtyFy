FlirtyFy

FlirtyFy is a social media and chatting application with a React frontend and a Node.js/Express backend.

Frontend (React) Setup

This project was bootstrapped with Create React App.

Available Scripts

In the frontend (new) directory, you can run:

1. Start Development Server

npm start

Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

2. Run Tests

npm test

Launches the test runner in the interactive watch mode.

3. Build for Production

npm run build

Builds the app for production in the build/ folder.

4. Eject Configuration (Optional)

npm run eject

This command removes the default build dependency and gives full control over configurations.

Backend (Node.js/Express) Setup

This project is built using Node.js and Express.

Available Scripts

In the backend (Backend) directory, you can run:

1. Start Development Server

npm start

Runs the backend server on http://localhost:5000.

2. Run in Development Mode

npm run dev

Runs the backend using nodemon, which restarts the server on code changes.

Environment Variables

Create a .env file in the Backend directory and configure the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_app_password

Deployment

For deployment, follow the respective platform guides for frontend and backend hosting services.



