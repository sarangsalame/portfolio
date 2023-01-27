import './App.css';
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Services from './components/service/Service'
import Testimonials from './components/testimonials/Testimonials'
import Navbar from './components/nav/Navbar'
import Portfolio from './components/portfolio/Protfolio'
function App() {
  return (
    <>
      
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
