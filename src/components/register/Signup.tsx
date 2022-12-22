
import React,{useState, useEffect, useMemo, ChangeEvent} from 'react'
import { useNavigate } from 'react-router-dom'
import { getAccessToken, setAccessToken } from '../../lib/utils/AcessTokenStore'
import { User, UserValidation, } from '../../lib/types/User.interface'
import getRegexVerification from '../../lib/utils/Getregex'
import styled from 'styled-components'

const Singup = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState<User>({
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
  

    setUser({
      ...user, 
      [name]: value
  })
    setUserValidation({ 
      ...userValidation, 
      [name]: regexp 
    })
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
<WholeWrap>
  <p>회원가입</p>
  <Input
  type='email'
  name='email'
  placeholder='이메일을 입력해주세요'
  value={user.email}
  onChange={onChangeUser}
  isError={user.email.length > 0 && !userValidation.email}
  />
  {user.email.length>0 && !userValidation.email && (
    <ErrMsg>이메일 형식이 올바르지 않습니다.</ErrMsg>
  )}
  <Input
  type='password'
  name='password'
  value={user.password}
  placeholder='비밀번호를 입력해주세요'
  onChange={onChangeUser}
  isError={user.email.length > 0 && !userValidation.email}
  
  />
    {user.password.length>0 && !userValidation.password && (
    <ErrMsg>8 글자 이상 입력해 주세요</ErrMsg>
  )}
  <Button
  onClick={handleSignUpClick}
  disabled={isUserValidation}
  > 
    회원가입
  </Button>
</WholeWrap>
  ) 
}

export default Singup


const WholeWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const Input = styled.input``

const Button = styled.button`
  &:disabled {
  }
`

const ErrMsg = styled.p`
color: red
font-size : 10px
margin: 5px 0 0 0
`
