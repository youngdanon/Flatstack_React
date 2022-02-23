import React from "react";
import LoginForm from "../components/AuthorizationForm";
import styled from 'styled-components'

const FormWrapper = styled.div`
  margin: 5em 2em;
  position: absolute;
  border-radius: 5px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);

`
const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  padding: 1em;
  background-color: coral;
  width: 100%;
  text-align: center;
`

const Title = styled.p`
  color: white;
  font-size: 1.5em;
`

const LoginPage = () => {
    return (
        <>
            <Header>
                <Title>Login page</Title>
            </Header>
            <FormWrapper>
                <LoginForm/>
            </FormWrapper>

        </>
    )
}

export default LoginPage;
