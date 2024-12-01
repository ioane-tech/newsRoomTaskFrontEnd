//css styles
import '../css/userDashboard.css'


//components
import Sign_in_counts_renderer from '../Componentsreusable/Sign_in_counts_renderer';
import useFetchGlobalCounts from '../hooks/useFetchGlobalCounts';
import LogoutButton from '../lib/smallComponents/LogoutButton';


function GlobalCounts() {
    const {globalCounts, loading} = useFetchGlobalCounts()

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