import React, { useState, useEffect } from 'react';
import { IoIosEyeOff, IoIosEye } from 'react-icons/all';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  Container,
  Form,
  Logo,
  InputField,
  InputWithIcon,
  Label,
  Button,
  Icon,
} from './styles';

import logo from '~/assets/logo.svg';

export default function Login() {
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    localStorage.clear();
    history.push('/');
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await api.post('/login', {
        email,
        password,
      });
      const { user_id } = res.data;
      localStorage.setItem('userId', user_id);
      history.push('/favorites');
    } catch (err) {
      toast.error('E-mail ou senha inválido(s)');
    }
  }

  return (
    <Container>
      <Form>
        <Logo src={logo} />
        <Label>E-mail</Label>
        <InputField
          type="email"
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Digite seu e-mail"
        />
        <Label>Senha</Label>
        <InputWithIcon>
          <Icon clickable onClick={() => setHidePass(!hidePass)}>
            {hidePass ? (
              <IoIosEyeOff size={30} color="#ccc" />
            ) : (
              <IoIosEye size={30} color="#999" />
            )}
          </Icon>
          <InputField
            type={hidePass ? 'password' : 'text'}
            icon
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Digite sua senha"
          />
        </InputWithIcon>

        <Button type="button" onClick={handleSubmit}>
          Logar
        </Button>
      </Form>
    </Container>
  );
}
