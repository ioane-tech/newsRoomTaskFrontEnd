//antd components
import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values:any) => {
    setLoading(true); 


    setTimeout(() => {
      console.log('Form Values:', values);
      setLoading(false); 
    }, 2000); 
  };

  return (
    <div className="centered_container">
      <div className="form_container">
        <h1>Login</h1>
        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
        >
          {/* name field */}
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Name is required!' }]}
          >
            <Input placeholder="Enter your name..." />
          </Form.Item>

          {/* password field */}
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Password is required!' }]}
          >
            <Input.Password placeholder="Enter your password..." />
          </Form.Item>
          <Form.Item>
            <Button style={{"marginBottom":'20px'}} type="primary" htmlType="submit" loading={loading}>
              Login
            </Button>

            <Link to={'/register'}>Don`t have an account?</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login