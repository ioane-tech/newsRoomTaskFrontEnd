import { Link, useNavigate } from 'react-router-dom';

//antd components
import { Form, Input, Button } from 'antd';

//hooks
import {useRegister} from '../hooks/useAuth';

function Register() {

  const { register, loading } = useRegister();

  const navigate = useNavigate();

  const onFinish = (values:any) => {
    const { name, password } = values;
    register(name, password, navigate);
  };

  return (
    <div className="centered_container">
      <div className="form_container">
        <h1>Register</h1>

        {/* Fegistration form */}
        <Form
          name="register"
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

          {/* password confirmation field */}
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm your password..." />
          </Form.Item>

          {/* submit button */}
          <Form.Item>
            <Button style={{"marginBottom":"20px"}} type="primary" htmlType="submit" loading = {loading}>
              Register
            </Button>

            <Link to={'/login'}>Already have an account?</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register