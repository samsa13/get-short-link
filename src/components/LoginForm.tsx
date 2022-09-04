import { Button, Checkbox, Form, Input } from 'antd'
import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { RoutNames } from '../routes'
import { AuthActionCreators } from '../store/reducers/auth/action-creators'
import { rules } from '../utils/rules'

const LoginForm: FC = () => {
    const { error, isLoading } = useTypedSelector(state => state.isAuth);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useActions();
    const {isAuth} = useTypedSelector(state => state.isAuth)
    const navigate = useNavigate();

    const submit = () => {
        login(username, password);
        if(!isAuth){
            navigate(RoutNames.LOGIN);
            
        } 
            navigate(RoutNames.MAIN_PAGE)
        
         
    }

    const handleUsername: React.ChangeEventHandler<HTMLInputElement> = (e) => setUsername(e.target.value);
    const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => setPassword(e.target.value);

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Авторизация пользователя</h1>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="on"
                onFinish={submit}
            >
                {error && <div style={{ color: 'red' }}>
                    {error}</div>}
                <Form.Item
                    label="Логин"
                    name="username"
                    rules={[rules.required('Введите имя пользователя')]}
                    
                >
                    <Input value={username}
                        onChange={handleUsername}
                    />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[rules.required('Введите пароль')]}
                >
                    <Input.Password value={password}
                        onChange={handlePassword} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default LoginForm
