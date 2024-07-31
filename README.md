# Chat Application

A full-stack chat application built with Express.js, EJS, and MongoDB. This application allows users to create, view, edit, and delete chat messages.

## Features

- **Create New Chats**: Users can initiate new chat messages.
- **View Chats**: All chat messages are displayed in a user-friendly interface.
- **Edit Chats**: Users can update existing chat messages.
- **Delete Chats**: Users can remove chat messages.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS
- **Database**: MongoDB
- **Styling**: CSS
- **Miscellaneous**: Method-Override for handling PUT and DELETE requests

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/chat-application.git
   cd chat-application
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment**:
   - Ensure MongoDB is running locally or update the connection URL in the `init.js` file.

4. **Run the Application**:
   ```bash
   npm start
   ```
   The application will start on port `8080` by default.

## Usage

- **View Chats**: Navigate to `http://localhost:8080/chats` to view all chats.
- **Create a New Chat**: Go to `http://localhost:8080/chats/new` to add a new chat.
- **Edit a Chat**: Click the "Edit" button next to a chat message.
- **Delete a Chat**: Click the "Delete" button next to a chat message.

## Project Structure

- **models/chat.js**: Contains the schema and model for chat messages.
- **views/index.ejs**: Displays all chat messages.
- **views/new.ejs**: Form for creating new chat messages.
- **views/edit.ejs**: Form for editing existing chat messages.
- **public/style.css**: CSS file for styling the application.

## Contributing

Feel free to submit issues or pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please contact [Ritik Singh](mailto:ritik221jaggi@gmail.com).
```

This `README.md` includes the installation steps and environment setup within the Markdown sections, ensuring that everything is presented in a structured and readable manner.
