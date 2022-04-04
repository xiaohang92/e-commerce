import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive"
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    margin-bottom: 10px;
    ${mobile({ width: "100%", margin: "0", padding: "10px 0px", display: "flex" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%", margin: "0", padding: "0" })}
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ width: "70%" })}
`

const Input = styled.input`
    border: none;
    ${mobile({ width: "70%" })}
`

const Center = styled.div`
    flex:1;
    text-align: center;
    ${mobile({ fontSize: "24px", display: "flex", justifyContent: "center" })}
`

const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
    ${mobile({ fontSize: "20px" })}
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ fontSize: "12px", paddingRight: "10px" })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin: 25px;
`

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo onClick={() => navigate('/')}>LAMA.</Logo>
                </Center>
                <Right>
                    <MenuItem onClick={() => navigate('/register')}>REGISTER</MenuItem>
                    <MenuItem onClick={() => navigate('/login')}> LOGIN</MenuItem>
                    <Badge onClick={() => navigate('/cart')} badgeContent={2} color="primary" style={{ cursor: "pointer" }}>
                        <ShoppingCartOutlined />
                    </Badge>
                </Right>
            </Wrapper>
        </Container >
    )
}

export default Navbar