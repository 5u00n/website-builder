# Web Page Builder with CraftJS, Destack, React, and Firebase

This project is a powerful web page builder that combines the flexibility of CraftJS and Destack with the robustness of React and Firebase. It allows users to create dynamic web pages with a drag-and-drop interface while leveraging Firebase for authentication and database management.

## Features

- Drag-and-drop page builder using CraftJS and Destack
- React-based frontend for a smooth user experience
- Firebase Authentication for secure user management
- Firebase Realtime Database for storing and retrieving page designs
- Responsive design for various screen sizes

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm (v6 or later)
- Firebase account and project set up

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/5u00n/webpage-builder.git
   cd webpage-builder
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up Firebase configuration:
   - Create a `.env` file in the root directory
   - Add your Firebase configuration details:
     ```
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

## Usage

1. Start the development server:
   ```
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. Sign up or log in using Firebase Authentication

4. Start building your web pages using the drag-and-drop interface

5. Your designs will be automatically saved to Firebase Realtime Database

## Deployment

To deploy the application:

1. Build the project:
   ```
   npm run build
   ```

2. Deploy to Firebase Hosting:
   ```
   firebase deploy
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [CraftJS](https://craft.js.org/)
- [Destack](https://github.com/LiveDuo/destack)
- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)

