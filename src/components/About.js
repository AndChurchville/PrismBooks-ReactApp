import React, { Component } from 'react';
import Title from './Title';
import styled from 'styled-components';


export default class About extends Component {
    render(){
    return (
        <>
            <div className='py-5'>
                <div className='container'>
                    <Title name="About" title="Us"/>
                    <AboutContent>
                           
                       <AboutImg src='https://images.unsplash.com/photo-1537884557178-342a575d7d16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80' alt='aboutus-img' />

                       <AboutText>

                       <h4> Creativity</h4>
                      
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus auctor diam, in rhoncus turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce semper mi nunc, non rutrum est ornare vel. Sed id est nec urna scelerisque euismod eu vitae turpis. Fusce non erat at arcu dapibus vestibulum eu et est. Morbi dictum sollicitudin nibh vel venenatis. Sed dui tortor, tempus vel lacus et, imperdiet mollis dui. Vivamus in turpis fringilla, imperdiet diam vitae, ullamcorper mi. Praesent eleifend lorem ut orci consectetur, a semper justo sodales. Nam porttitor at magna eget ultrices. Etiam quis eleifend tortor. Ut vitae quam non metus fringilla iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis consectetur finibus tortor, nec placerat est pulvinar ut.</p>
                   </AboutText>


                    </AboutContent>
                    < br style={{clear:"both"}} />
                </div>
            </div>
        </>
    )
}
}
const AboutContent = styled.div`
display:flex;
justify-content: space-around;
margin-top: 20px;
`;
const AboutImg = styled.img`
width: 30%;
    float: left;
    `

const AboutText = styled.div`
h4{
    font-size: 2rem;
    color: blue;
}
    width: 50%;
    float: right;
    margin-left: 20px;
    line-spacing: 2px;`;