
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs';
import Gallery from './Gallery';

function App() {
  return (
    <BrowserRouter>
     <Routes >
        <Route path="/" element={<Layout />}>
           <Route index element={<Home/>} />
           <Route path='AboutUs' element={<AboutUs />} />
           <Route path='Services' element={<Services />} />
           <Route path='Gallery' element={<Gallery />} />
           <Route path='ContactUs' element={<ContactUs />} />
       </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;