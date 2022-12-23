import { useNavigate } from 'react-router-dom'
import { useState, useEffect, FormEvent } from 'react'
import Signup from '../components/register/Signup'
import Signin from '../components/register/Signin'
import { getAccessToken } from '../lib/apis/tokenStore'

const validation = {
  id: (value: string) => value.includes('@'),
  password: (value: string) => value.length >= 8,
}

type RegisterMode = 'signUp' | 'singIn'

const Register = () => {
  const navigate = useNavigate()
  const [mode, setMode] = useState<RegisterMode>('signUp')
  const [id, setId] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const isIdError = !!id && !validation['id'](id)
  const isPasswordError = !!password && !validation['password'](password)

  const isInvalid = !!id || !!password || isIdError || isPasswordError

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (isInvalid) {
      return
    }

    mode === 'signUp' ? <Signup /> : <Signin />
  }

  useEffect(() => {
    if (getAccessToken()) {
      navigate('/todo')
    }
  }, [navigate])

  return <></>
}

export default Register
