import './App.css';

import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Landing } from './components/Landing/Landing';
import "inter-ui/inter.css";
import "@fontsource/darker-grotesque"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div
      className='App'
      style={{
        fontFamily: 'Inter'
      }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About/>}/>

          <Route path="/contact" element={<Contact/>}/>

          <Route path="/" element={<Landing/>}/>
          <Route path="/conscious_site" element={<Landing/>}/>

        </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
