import './App.css'
import Navbar from './components/Navbar.jsx'
import Herosection from './sections/Herosection.jsx';
import Layoutsection from './sections/Layoutsection.jsx';
import Testimonial from './sections/Testimonial.jsx';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <Testimonial />
      <Layoutsection />
    </div>
  )
}

export default App;