import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import AnimatedLettrs from './AnimatedLettrs'
const Container = styled.div`
width:100%;
height:100vh;
background-color:black;
display:flex;
`
const TextZone = styled.div`
width:50%;
height:70vh;
margin:auto;

`
const Title = styled.h1`
color:white;
padding:10px
`

const Task9 = () => {
    const [letterClass,setLetterClass] = useState("text-animate")
    const nameArray=['s','l','o','b','o','d','a','n']
    const jobArray = ['w','e','b','','d','e','v','e','l','o','p','e','r','.']

    useEffect(()=>{
        let sp = document.querySelectorAll(".text-animate");

        for(let i =0 ; i <= sp.length -1 ; i++){
            sp[i].style.animationDelay = `${i/ 5 }s`
        }
    })
  return (
    
    <Container>
          <AnimatedLettrs />
    </Container>
 
  )
}

export default Task9