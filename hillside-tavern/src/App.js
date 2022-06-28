import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
// import About from './Components/Pages/About'
// import Menu from './Components/Pages/Menu'
// import Drinks from './Components/Pages/Drinks'
// import Contact from './Components/Pages/Contact'






function App() {
  return(
      <Router className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
      {/* <Route path='/about' element={<About />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/drinks' element={<Drinks />} />
      <Route path='/contact' element={<Contact />} /> */}
        </Routes>
      </Router>
  )
  // <Router className='App'>
  //   <Routes>
  //     <Route path='/' element={<Home />} />
  //     {/* <Route path='/about' element={<About />} />
  //     <Route path='/menu' element={<Menu />} />
  //     <Route path='/drinks' element={<Drinks />} />
  //     <Route path='/contact' element={<Contact />} /> */}
  //   </Routes>
  // </Router>
  
}

export default App;
