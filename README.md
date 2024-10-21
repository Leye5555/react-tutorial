## Day 1

To set up a React app with Vite on a new Windows PC, follow these steps:

### 1. **Install Node.js**

First, you need Node.js, which includes `npm` (Node Package Manager).

- Go to the official [Node.js website](https://nodejs.org/en/).
- Download and install the latest stable version of Node.js for Windows.
- After installation, confirm Node.js is installed by running the following commands in your Command Prompt (cmd):

```bash
node -v
npm -v
```

You should see the installed versions of Node and npm.

### 2. **Install Vite**

Once Node.js is installed, you can create a Vite project using npm.

- Open a terminal (Command Prompt, PowerShell, or any terminal you prefer).
- Navigate to the folder where you want to create your React project:

```bash
cd path\to\your\folder
```

- Now, run the following command to create a Vite-powered React app:

```bash
npm create vite@latest
```

- You will be prompted to name your project. For example, name it `my-react-app` or anything you'd like.
- Then, select `React` when asked for a framework and select `JavaScript` or `TypeScript` based on your preference.

```bash
✔ Project name: … my-react-app
✔ Select a framework: › React
✔ Select a variant: › JavaScript
```

### 3. **Navigate to the Project Folder**

After the setup is complete, navigate to your new project folder:

```bash
cd my-react-app
```

### 4. **Install Dependencies**

Inside your project folder, run the following command to install all the necessary dependencies:

```bash
npm install
```

### 5. **Run the Development Server**

Now, you can start your development server by running:

```bash
npm run dev
```

This will start the Vite development server. You should see something like this in the terminal:

```bash
VITE v3.x.x  ready in 300 ms

➜  Local:   http://localhost:5173/
```

Open the provided URL (`http://localhost:5173/`) in your browser to see your new React app running.

### 6. **Open the Project in a Code Editor**

- If you haven’t already, download and install a code editor like [Visual Studio Code](https://code.visualstudio.com/).
- Open your project folder in the code editor by selecting `File > Open Folder` and choosing your project directory (`my-react-app`).

### 7. **Start Developing**

You're all set! Now you can start building your React app by modifying the `src/App.jsx` file or other components.

This setup gives you a lightweight, fast development environment powered by Vite.
