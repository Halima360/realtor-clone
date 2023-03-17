
import { Outlet, Navigate } from 'react-router-dom';
import useAuthStatus from '../hooks/useAuthStatus';
export default function PrivateRoute() {
    const {loggedIn,loading} = useAuthStatus();
if(loading){
  return <h3> Loading ...</h3>
}
  return loggedIn ? <Outlet /> : <Navigate to="/Signin" />;
  
  
}
