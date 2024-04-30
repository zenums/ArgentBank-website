import './App.css'
import { Routes, Route , BrowserRouter} from 'react-router-dom'
import Home from './views/home'
import NavBar from './components/navbar/navBar'
import Footer from './components/footer/footer'
import Login from './views/login'
import Profil from './views/profil'

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
