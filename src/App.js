import logo from './logo.svg';
import './App.css';
import Home from './landingpage/pages/homePage/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutHome from './layout/LayoutHome';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
      <Route path="/" element={<LayoutHome />}>
            <Route path="/" element={<Home />} />
          </Route>
          </Routes>
     </div>


    </Router>
    
  );
}

export default App;
