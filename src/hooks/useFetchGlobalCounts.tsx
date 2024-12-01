import { useEffect, useState } from "react"
import api from "../api/axiosConfig"
import { toast } from "react-toastify"



function useFetchGlobalCounts() {
    const [loading, setLoading] = useState<boolean>(false)
    const [globalCounts, setGlobalCounts] = useState<any>()

    const fetchGlobalCounts = async () => {
        setLoading(true);
        const token = localStorage.getItem("token"); 
        if (!token) {
            toast.error("authentication token not found");
        }else{
            try {
                const response = await api.get("/counts/global_counts",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                if(response.data?.data.message){
                    toast.error(response.data?.data.message)
                    setGlobalCounts([{name: "data not found", date: ''}])
                }else{
                    setGlobalCounts(response.data?.data); 
                }
            } catch (error: any) {
                toast.error(error.response.data.data.message)
            } finally {
                setLoading(false);
            }
        }
    };


    useEffect(()=>{
        fetchGlobalCounts()
    },[])

  return {globalCounts, loading, fetchGlobalCounts}
}

export default useFetchGlobalCounts