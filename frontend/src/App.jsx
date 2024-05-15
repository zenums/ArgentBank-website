import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './services/redux/store'; 
import './App.css';
import Home from './views/home';
import NavBar from './components/navbar/navBar';
import Footer from './components/footer/footer';
import Login from './views/login';
import Profil from './views/profil';
import { PrivateRoute } from './auth/privateRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/profil" element={<PrivateRoute element={<Profil />} />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
