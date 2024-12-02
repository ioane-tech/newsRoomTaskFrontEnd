import { useState } from "react";
import api from "../api/axiosConfig";
import { toast } from "react-toastify";


// registration hook
export function useRegister() {
    const [loading, setLoading] = useState(false);

    const register = async (username:string, password:string, navigate:any) => {
        setLoading(true);

        try {
            const response: any = await api.post('/auth/register', {
                username,
                password,
            });
            if(response.status === 201){
                toast.success(response.data.message)
                navigate('/login')
            }
        } catch (error: any) {
            console.error('Error during registration:', error);
            toast.error(error?.response?.data.message || 'something wrong with server!')
        } finally {
            setLoading(false);
        }
    };
  return { register, loading }
}

//  login hook
export function useLogin() {
    const [loading, setLoading] = useState(false);

    const login = async (username:string, password:string, navigate:any) => {
        setLoading(true);

        try {
            const response: any = await api.post('/auth/login', {
                username,
                password,
            });
            if(response.status === 200){
                toast.success(response.data.message)
                navigate('/blogs')
                localStorage.setItem('token', response.data.token)
            }
        } catch (error: any) {
            console.error('Error during registration:', error);
            toast.error(error?.response?.data.message || 'something wrong with server!')
        } finally {
            setLoading(false);
        }
    };
  return { login, loading }
}
