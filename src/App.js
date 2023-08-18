
import './App.css';
import {Nav} from './Components/NavBar/nav';
import {Home} from "./Components/Homebar/home";
import Search from './Components/Homebar/Search';

import { Support } from './Components/Homebar/Support';
import { Info } from './Components/Info/info';
import { Travels } from './Components/Homebar/Travels';
import { Subscribe } from './Components/Homebar/Subscribe';
import { Footer } from './Components/Footer/footer';


function App() {
  return (
    <div >
     <Nav/>
    <Home/>
    <Search/>
    <Support/>
    <Info/>
    <Travels/>
    <Subscribe/>
    <Footer/>
   
    </div>
  );
}

export default App;
