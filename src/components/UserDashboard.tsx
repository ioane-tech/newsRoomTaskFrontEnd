//css styles
import '../css/userDashboard.css'

//components
import Sign_in_counts_renderer from '../Componentsreusable/Sign_in_counts_renderer';

//types
import useFetchUserCounts from '../hooks/useFetchUserCounts';
import LogoutButton from '../lib/smallComponents/LogoutButton';



function UserDashboard() {
    const {userlCounts, loading} = useFetchUserCounts()


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