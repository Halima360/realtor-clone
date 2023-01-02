
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Offers from './pages/Offer';
import ForgotPassword from './pages/Forgotpassword';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Profile from './pages/Profile';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
     
     <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

    </div>
  );
}

export default App;
