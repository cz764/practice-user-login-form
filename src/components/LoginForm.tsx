import { useState } from "react";

interface LoginFormProps {
  isLoading: boolean;
  error: string;
  onLogin: (username: string, password: string) => void;
  message: string;
}

export default function LoginForm({
  isLoading,
  error,
  onLogin,
  message,
}: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState(false);

  const isValidInput = () => {
    if (!username || !password) {
      setLocalError(true);
      return false;
    }
    setLocalError(false);
    return true;
  };

  const handleLogin = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (isValidInput()) {
      onLogin(username, password);
    } else {
      console.error(`invalid input`);
    }
  };

  return (
    <>
      <h1>User Login Form</h1>
      <form className="loginForm" name="loginForm" onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">User name: </label>
          <input
            id="username"
            name="username"
            className={localError ? "error" : "normal"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            name="password"
            type="password"
            className={localError ? "error" : "normal"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        {isLoading ? <p>Loading...</p> : null}
        {message ? (
          <p className={error ? "errorMessage" : "normalMessage"}>{message}</p>
        ) : null}
      </form>
    </>
  );
}
