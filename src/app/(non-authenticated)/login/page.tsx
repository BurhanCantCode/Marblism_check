'use client'

import { Configuration } from '@/core/configuration'
import { AppHeader } from '@/designSystem/ui/AppHeader'
import { Button, Flex, Form, Input, Typography } from 'antd'
import { getProviders, signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import GoogleButton from 'react-google-button'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const { enqueueSnackbar } = useSnackbar()

  const [providers, setProviders] = useState<string[]>([])
  const [form] = Form.useForm()
  const [isLoading, setLoading] = useState(false)

  const errorKey = searchParams.get('error')

  const errorMessage = {
    Signin: 'Try signing in with a different account.',
    OAuthSignin: 'Try signing in with a different account.',
    OAuthCallback: 'Try signing in with a different account.',
    OAuthCreateAccount: 'Try signing in with a different account.',
    EmailCreateAccount: 'Try signing in with a different account.',
    Callback: 'Try signing in with a different account.',
    OAuthAccountNotLinked:
      'To confirm your identity, sign in with the same account you used originally.',
    EmailSignin: 'Check your email address.',
    CredentialsSignin:
      'Sign in failed. Check the details you provided are correct.',
    default: 'Unable to sign in.',
  }[errorKey ?? 'default']

  useEffect(() => {
    fetchProviders()

    if (Configuration.isDevelopment()) {
      form.setFieldValue('email', 'test@test.com')
      form.setFieldValue('password', 'password')
    }
  }, [])

  const fetchProviders = async () => {
    try {
      const providers = await getProviders()

      setProviders(Object.keys(providers))
    } catch {
      // ignore
    }
  }

  const handleProviderSignIn = async provider => {
    setLoading(true)
    await signIn(provider, { callbackUrl: '/home' })
  }

  const handleSubmit = async (values: any) => {
    setLoading(true)

    try {
      await signIn('credentials', {
        email: values.email,
        password: values.password,
        callbackUrl: '/home',
      })
    } catch (error) {
      enqueueSnackbar(`Could not login: ${error.message}`, { variant: 'error' })

      setLoading(false)
    }
  }

  const ProviderButton = ({ provider }) => {
    switch (provider) {
      case 'google':
        return <GoogleButton onClick={() => handleProviderSignIn(provider)} />
      default:
        return null
    }
  }

  return (
    <Flex align="center" justify="center" vertical flex={1}>
      <Flex
        vertical
        style={{
          width: '340px',
          paddingBottom: '100px',
          paddingTop: '100px',
        }}
        gap="middle"
      >
        <AppHeader description="Welcome!" />

        {errorKey && (
          <Typography.Text type="danger">{errorMessage}</Typography.Text>
        )}

        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Email is required' }]}
          >
            <Input type="email" placeholder="Your email" autoComplete="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Password is required' }]}
          >
            <Input.Password
              type="password"
              placeholder="Your password"
              autoComplete="current-password"
            />
          </Form.Item>

          <Form.Item>
            <Flex justify="end">
              <Button
                type="link"
                onClick={() => router.push('/reset-password')}
                style={{ padding: 0, margin: 0 }}
              >
                Forgot password?
              </Button>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              Sign in
            </Button>
          </Form.Item>
        </Form>

        {providers.length > 1 && (
          <>
            <Flex justify="center">
              <Typography.Text type="secondary">Or</Typography.Text>
            </Flex>

            <Flex
              gap={'small'}
              justify="center"
              style={{ marginBottom: '20px' }}
            >
              {providers.map(provider => (
                <ProviderButton
                  key={`button-${provider}`}
                  provider={provider}
                />
              ))}
            </Flex>
          </>
        )}

        <Button
          ghost
          style={{ border: 'none' }}
          onClick={() => router.push('/register')}
        >
          <Flex gap={'small'} justify="center">
            <Typography.Text type="secondary">No account?</Typography.Text>{' '}
            <Typography.Text>Sign up</Typography.Text>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  )
}
