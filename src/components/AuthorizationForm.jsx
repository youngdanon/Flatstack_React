import React, {useState} from 'react';
import styled from 'styled-components'



const Button = styled.button`
  
`

const Form = styled.div`
  margin: 1em;
  
`

const FormItem = styled.div`
  margin-bottom: 0.5em;
`

const FormItemTitle = styled.p`
  color: black;
  font-size:1em;
  margin-bottom: 0.3em;
`

const LoginForm = () => {
    const [loginData, setLoginData] = useState("")
    const [passwordData, setPasswordData] = useState("")

    const handleLoginInputBluring = () => {
        setLoginData((loginData) => loginData.trim())
    }

    const handlePasswordInputBluring = () => {
        setPasswordData((passwordData) => passwordData.trim())
    }


    return (
        <Form>
            <FormItem className={'login-input'}>
                <FormItemTitle>Login</FormItemTitle>
                <input name={'login'}
                       type={'text'}
                       value={loginData}
                       onChange={(e) => setLoginData(e.target.value)}
                       onBlur={handleLoginInputBluring}
                />
            </FormItem>
            <FormItem>
                <FormItemTitle>Password</FormItemTitle>
                <input name={'password'}
                       type={'password'}
                       value={passwordData}
                       onChange={(e) => setPasswordData(e.target.value)}
                       onBlur={handlePasswordInputBluring}
                />
            </FormItem>
            <div className={'sign-in-button'}>
                <Button onClick={()=>alert('Success')}>
                    Sign-in
                </Button>
            </div>
        </Form>
    )


}

export default LoginForm;
