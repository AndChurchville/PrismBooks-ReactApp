import React from 'react';
import styled from 'styled-components';

// const heroImg = 'https://images.unsplash.com/photo-1580437203486-c378e377a88e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2332&q=80';
export default function Hero() {
    return (
        <>
        
        <BannerImg>
            {/* <img src= {heroImg} /> */}
            <h2 className='shop-title'> Prism Books</h2>
            
        </BannerImg>
        </>
    )
}

const BannerImg = styled.div`
min-width: 100%;
width: 100%;
height: 300px;
background: black;
background:-webkit-linear-gradient(rgba(3, 40, 225, 0.4), rgba(77, 204, 87, 0.4)), url('https://images.unsplash.com/photo-1558421601-0dcd7b8743dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60');
background-size: cover;
display: flex;
justify-content: center;
align-items: center;

.shop-title{
    color: white;
    text-align: center;
    position: absolute;
    font-size: 8rem;
    text-shadow: 2px 2px 4px gray;
    }
`;