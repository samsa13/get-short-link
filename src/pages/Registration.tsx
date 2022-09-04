import { Card, Layout, Row } from 'antd'
import React, { FC } from 'react'
import RegForm from '../components/RegForm'

const Registration:FC = () => {
  return (
    <Layout>
    <Row justify='center' align='middle' className='full-height'>
      <Card>
        <RegForm />
      </Card>
    </Row>
  </Layout>
  )
}

export default Registration
