import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
const Container = styled.div `
width:50%;
height:250px;
margin:10px auto;
position:relative;
overflow:hidden;
`
const Wrapper = styled.div `
width:100%;
height:100%;
display:flex;
`
const Item = styled.div `
flex:1 0 100%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
color : white;
background-color:${p=>p.bg};
transition:all .5s;
transform:translate(${p=> p.count * -100}%);

`
const Button = styled.button `
width:50px;
height:30px;
padding:5px;
background-color:purple;
position:absolute;
top:50%;
left:${p => p.dir ==='left' && 3}px;
right:${p => p.dir ==='right' && 3}px;
color:white;
z-index:1000
`
const Indecator = styled.div`
position:absolute;
bottom:5%;
width:100%;
height:10%;
display : flex;
justify-content: center;
align-items: center;
z-index:10
`

const Span = styled.span`
width:15px;
height:15px;
background-color:#252531;
display:block;
margin-left:4px;
border-radius:50%;
`
let intrval;
const Task4 = () => {
    const [count , setCount] = useState(0);
    const [arr,setArr] = useState([])
    const slideRef = useRef(null)
    const indectorRef = useRef(null)
    const HandlCountSlide =(dir)=>{
        clearInterval(intrval)
        console.log(count)
        if(dir === 'right'){
            setCount(count + 1)
            if(count >= Array.from(slideRef.current.children).length - 1  ){
                setCount(0)
            }
        }else{
             setCount(count - 1)
             if(count <= 0){
                 setCount((Array.from(slideRef.current.children).length - 1)  )
             }
        }

        Array.from(indectorRef.current.children).forEach(i=>{
            i.classList.remove("active")
        })
        indectorRef.current.children[count].classList.add("active")
       }

       const HandleIndector = (idx)=>{
           clearInterval(intrval)
        setCount(idx)
        Array.from(indectorRef.current.children).forEach(i=>{
            i.classList.remove("active")
        })
        indectorRef.current.children[idx].classList.add("active")
       }

useEffect(()=>{
  
  intrval =    setInterval(()=>{
      if(count < Array.from(slideRef.current.children).length - 1 ){
          setCount(count + 1)
      }else{
           setCount(0)
          clearInterval(intrval)
          
      }
      Array.from(indectorRef.current.children).forEach(i=>{
        i.classList.remove("active")
    })
    indectorRef.current.children[count].classList.add("active")
      },2000)



  
     return ()=>{
        clearInterval(intrval)
     }
},[count])

useEffect(()=>{

setArr(Array.from(slideRef.current.children))

},[])
  return (
    <Container>
    <Button dir='left' onClick={()=> HandlCountSlide("left")}>lt</Button>
          <Indecator ref={indectorRef}>
          {
            arr.map((i,idx)=>{
                   return(
                    <React.Fragment key={idx} >
                    <Span className='spindector' id={`sp${idx}`} onClick={()=> HandleIndector(idx)}></Span>
                   </React.Fragment>
                   )
            })
          }
          </Indecator>
         <Wrapper ref={slideRef}>
              <Item  bg="green" count={count}>Omar</Item>
              <Item bg="red"  count={count}>Ali</Item>
              <Item bg="blue"  count={count}>Hussien</Item>
              <Item bg="purple"  count={count}>Ramdan</Item>
          
         </Wrapper>
         <Button dir='right' onClick={()=> HandlCountSlide("right")}>rt</Button>
    </Container>
  )
}

export default Task4