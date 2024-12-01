import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

//styles
import 'antd/dist/antd';
import './App.css';

// react components
import AppRoutes from './components/Routes';
import { isTokenExpired } from './lib/smallComponents/isTokenExpired';

import io from "socket.io-client";

const socket = io("http://127.0.0.1:5000");

function App() {
  const navigate = useNavigate()
  

  //notification if global count reaches 5
  useEffect(() => {
    socket.on('notification', (data) => {
      if (data?.message) {
        toast.info(data.message);
      }
    });
    return () => {
      socket.off('notification');
    };
  }, []);


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
