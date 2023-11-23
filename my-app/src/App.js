
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Data from './pages/Data';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
         <Route path="/home" exact Component={Home}/>
         <Route path="/introduction" exact Component={Introduction}/>
         <Route path="/data" exact Component={Data}/>
         <Route path="/contact" exact Component={Contact}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
