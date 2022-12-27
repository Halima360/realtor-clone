
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Offers from './pages/Offer';
import ForgotPassword from './pages/Forgotpassword';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Profile from './pages/Profile';
import Header from './components/Header';
function App() {
  return (
    <div>
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Offer' element={<Offers/>}></Route>
        <Route path='/Signin' element={<SignIn/>}></Route>
        <Route path='/Signup' element={<SignUp/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Forgotpassword' element={<ForgotPassword/>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
