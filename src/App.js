import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';
import Header from './Components/Home/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import ContactMe from './Components/Home/ContactMe/ContactMe';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutMe">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/projectDetails/:id">
            <ProjectDetails></ProjectDetails>
          </Route>
          <Route path="/contactMe">
            <ContactMe></ContactMe>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
