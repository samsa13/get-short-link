import { Layout, Menu, Row } from 'antd'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RoutNames } from '../routes';

const Navbar: FC = () => {

    const navigate = useNavigate();
    const {logout} = useActions();

    const goToLogin = () => {
        navigate(RoutNames.LOGIN)
    }
    const goToReg = () => {
        navigate(RoutNames.REG)
    }
    const exit = () => {
        logout();
        navigate(RoutNames.LOGIN)
    }

    const { isAuth, user } = useTypedSelector(state => state.isAuth)

    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth
                    ?<>
                    <div style={{color:'white'}}>
                        {user.username}
                    </div>
                     <Menu theme="dark"
                        mode="horizontal"
                        selectable={false}>
                        <Menu.Item
                            onClick={exit}
                            key={2}
                        >
                            Выйти
                        </Menu.Item>
                    </Menu>
                    </>
                    : <Menu theme="dark"
                    mode="horizontal"
                    selectable={false}>
                    <Menu.Item
                        onClick={goToLogin}
                        key={1}
                    >
                        Войти
                    </Menu.Item>
                    <Menu.Item
                        onClick={goToReg}
                        key={2}
                    >
                        Зарегистрироваться
                    </Menu.Item>
                    
                </Menu>
                }



            </Row>
        </Layout.Header>
    )
}

export default Navbar
