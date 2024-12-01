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
    loading,
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
            dataIndex: 'username',
            key: 'name',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: (text: string) => {
                const DateTime = new Date(text).toLocaleString(); 
                return <span>{DateTime}</span>;
            },
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

    console.log(data)
    return (
        <div>

            {/* if data loading */}
            {
                loading &&
                <div className='loading_container'>
                    <p>Loading...</p>
                </div>
            }

            <Button
                onClick={()=> navigation(`${navigationLink}`)}
                className='global_counts_button' 
                type='primary'
            >
                {navigationButtonText}
            </Button>

            {/* sing-in counts table*/}
            <div className="dashboard_container">
              <h1>Dashboard</h1>
              <h3>{header}</h3>
              {
                data &&
                <Table
                  columns={columns}
                  dataSource={data.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                  pagination={paginationProps}
                  rowKey="id"
                  className="dashboard_table"
                />
              }
            </div>
        </div>
    );
}


export default Sign_in_counts_renderer