import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IStat } from '../models/IStat';



const columns: ColumnsType<IStat> = [
    {
        title: 'Короткая ссылка',
        dataIndex: 'short',
        key: 'short',

    },
    {
        title: 'Исходная ссылка',
        dataIndex: 'target',
        key: 'target',
    },
    {
        title: 'Количество переходов по короткой ссылке',
        dataIndex: 'counter',
        key: 'counter',
    },
];



const ResTable: React.FC = () => {
    const { statistics } = useTypedSelector(state => state.statistics);
   
    return <Table columns={columns}
    dataSource={statistics} />;
}
export { ResTable }
