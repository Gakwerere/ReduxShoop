
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Containers/Header';
import ProductDetail from './Containers/ProductDetail';
import ProductListing from './Containers/ProductListing';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/> 
        <Routes>
            <Route path="/" exact element={<ProductListing/>} />
            <Route path="/product/:productId" exact element={<ProductDetail/>} />
            <Route>404 Not Found</Route>
            
          </Routes>
      </Router>
       
    </div>
  );
}

export default App;
