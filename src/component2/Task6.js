import React, { useEffect, useState,useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div `
width:100%;
height :100vh;
background-color : black;
position:relative;
display:flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div `
position:absolute;
width:${p=>p.w}px;
height:${p=>p.h}px;
border-radius:50%;
background-color :${p=>p.bg};

border : ${p => p.border && p.border};
transform:rotateZ(${p=> p.rotat && p.rotat}deg);
perspective: 700px;
`
const Earth = styled.div`
position:${p=> p.pos && p.pos};
top:${p=> p.top && p.top}px;
left:${p=> p.left && p.left}px;
width:${p=> p.w}px;
height:${p=> p.h}px;
background-color:${p=> p.bg};
border-radius:50%;
border:${p=> p.border && p.border};
display:${p=> p.display&& p.display};
margin:${p=> p.margin&& p.margin};

transform:rotateZ(${p=> p.rotat && p.rotat}deg)
`

const Moon = styled.div`
position:absolute;
top:0;
left:15%;
width:15px;
height:15px;
background-color:white;
border-radius:50%;

`
let id ;
let deg = 1;
let interval;
const Task6 = () => {
  const [rotat,setRotat] = useState(0)
 
  const requestRef =useRef(0)
  
  
//   useEffect(()=>{
// interval = setInterval(()=>{
//   if(rotat >=360){
//     setRotat(0)
//   }else{
//     setRotat(c => c + .2)
//   }
  
//    console.log(rotat)
// })


// return ()=>{
//   clearInterval(interval)
// }
//   },[rotat])



  // const animate = time => {
   
  //  setRotat(requestRef.current)

  //   requestRef.current = requestAnimationFrame(animate);
  // }
    
  // // DON’T DO THIS
  // useEffect(() => {
  //   requestRef.current = requestAnimationFrame(animate);
    
  //   return () => cancelAnimationFrame(requestRef.current);
  // },[]);
  return (
    
    <Container>
    
       <Wrapper bg="rgb(255, 255, 0)" w="150" h='150'>
       </Wrapper>
       <Wrapper bg="transparent" w="350" h='350' border="1px solid blue" rotat={rotat}>

            <Earth pos="relative" rotat={rotat} top="0" left="0" w="100" h="100" bg="transparent"  display="flex">
                 <Earth   top="0" left="0" w="50" h="50" bg="green" margin="auto" >

                 </Earth>
                 <Moon></Moon>
            </Earth>
       </Wrapper>
    </Container>
  )
}

export default Task6