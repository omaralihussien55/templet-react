import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import styled from 'styled-components'

import img from '../img/logo-man.svg'
const Container = styled.div`
position: relative;
padding: 10px;
height:50%;
width:50%;
margin:auto;
background:red;
display:flex;
flex-direction:column;
`
const Wrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
position: relative;
margin-top: 50px;
flex:0  1 90%;

`
const Item = styled.div`
position: absolute;
width: 30px;
height: 30px;
margin-top: 50px;
background-color:${p => p.bg};
border-radius: 50%;
margin-left:15px;
left:${p=> p.left};
font-size: 10px;
`
const Title = styled.h3`
text-align: center;
color:white;
flex:0  1 10%;
margin-top:20px;
padding-top:20px;
`
const Bounce = styled.div`
position:absolute;
top:0;
right:0;
background-color:green;
padding:10px;
color:white;
width:40%;
text-align:center;

`
const AnimatedLettrs = () => {
   const omarRef = useRef(null)
   const title = useRef(null)
    const bounceRef = useRef(null)
   useEffect(()=>{
    gsap.from(title.current,{opacity :0,duration:3,scale:0})
   gsap.fromTo(omarRef.current.children,{opacity:0,scale:0,bottom:0},{opacity:1,scale:1,bottom:100,duration:3,stagger:.8,delay:2})
   gsap.fromTo(bounceRef.current,{opacity:0,right:70},{opacity:1,right:0,duration:3,delay:5,ease:"bounce"})
  
  },[])

  return (
    <Container className='demo'  >
    <Bounce ref={bounceRef}>bounce</Bounce>
    <Title ref={title} className="title-star">lorim ipsum</Title>
    <Wrapper className='parent-star' ref={omarRef} >
      <Item className='star' left="40%" bg='blue'>
      </Item>
      <Item className='star' left="50%" bg='purple'>
      
      </Item>
      <Item className='star' left="60%" bg='green'>
      
      </Item>
      </Wrapper>
     </Container>
  )
}

export default AnimatedLettrs