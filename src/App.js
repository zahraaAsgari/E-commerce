
//import react-router-dom
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
//import pages
import Home from "./pages/Home";
import ProductDetail from './pages/ProductDetail';
//import components
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';



function App() {
  return (
    <Router>

    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
    </Routes>
    <SideBar/>
    <Footer/>
     
    </Router>
  );
}

export default App;
