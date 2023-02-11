import './App.css';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';

function App() {
  return (
    <div className='app'>
        <Header />
        <Hero />
        <Specials />
        <Testimonials />
        <Footer />
    </div>
  );
}

export default App;
