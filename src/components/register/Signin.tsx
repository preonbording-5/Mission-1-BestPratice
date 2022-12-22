import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAccessToken, setAccessToken } from '../../lib/utils/AcessTokenStore'
import { User, UserValidation } from '../../lib/types/User.interface'
import getRegexVerification from '../../lib/utils/Getregex'
import styled from 'styled-components'

const Signin = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
  })

  const [userValidation, setUserValidation] = useState<UserValidation>({
    email: false,
    password: false,
  })

  const isUserValidation = useMemo(
    () => !(userValidation.email && userValidation.password),
    [userValidation.email, userValidation.password],
  )

  const onChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const regexp = getRegexVerification(name as 'email' | 'password', value)

    setUser({ ...user, [name]: value })
    setUserValidation({ ...userValidation, [name]: regexp })
  }

  const handlLoginClick = async () => {
    try {
      const response = 'api 호출 구간'
      // await Auth.SignIn(user)
      alert('로그인 성공')
      setAccessToken(response)
      // response.data.access_token
      navigate('/todo')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message || '로그인에 실패했습니다')
      }
    }
  }

  useEffect(() => {
    if (getAccessToken()) {
      navigate('/todo')
    }
  })

  return (
    <WholeWrap>
      <p>로그인</p>
      <Input
        type='email'
        name='email'
        id='email'
        value={user.email}
        placeholder='이메일을 입력해주세요'
        onChange={onChangeUser}
      />
      <input
        type='password'
        name='password'
        id='password'
        value={user.password}
        onChange={onChangeUser}
      />
      <Button onClick={handlLoginClick} disabled={isUserValidation}>
        로그인
      </Button>
    </WholeWrap>
  )
}

export default Signin

const WholeWrap = styled.div`
  width: 100%;
  display: flex;
`

const Input = styled.input``

const Button = styled.button`
  &:disabled {
  }
`
