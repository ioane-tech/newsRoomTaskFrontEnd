import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

//styles
import 'antd/dist/antd';
import './App.css';

// react components
import AppRoutes from './components/Routes';
import { isTokenExpired } from './lib/smallComponents/isTokenExpired';
import useSocket from './hooks/useSocket';


function App() {
  const navigate = useNavigate()
  

  //notification if global count reaches 5
  useSocket("notification", () => {
    toast.info('Global count has reached 5!');
  });


  // check unauthorised access or token expiration
  useEffect(()=>{
    if(isTokenExpired()){
      toast.error('token expired or you are unauthanticated!')
      navigate('/login')
    }
  },[])
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
