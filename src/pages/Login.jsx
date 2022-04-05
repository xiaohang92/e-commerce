import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive"
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("/img/Login.jpg");
    background-size: cover;
    background-position: right;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({ width: "75%" })}
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button onClick={() => navigate('/')}>LOGIN</Button>
                    <Link>FORGET PASSWORD</Link>
                    <Link onClick={() => navigate('/register')}>REGISTER ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login