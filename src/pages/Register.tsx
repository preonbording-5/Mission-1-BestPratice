import { useNavigate } from 'react-router-dom'
import { useState, useEffect, FormEvent } from 'react'
import Signup from '../components/register/Signup'
import Signin from '../components/register/Signin'
import { getAccessToken } from '../lib/apis/tokenStore'


type RegisterMode = 'signUp' | 'singIn'

const Register = () => {
  const navigate = useNavigate()
  const [mode, setMode] = useState<RegisterMode>('signUp')


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()


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
