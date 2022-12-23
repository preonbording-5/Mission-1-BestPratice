import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import postSignIn from '../../lib/apis/authApi';
import { getAccessToken, setAccessToken } from '../../lib/utils/AcessTokenStore';
import { User, UserValidation } from '../../lib/types/User.interface';
import getRegexVerification from '../../lib/utils/Getregex';
import styled from 'styled-components';

const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
  });

  const [userValidation, setUserValidation] = useState<UserValidation>({
    email: false,
    password: false,
  });

  const isUserValidation = useMemo(
    () => !(userValidation.email && userValidation.password),
    [userValidation.email, userValidation.password],
  );

  const onChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const regexp = getRegexVerification(name as 'email' | 'password', value);
    setUser({ ...user, [name]: value });
    setUserValidation({ ...userValidation, [name]: regexp });
  };

  const handlLoginClick = async () => {
    try {
      const response = await postSignIn.postSignIn(user);
      alert('로그인 성공');
      setAccessToken(response.data.access_token);
      navigate('/todo');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message || '로그인에 실패했습니다');
      }
    }
  };

  useEffect(() => {
    if (getAccessToken()) {
      navigate('/todo');
    }
  }, []);

  return (
    <WholeWrap>
      <Title>로그인</Title>
      <InputWhole>
        <Input
          type='email'
          name='email'
          id='email'
          value={user.email}
          placeholder='이메일을 입력해주세요'
          onChange={onChangeUser}
        />
        <Input
          type='password'
          name='password'
          id='password'
          value={user.password}
          placeholder='비밀번호를 입력해주세요'
          onChange={onChangeUser}
        />
        <Button onClick={handlLoginClick} disabled={isUserValidation}>
          로그인
        </Button>
      </InputWhole>
    </WholeWrap>
  );
};

export default Signin;

const WholeWrap = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  flex: 1 1 0;
`;

const Title = styled.h2`
  text-align: center;
`;

const InputWhole = styled.div`
  flex-direction: column;
  width: 10em;
  margin: 0 auto;
  text-align: center;
`;

const Input = styled.input`
  width: 10em;
  height: 3em;
`;

const Button = styled.button`
  width: 10em;
  height: 3em;
  background-color: red;
  :disabled {
    background-color: grey;
  }
`;
