import { Button, Form, Input, Select } from 'antd'
import React, { useState, useEffect } from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { rules } from '../utils/rules'
import Clipboard from './Clipboard';
import { ResTable } from './resTable';


const MainForm: React.FC = () => {

    const { error, isLoading, shortLink } = useTypedSelector(state => state.link);
    const { statistics } = useTypedSelector(state => state.statistics)
    const { token } = useTypedSelector(state => state.isAuth);
    const [link, setLink] = useState('');
    const [order, setOrder] = useState('asc_short');

    const orders = ['asc_short', 'asc_target', 'asc_counter', 'desc_short', 'desc_target', 'desc_counter']

    const { postLink, getStatistics } = useActions();

    const submit = () => {
        postLink(link, token);
        setLink('');
    }

    const handleLink: React.ChangeEventHandler<HTMLInputElement> = e => setLink(e.target.value);

    useEffect(() => {
        getStatistics(order, '0', '150', token)
    }
        , [order, token, statistics]
    );


    const handleChange = (value: string) => setOrder(value)

    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={submit}>

                <h1 style={{ textAlign: 'center' }}>Создать короткую ссылку</h1>

                {error && <div style={{ color: 'red' }}>
                    {error}</div>}

                <Form.Item
                    label="Ссылка"
                    name="link"
                    rules={[rules.required('Введите ссылку')]}
                >
                    <Input value={link}
                        onChange={handleLink} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }} >
                    <Button type="primary"
                        htmlType="submit"
                        loading={isLoading}>
                        Создать короткую ссылку
                    </Button>
                </Form.Item>

            </Form>
            {shortLink &&
                <div>
                    <div style={{textAlign:'center', marginBottom: '20px'}}>
                        http://79.143.31.216/s/{shortLink}
                    </div>
                    <Clipboard url={'http://79.143.31.216/s/' + shortLink}></Clipboard>
                </div>
            }
            <Select defaultValue={order}
                value={order}
                style={{ width: 120 }}
                onChange={handleChange}>
                {orders.map(order =>
                    <Select.Option key={order}>{order}
                    </Select.Option>
                )}
            </Select>

            <ResTable />
        </>
    )
}

export default MainForm
