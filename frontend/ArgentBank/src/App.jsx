import './App.css'
import { Routes, Route , BrowserRouter} from 'react-router-dom'
import Home from './components/homepage/Home'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Profil from './components/profil/Profil'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
