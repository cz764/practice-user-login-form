import { useState } from "react";
import "./App.css";
import { auth } from "./api";
function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    setIsLoading(true);
    setError(false);
    setMessage("");
    try {
      const { accesssToken } = await auth(userName, password);
      setMessage(`success, redirect. ${accesssToken}`);
    } catch (ex) {
      console.error(ex);
      setError(true);
      setMessage(`error, please verify email and password.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="loginContainer">
      <h2>Log in</h2>
      <div>
        <label htmlFor="userName">User name: </label>
        <input
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} disabled={isLoading}>
        Login
      </button>
      {isLoading ? <p>loading... </p> : null}
      {message && (
        <span className={error ? "error" : "success"}>{message}</span>
      )}
    </div>
  );
}

export default App;
