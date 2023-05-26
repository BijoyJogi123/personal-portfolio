import { Routes,Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <>
  <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route  path="about" element={<About />} />
      <Route  path="contact" element={<Contact />} />
      <Route  path="Projects" element={<Projects />} />
      <Route  path="Skills" element={<Skills />} />
      </Route>
      
    </Routes>
    </>
  );
}

export default App;
