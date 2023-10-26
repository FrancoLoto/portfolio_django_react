import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import PortafolioDetail from './components/PortafolioDetail';


function App() {

  

  return (
    <>
    <Router>
        <Routes>

          <Route exact path="/" element={<Home />} />

          <Route path="/portfolio/detail/:projectId"  element={<PortafolioDetail />}/>
            
        </Routes>
      </Router>
    </>
  );
}

export default App;
