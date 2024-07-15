import './App.css'
import Dashboard from "../Dashboard/Dashboard";

export default function App() {

  return (
    <>
      <header>
        <h1>TypeScript ETA Calculator</h1>
      </header>
      <div className="App">
        <Dashboard />
      </div>
      <footer>
        <p>Created by Spencer Whitehead. Copyright 2024.</p>
      </footer>
    </>
  );
}