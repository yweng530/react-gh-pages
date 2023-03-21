
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
         <Route path="/" exact Component={Home}/>
         <Route path="/introduction" exact Component={Introduction}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
