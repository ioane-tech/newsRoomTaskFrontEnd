import { useEffect, useState } from "react"
import api from "../api/axiosConfig"
import { toast } from "react-toastify"



function useFetchUserCounts() {
    const [loading, setLoading] = useState<boolean>(false)
    const [userlCounts, setUserCounts] = useState<any>()

    const fetchUserCounts = async () => {
        setLoading(true);
        const token = localStorage.getItem("token"); 
        if (!token) {
            toast.error("authentication token not found");
        }else{

            try {
                const response = await api.get("/counts/user_counts",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                if(response.data?.data.message){
                    toast.error(response.data?.data.message)
                    setUserCounts([{name: "data not found", date: ''}])
                }else{
                    setUserCounts(response.data?.data); 
                }
                console.log(response)
            } catch (error: any) {
                toast.error(error.response.data.data.message)
            } finally {
                setLoading(false);
            }
        }
    };


    useEffect(()=>{
        fetchUserCounts()
    },[])

  return {userlCounts, loading, fetchUserCounts}
}

export default useFetchUserCounts