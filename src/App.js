import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './component/Layout';
import Home from './component/Home';
import Sidebar from './component/Sidebar'
import About from './component/AboutSection/about';
import ContactPage from './component/ContactPage';
import '../src/component/Layout/index.css';
import ProjectSection from './component/ProjectSection';
import EducationSection from './component/EducationSection';
import MyProfile from './component/MyProfile';
import ParticleComponent from './component/Tspartcle/ParticleComponent';
import AnimatedCurs from './component/Cursor/AnimatedCurs';
function App() {
  return (
    <BrowserRouter>
      <AnimatedCurs />
      <ParticleComponent />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/education" element={<EducationSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/myprofiles" element={<MyProfile />} />
        <Route path='/projects' element={<ProjectSection />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
