import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  padding: 30px;
  border-radius: 5px;
  min-height: 200px;
  background: #fff;
  min-width: 400px;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.div`
  width: 100%;
  height: 100px;

  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center;
`;

export const Label = styled.label`
  margin-top: 20px;
  margin-bottom: 10px;

  background: #fff;
  color: #999;
  font-size: 14px;
`;

export const InputWithIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const Icon = styled.i`
  position: absolute;
  padding-right: 10px;
  margin-top: 2px;

  cursor: ${props => (props.clickable ? 'pointer' : 'none')};
`;

export const InputField = styled.input`
  width: 100%;
  border: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px 15px;

  color: #333;
  font-size: 16px;

  background: #fff;

  ::placeholder {
    color: #ccc;
  }
`;

export const Button = styled.button`
  margin-top: 20px;

  border: none;
  border-radius: 5px;

  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;

  background: #57a5d6;
  transition: 200ms ease-in-out;

  :hover {
    background: ${darken(0.2, '#57A5D6')};
  }
`;
