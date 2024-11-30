//css styles
import '../css/userDashboard.css'

//components
import Sign_in_counts_renderer from '../Componentsreusable/Sign_in_counts_renderer';

//types
import { DataType } from '../types';



function UserDashboard() {
    const data: DataType[] = [
        { id: 1, name: 'John Doe', date: '2024-11-01' },
        { id: 2, name: 'Jane Smith', date: '2024-11-02' },
        { id: 3, name: 'Robert Brown', date: '2024-11-03' },
        { id: 4, name: 'Mary Johnson', date: '2024-11-04' },
        { id: 5, name: 'James Lee', date: '2024-11-05' },
        { id: 6, name: 'Emily White', date: '2024-11-06' },
        { id: 7, name: 'Michael Harris', date: '2024-11-07' },
        { id: 8, name: 'Sarah Clark', date: '2024-11-08' },
        { id: 9, name: 'William Lewis', date: '2024-11-09' },
        { id: 10, name: 'David Walker', date: '2024-11-10' },
    ];
    

    return (
        <div>
            <Sign_in_counts_renderer data={data} header={'User sing-in Counts'} navigationButtonText = {'Global sign-in counts'} navigationLink ={'/globalCounts'}/>
        </div>
    );
}
    

export default UserDashboard