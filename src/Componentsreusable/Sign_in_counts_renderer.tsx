import { useNavigate } from 'react-router-dom';
//antd components
import { Table, Button } from 'antd';
import { useState } from 'react';
//css styles
import '../css/userDashboard.css'
//types
import { SignInCountsRendererProps } from '../types';

function Sign_in_counts_renderer({
    data,
    header,
    navigationButtonText,
    navigationLink,
  }: SignInCountsRendererProps) {
    
    const navigation = useNavigate()

    //states
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(2);

    // page change handler
    const pageChangeHandler = (page:number, pageSize:number) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    // row quantity handler
    const pageSizeChangeHandler = (value:number) => {
        setPageSize(value);
        setCurrentPage(1); 
    };

    // table columns
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: (text:string) => <span>{new Date(text).toLocaleDateString()}</span>,
        },
    ];

    // Pagination 
    const paginationProps = {
        current: currentPage,
        pageSize: pageSize,
        total: data.length,
        onChange: pageChangeHandler,
        showSizeChanger: true,
        onShowSizeChange: (current:number, size:number) => pageSizeChangeHandler(size),
        pageSizeOptions: ['2', '4', '8', '10'],
    };

    return (
        <div className='dashboard_main_div'>
            <Button
                onClick={()=> navigation(`${navigationLink}`)}
                className='global_counts_button' 
                type='primary'
            >
                {navigationButtonText}
            </Button>

            <div className="dashboard_container">
              <h1>Dashboard</h1>
              <h3>{header}</h3>

              {/* sing-in counts table*/}
              <Table
                columns={columns}
                dataSource={data.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                pagination={paginationProps}
                rowKey="id"
                className="dashboard_table"
              />
            </div>
        </div>
    );
}


export default Sign_in_counts_renderer