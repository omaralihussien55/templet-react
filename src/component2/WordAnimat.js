
import React, { useEffect, useState,useRef } from 'react'
import styled from 'styled-components'
const Span = styled.span`
font-size:50px;
&:hover{
    animation: moveing .5s ease-in-out;
}
`

let count = 0
const Word = () => {

  const spRef = useRef(null)

   const [w ,setW] = useState(['O','m','a','r','A','l','i','H','u','s','s','i','e','n'])
useEffect(()=>{
  let sp = document.querySelectorAll('.animate__bounce');

  for(let i =0 ; i <= sp.length -1 ; i++){
    sp[i].style.animationDelay = `${i/3}s`
  }
})

    return (
      <div className='word' ref={spRef}>
    {
        w.map((i,idx)=>{
        return(
            <React.Fragment key={idx} >
              <Span className='animate__animated animate__bounce' >{i}</Span>
            </React.Fragment>
        )
        })
    }
      </div>
    )
  }

const WordAnimat = () => {
  console.log("vv")
  return (
    <div>
    <Word/>
    </div>
  )
}

export default WordAnimat