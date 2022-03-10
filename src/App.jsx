import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import HomePage from './components/pages/HomePage';
import Hobby from './components/pages/Hobby';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
            <Switch>
              <Route exact path="/"> <HomePage />  </Route>
              <Route exact path="/projects"> <Projects />  </Route>
              <Route exact path="/blog"> <Blog />  </Route>
              <Route exact path="/about"> <About />  </Route>
              <Route exact path="/hobby"> <Hobby />  </Route>
              <Route exact path="/contact"> <Contact />  </Route>


            </Switch>
        
        <Footer />
      </Router>
       
    </div>
  );
}

export default App;
