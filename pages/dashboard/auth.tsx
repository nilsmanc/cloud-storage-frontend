import { LoginForm } from '@/components/auth/LoginForm'
import { Tabs } from 'antd'
import { NextPage } from 'next'
import Head from 'next/head'

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard / Auth</title>
      </Head>
      <main style={{ width: 400, margin: '50px auto' }}>
        <Tabs
          items={[
            {
              label: 'Sign in',
              key: '1',
              children: <LoginForm />,
            },
            {
              label: 'Sign up',
              key: '2',
              children: <h1>Sign Up</h1>,
            },
          ]}
        ></Tabs>
      </main>
    </>
  )
}

export default AuthPage
