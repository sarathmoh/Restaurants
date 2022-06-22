
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Home   from'./components/Home'
import Details from './components/Details';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (

    
    <Router>
      <Header />
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/information/:id' element={<Details/>}/>
          

      </Routes>
      <Footer />
      </Router>
    
  );
}

export default App;
 