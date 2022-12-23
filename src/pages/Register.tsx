import { useNavigate } from 'react-router-dom';
import { useState, useEffect, FormEvent } from 'react';
import Signup from '../components/register/Signup';
import Signin from '../components/register/Signin';
import { getAccessToken } from '../lib/apis/tokenStore';
import styled from 'styled-components';


type RegisterMode = 'signUp' | 'signIn';

const Register = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<RegisterMode>('signIn');


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  }

  const handleClickRegisterChange = () => {
    if (mode === 'signIn') {
      setMode('signUp');
      return;
    }
    setMode('signIn');
  }

  useEffect(() => {
    if (getAccessToken()) {
      navigate('/todo');
    }
  }, [navigate])

  return (
    <Container>
      {mode === 'signUp' ? <Signup /> : <Signin />}
      <Button onClick={handleClickRegisterChange}>
        {
          mode === 'signIn' ? '회원가입 하러가기' : '로그인 하러가기'
        }
      </Button>
    </Container>
  )
}

export default Register

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin-top: 20px;
  border: unset;
  background-color: unset;
  color: #0000ffc7;
  font-weight: 600;
  cursor: pointer;
`;
