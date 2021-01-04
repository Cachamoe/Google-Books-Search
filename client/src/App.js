import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Search from "./pages/search";
// import Save from "./pages/save";

function App() {
  return (
    <>
    <Navbar />
    
    <Jumbotron />
    <Router>
      <Route exact path="/" component={Search}/>
    </Router>
    </>
  );
}

export default App;
