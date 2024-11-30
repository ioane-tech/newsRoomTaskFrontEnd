import { useNavigate } from 'react-router-dom';

// andtd components
import { Button } from 'antd';

//styles
import '../css/Home.css';

function Home() {
    const navigate = useNavigate();

    return (
      <div className="home_container">
        {/* header */}
        <h1>Welcome to the Supernova technical task</h1>

        {/* authantication buttons */}
        <div className="button_container">
          <Button
            type="primary"
            size="large"
            onClick={() => navigate('/register')}
          >
            Registration
          </Button>
          <Button
            type="default"
            size="large"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </div>
      </div>
    );
  };
  

export default Home