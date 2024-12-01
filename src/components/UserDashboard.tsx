//css styles
import '../css/userDashboard.css'

//components
import Sign_in_counts_renderer from '../Componentsreusable/Sign_in_counts_renderer';

//types
import useFetchUserCounts from '../hooks/useFetchUserCounts';
import LogoutButton from '../lib/smallComponents/LogoutButton';
import useSocket from '../hooks/useSocket';
import { toast } from 'react-toastify';


function UserDashboard() {
    const {userlCounts, loading, fetchUserCounts} = useFetchUserCounts()

    // update counts in real time
    useSocket("update_counts", () => {
        toast.success('Count changed!')
        fetchUserCounts(); 
    });
    return (
        <div className='dashboard_main_div'>
            <LogoutButton/>
            {
                userlCounts &&
                <Sign_in_counts_renderer loading={loading} data={userlCounts} header={'User sing-in Counts'} navigationButtonText = {'Global sign-in counts'} navigationLink ={'/globalCounts'}/>
            }
        </div>
    );
}
    

export default UserDashboard