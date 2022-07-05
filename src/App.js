import './App.css';

import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Header } from './components/Header/Header';
import { Landing } from './components/Landing/Landing';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About/>}/>

          <Route path="/contact" element={<Contact/>}/>

          <Route path="/" element={<Landing/>}/>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
