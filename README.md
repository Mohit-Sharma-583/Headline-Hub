# Headline Hub

**Headline Hub** is a full-stack web application designed for news aggregation and user interaction. The project is built using **React** for the frontend and **Node.js** with **Express** for the backend, leveraging **MongoDB** for data storage. This application allows users to sign up, log in, and manage their profiles while providing a seamless experience for browsing news articles.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Profile Management**: Users can manage their profiles, including updating their information and viewing their activity.
- **Responsive Design**: The frontend is built with a responsive design to ensure a great user experience on both desktop and mobile devices.
- **Real-time Updates**: The application uses modern web technologies to provide real-time updates and interactions.

## Tech Stack

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Router**: For routing and navigation.

### Backend
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing user data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Bcrypt**: For hashing passwords.
- **JSON Web Tokens (JWT)**: For secure user authentication.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mohit-Sharma-583/MP.git
   ```

2. **Navigate to the backend directory and install dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Set up your environment variables in a `.env` file**:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. **Start the backend server**:
   ```bash
   npm start
   ```

5. **Navigate to the frontend directory and install dependencies**:
   ```bash
   cd ../frontend
   npm install
   ```

6. **Start the frontend development server**:
   ```bash
   npm run dev
   ```

### Usage

- Access the application in your browser at `http://localhost:5173`.
- Use the provided authentication features to create an account and log in.

## API Endpoints

### Authentication

- **POST /api/auth/signup**: Create a new user account.
- **POST /api/auth/login**: Log in an existing user.
- **POST /api/auth/logout**: Log out the current user.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you would like to add.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [JSON Web Tokens](https://jwt.io/)
