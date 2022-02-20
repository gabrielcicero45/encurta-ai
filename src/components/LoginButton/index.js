import './login-button.css';
import {FcGoogle} from 'react-icons/fc';
import {useAuth0} from '@auth0/auth0-react';


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return  <button className='menu-item social' onClick={() => loginWithRedirect()}>
  <FcGoogle id="google-icon" size={24}/>
  Faça seu login com Google
  </button>;
};

export default LoginButton;

