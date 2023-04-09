import './App.css';

import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import Home from '../src/components/Home/Home'

function App() {
  return (
    <BrowserRouter >
    <div className="App"> 
    <Routes>
     <Route  path='/home' element={<Home />}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
