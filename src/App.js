import './App.css';
import './main.scss';
import Header from './components/Header';
import About from './components/About';
import Shop from './components/Shop';
import Brands from './components/Brands';
import Clients from './components/Clients';
import Service from './components/Service';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Shop/>
      <Brands/>
      <Clients/>
      <Service/>
      <Footer/>
    </div>
  );
}

export default App;
