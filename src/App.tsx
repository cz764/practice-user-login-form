import "./App.css";
import LoginForm from "./components/LoginForm";
import { auth } from "./api";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleAuth = async (username: string, password: string) => {
    setIsLoading(true);
    setError("");
    setMessage("");
    try {
      const data = await auth(username, password);
      console.log(data); // should never log credentials, but since this is an interview practice, there's no further requirement, let's log it for now.
      setMessage("Login success, redirecting.");
    } catch (ex) {
      console.error(ex);
      setError(
        ex instanceof Error ? ex.message : "An unexpected error occurred.",
      );
      setMessage("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <LoginForm
        isLoading={isLoading}
        error={error}
        onLogin={handleAuth}
        message={message}
      />
    </div>
  );
}

export default App;
