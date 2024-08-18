
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import ImageView from "./Components/ImageView";


function App() {

  return (
    <div className='relative'>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="gallery" element={<ImageView />} />
        </Route>
      </Routes>
    </BrowserRouter>    

    
    </div>
  )
}

export default App
