import React from 'react';
import styled from 'styled-components';

const heroImg = 'https://images.unsplash.com/photo-1580437203486-c378e377a88e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2332&q=80';
export default function Hero() {
    return (
        <>
        
        <BannerImg>
            {/* <img src= {heroImg} /> */}
            
        </BannerImg>
        </>
    )
}

const BannerImg = styled.div`
min-width: 100%;
width: 100%;
height: 200px;
background-image: url('https://images.unsplash.com/photo-1580437203486-c378e377a88e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2332&q=80');
background-size: cover;
`;