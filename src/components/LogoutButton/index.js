import {useAuth0} from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return  <button className='menu-item' onClick={() => logout()}>
  Sair
  </button>;
};

export default LogoutButton;
