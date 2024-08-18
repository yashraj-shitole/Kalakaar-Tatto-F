
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Components/Home";


function App() {

  return (
    <div className='relative'>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
    </BrowserRouter>    

    
    </div>
  )
}

export default App
