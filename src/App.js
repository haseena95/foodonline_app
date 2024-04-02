
import './App.css';
import Header from './Header';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import Menu from './Menu';
import Footer from './Footer';

function App() {


  return (
    <BrowserRouter>
      <Nav />
      <Main />
      <Menu />
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
