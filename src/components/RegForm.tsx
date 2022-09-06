import { Button, Form, Input } from 'antd'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { isRegExp } from 'util/types';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RoutNames } from '../routes';
import { rules } from '../utils/rules';

const RegForm :React.FunctionComponent = () => {
    const {error, isLoading, isReg}  = useTypedSelector(state => state.isReg);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {reg} = useActions();
    const navigate = useNavigate();

    const submit = () => {
        reg(username, password);
        isReg
        ? navigate(RoutNames.LOGIN)
        : navigate(RoutNames.REG)
    }

    const handleUsername: React.ChangeEventHandler<HTMLInputElement> = (e) => setUsername(e.target.value);
    const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => setPassword(e.target.value);

  return (
    <>
    <h1 style={{textAlign: 'center'}}>Форма регитрации</h1>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    autoComplete="off"
    onFinish={submit}
>
    {error && <div style={{color: 'red'}}>
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
                        onChange={handlePassword}/>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
            Зарегистрироваться
        </Button>
    </Form.Item>
</Form>
</>
  )
}

export default RegForm
