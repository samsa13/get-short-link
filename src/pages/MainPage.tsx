import { Card, Layout, Row } from 'antd'
import React, { FC } from 'react'
import MainForm from '../components/MainForm'

const MainPage:FC = () => {
  return (
    <Layout>
      <Row justify='center' align='middle' className='full-height'>
        <Card>
          <MainForm />
        </Card>
      </Row>
    </Layout>
  )
}

export default MainPage
