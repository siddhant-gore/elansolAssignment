<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>Project: Game of Thrones - API of Ice and Fire </h1>
  <p>This project is a MERN stack application that interacts with the <strong>Game of Thrones - API of Ice and Fire</strong>. It allows users to list, view details, and manage books, characters, and houses from the Game of Thrones universe.</p>

  <h2>Frontend (Client)</h2>
  <p>The frontend is a React application built using the <strong>Vite template</strong> for fast development and optimized builds. It leverages modern libraries and tools:</p>
  <ul>
    <li><strong>React</strong>: A JavaScript library for building user interfaces, used here for developing a dynamic and responsive frontend.</li>
    <li><strong>Bootstrap</strong>: A popular CSS framework used to quickly style the UI components with pre-built responsive design classes.</li>
    <li><strong>React-Bootstrap</strong>: The React component library for Bootstrap, providing easily reusable Bootstrap components in a React-friendly way.</li>
    <li><strong>Redux Toolkit (RTK)</strong>: Used for managing the global state and making API calls with RTK Query, simplifying data fetching and caching.</li>
    <li><strong>React-Router-Dom</strong>: A routing library for managing navigation and routing in a React app.</li>
    <li><strong>Framer Motion</strong>: A motion library used to create animations and transitions in the application.</li>
    <li><strong>React Icons</strong>: A popular icon library used to include icons throughout the UI.</li>
    <li><strong>React Loading Skeleton</strong>: Provides a skeleton loading screen for better user experience while content is being fetched.</li>
    <li><strong>React Toastify</strong>: A notification library to display toast messages for success, error, or information feedback.</li>
  </ul>
  <p><strong>Command to start the client:</strong></p>
  <pre><code>npm run dev</code></pre>

  <h2>Backend (Server)</h2>
  <p>The backend is built using <strong>Node.js</strong> with the following technologies:</p>
  <ul>
    <li><strong>Express</strong>: A minimal and flexible Node.js web application framework used for building the API endpoints.</li>
    <li><strong>Axios</strong>: A promise-based HTTP client used to fetch data from external APIs.</li>
    <li><strong>dotenv</strong>: Used to load environment variables from a <code>.env</code> file to manage sensitive information like API keys.</li>
    <li><strong>cors</strong>: Middleware used to enable Cross-Origin Resource Sharing, allowing the server to be accessed from different domains.</li>
    <li><strong>Nodemon</strong>: A development tool that automatically restarts the server when file changes are detected, providing a smoother development experience.</li>
  </ul>
  <h3>Data Management</h3>
  <p>Upon initializing the server, the data for books, characters, and houses is fetched from the <strong>Game of Thrones - API of Ice and Fire</strong> and stored in memory. All subsequent API calls fetch and manipulate this in-memory data.</p>
  
  <p><strong>Command to start the server:</strong></p>
  <pre><code>npm start</code></pre>

  <h2>Development Tools</h2>
  <ul>
    <li><strong>Vite</strong>: A fast development server and build tool, used here to bundle and serve the React app.</li>
    <li><strong>ESLint</strong>: A linting tool used to ensure that the code adheres to the best practices and coding standards.</li>
  </ul>

</body>
</html>
