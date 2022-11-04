import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <Sidebar/>
      <Navbar />
    </Router>
  )
}

export default App;
