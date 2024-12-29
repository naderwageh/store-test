
import { Container} from 'react-bootstrap'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Home from "./Componts/Home"
import Story from "./Componts/Story"
import Abute from "./Componts/Abute"
import Navbar from "./Componts/Navbar"
import Shoppingcartprovider from './Context/Shoppingcartcontext'
function App() {


  return (
    
    <Shoppingcartprovider>
    <Navbar/>
    <Container className='mb-4'>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/Story" element={<Story/>}/>
      <Route  path="/Abute" element={<Abute/>}/>
    </Routes>
    </Container>
    </Shoppingcartprovider>
    
  )
}

export default App
