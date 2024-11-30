//css styles
import '../css/userDashboard.css'

//types
import { DataType } from '../types';

//components
import Sign_in_counts_renderer from '../Componentsreusable/Sign_in_counts_renderer';


function GlobalCounts() {
    const data: DataType[] = [
        { id: 1, name: 'ioane turmanidze', date: '2024-11-01' },
        { id: 2, name: 'me var me', date: '2024-11-02' },
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
            <Sign_in_counts_renderer data={data} header={'Global sing-in Counts'} navigationButtonText = {'Personal sign-in counts'} navigationLink ={'/userDashboard'}/>
        </div>

    );
}

export default GlobalCounts