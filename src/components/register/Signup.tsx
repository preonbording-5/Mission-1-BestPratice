import React,{useState,useCallback, useEffect, useMemo, ChangeEvent} from 'react'
import { useNavigate } from 'react-router-dom'
import { getAccessToken, setAccessToken } from '../../lib/utils/AcessTokenStore'
import { User, UserValidation, } from '../../lib/types/User.interface'
import getRegexVerification from '../../lib/utils/Getregex'


const Singup = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email:'',
    password:'',
  })

  const [userValidation, setUserValidation] = useState<UserValidation>({
    email: false,
    password: false,
  })

  const isUserValidation = useMemo(
    () => !(userValidation.email && userValidation.password),
    [userValidation.email, userValidation.password],
  )

  const onChangeUser=(e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const regexp = getRegexVerification(name as 'email' | 'password', value)

    setUser({ ...user, [name]: value })
    setUserValidation({ ...userValidation, [name]: regexp })
  }
  
  const handleSignUpClick =async () => {
    try {
      const response = 'api 호출 구간 '
      // await Auth.SignUp(user)
      alert('회원가입 성공~!')
      setAccessToken(response)
      navigate('/todo');
    } catch (error: any) {
      alert(error.response?.data?.message || '회원가입 실패~!')
    }
  }

    useEffect(() => {
      if(getAccessToken()) {
        navigate('/todo')
      }
    }, [])


  return (
<div>
  <input
  type='email'
  name='email'
  placeholder='이메일을 입력해주세요'
  value={user.email}
  onChange={onChangeUser}
  />
  <input
  type='password'
  name='password'
  value={user.password}
  placeholder='비밀번호를 입력해주세요'
  />
  <button
  onClick={handleSignUpClick}
  disabled={isUserValidation}
  > 
    회원가입
  </button>
</div>
  ) 
}

export default Singup
