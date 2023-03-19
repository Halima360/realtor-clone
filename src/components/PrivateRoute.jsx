
import { Outlet, Navigate } from 'react-router-dom';
import useAuthStatus from '../hooks/useAuthStatus';
import Spinner from './spinner';
export default function PrivateRoute() {
    const {loggedIn,loading} = useAuthStatus();
if(loading){
  return <Spinner/>
}
  return loggedIn ? <Outlet /> : <Navigate to="/Signin" />;
  
  
}
