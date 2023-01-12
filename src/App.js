import './App.css';
import Home from './components/Home/Home.js';
import Footer from './components/layout/Footer/Footer.js';
import Header from './components/layout/Header/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
