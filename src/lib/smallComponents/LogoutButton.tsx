import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem('token')
    navigate('/login')
  };

  return (
    <button className='logout_button' onClick={logoutHandler}>Log out</button>
  );
};

export default LogoutButton;
