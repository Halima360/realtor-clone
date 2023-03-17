
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Offers from './pages/Offer';
import ForgotPassword from './pages/Forgotpassword';
import SignIn from './pages/Signin';
import PrivateRoute from './components/PrivateRoute';
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
        < Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<PrivateRoute/>}>
          <Route path='/profile' element={<Profile />}/>
          </Route>
        <Route path='/Offer' element={<Offers/>}/>
        <Route path='/Signin' element={<SignIn/>}/>
        <Route path='/Signup' element={<SignUp/>}/>
        
        <Route path='/Forgotpassword' element={<ForgotPassword/>}/>
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
