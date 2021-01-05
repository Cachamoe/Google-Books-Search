import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Search from "./pages/search";
import Save from "./pages/saved";
import { NoResults } from "./pages/noResults";


function App() {
  return (
    <>
    <Navbar />
    <Jumbotron />
    <Router>
      <Route exact path="/" component={Search}/>
      <Route exact path="/saved" component={Save}/>
      <Route exact path="/saved/:id" component={Save} />
      <Route component={NoResults} /> 
    </Router>
    </>
  );
}

export default App;
