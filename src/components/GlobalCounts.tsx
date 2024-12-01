import { toast } from 'react-toastify';

//css styles
import '../css/userDashboard.css'

//components
import Sign_in_counts_renderer from '../Componentsreusable/Sign_in_counts_renderer';
import LogoutButton from '../lib/smallComponents/LogoutButton';

//hooks
import useFetchGlobalCounts from '../hooks/useFetchGlobalCounts';
import useSocket from '../hooks/useSocket';


function GlobalCounts() {
    const {globalCounts, loading, fetchGlobalCounts} = useFetchGlobalCounts()

    // change data in real time
    useSocket("update_counts", () => {
        toast.success('Count changed!')
        fetchGlobalCounts(); 
    });

    return (
        <div className='dashboard_main_div'>
            <LogoutButton/>
            {globalCounts &&
                <Sign_in_counts_renderer data={globalCounts} header={'Global sing-in Counts'} navigationButtonText = {'Personal sign-in counts'} navigationLink ={'/userDashboard'} loading={loading}/>
            }
        </div>

    );
}

export default GlobalCounts