import './App.css'
import Navbar from './components/Navbar.jsx'
import Herosection from './sections/Herosection.jsx';
import Infosection from './sections/Infosection.jsx';
import Layoutsection from './sections/Layoutsection.jsx';
import Testimonial from './sections/Testimonial.jsx';
import Customersection from './sections/Customersection.jsx';
import Contactsection from './sections/Contactsection.jsx';
import Footersection from './sections/Footersection.jsx';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <Testimonial />
      <Layoutsection />
      <Infosection />
      <Customersection />
      <Contactsection />
      <Footersection />
    </div>
  )
}

export default App;