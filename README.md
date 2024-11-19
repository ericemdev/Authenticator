# Alternative for Google Authenticator

## Getting Started
## Introduction

This is a simple alternative for Google Authenticator. It is a Svelte script that generates a 6-digit code based on the current time and a secret key.

The secret key is a 16-character string that is shared between the server and the client. The server generates the secret key and sends it to the client. The client then uses the secret key to generate the 6-digit code. This code is updated periodically, making it a secure method for two-factor authentication (2FA).

The client can view the code once or save it in the local storage. The client can also export and import the keys as encrypted files using a password and file name.
### Prerequisites
- **Node.js** installed on your machine
- **Node Package Manager (npm)**

## Features
- Generate 6-digit code based on the current time and a secret key
- View once or save the keys in the local storage
- Export and import keys as encrypted files using a password and file name
- Dark mode and light mode
- Responsive design
- Progressive web app
- Chrome extension
- Offline support

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ericemdev/Authenticator.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the application:

    ```bash
    npm run dev
    ```

4. Open `http://localhost:5173` in your browser.

5. You can also build the project using:

    ```bash
    npm run build
    ```

---

Created with ❤️ by Ericem

