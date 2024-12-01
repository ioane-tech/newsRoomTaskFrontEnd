import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useAuth';

//antd components
import { Form, Input, Button } from 'antd';


function Login() {
  const { login, loading } = useLogin();

  const navigate = useNavigate();

  const onFinish = async (values:any) => {
    const { name, password } = values;
    login(name, password, navigate);
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