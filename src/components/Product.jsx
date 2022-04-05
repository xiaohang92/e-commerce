import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:all 0.5s ease;
`

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    height: 75%;
    max-width: 250px;
    z-index: 2;
    object-fit: cover;
`


const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition:all 0.5s ease;
    cursor: pointer;
    
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`



const Product = ({ item }) => {
    const navigate = useNavigate();
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon onClick={() => navigate('/cart')}>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon onClick={() => navigate('/products')}>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product