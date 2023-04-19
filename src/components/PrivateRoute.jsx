
import { Outlet, Navigate } from 'react-router-dom';
import useAuthStatus from '../hooks/useAuthStatus';
import Spinner from './Spinner';
export default function PrivateRoute() {
    const {loggedIn,loading} = useAuthStatus();
if(loading){
  return <Spinner/>
}
  return loggedIn ? <Outlet /> : <Navigate to="/Signin" />;
  
  
}
