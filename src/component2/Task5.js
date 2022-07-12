import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
const  Container = styled.div`
width:100%;
padding:10px;
background-color:rgb(24, 153, 204);
`
const  Clock = styled.div`
width:300px;
height:300px;
margin: 10px auto ;
border-radius:50%;
border:20px solid white;
background-color:white;
position:relative;
box-shadow:2px 2px 2px  gray , -2px -2px 2px  gray ,inset 2px 2px 1px  gray ,inset -2px -2px 1px  gray  ;
`
const  Wrapper = styled.div`
width:100%;
height:100%;
position:relative;
display:flex;
justify-content:center;
align-items:center;
perspective: 700px;
`
const  Hour = styled.div`
width: 40%;
height: 40%;
transform:rotateZ(${p=>p.z}deg);
&:before{
    content:"";
    width:6px;
    height:60%;
    position:absolute;
    top:-10%;
    left:50%;
    background-color:purple;
    margin-left:-3px;
    border-radius : 3px 3px 0 0;
}
`
const  Min = styled.div`
width: 50%;
height: 50%;
transform:rotateZ(${p=>p.z}deg);
&:before{
    content:"";
    width:4px;
    height:70%;
    position:absolute;
    top:-20%;
    left:50%;
    background-color:red;
    margin-left:-2px;
    border-radius: 3px ;
}
`
const  Sec = styled.div`
width: 60%;
height: 60%;
transform:rotateZ(${p=> p.z }deg);
&:before{
    content:"";
    width:2px;
    height:75%;
    position:absolute;
    top:-15%;
    left:50%;
    background-color:cadetblue;
    margin-left:-1px;
}
`
const  Dot = styled.div`
width:5px;
height:5px;
background-color:gray;
z-index:900;
position:absolute;

`
const Insecator = styled.div`
width:7px;
height:7px;
background-color:transparent;
z-index:1006;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
color: #0b485f;
top:${p=>p.top && p.top }%;
left:${p=>p.left && p.left }%;
`
const Timer = styled.div`
width:40%;
height:15%;
padding:5px;
position:absolute;
top:15%;
left:50%;
display:flex;
justify-content:center;
align-items:center;
transform:translate(-50%,0);
box-shadow:inset 2px 2px 1px rgb(62, 60, 60,.4), inset -2px -2px 1px rgb(62, 60, 60,.3);
`
const TimerContent = styled.div`
margin-left:2px;
color:gray
`

let interval;
const Task5 = () => {
    const [date , SetDate] = useState(new Date())
    const [hour,SetHour] = useState(120)
    const [minte,SetMinte] = useState(0)
    const [second,SetSecond] = useState(0)

useEffect(()=>{
    interval = setInterval(()=>{
     SetDate(new Date())
 
     SetSecond(date.getSeconds())
     SetMinte(date.getMinutes())
     SetHour(date.getHours() )
    },1000)

    return ()=>{
        clearInterval(interval)
    }
})
  return (
    <Container>
       <Clock>
     
       <Insecator left='50' top='2' className="clock-indc" >12</Insecator>
       
       <Insecator left='50' top='94' className="clock-indc" >6</Insecator>

       <Insecator left='2' top='50' className="clock-indc" >9</Insecator>
       
       <Insecator left='94' top='50' className="clock-indc" >3</Insecator>
       <Timer>
          <TimerContent>
           {hour < 10 ? `0${hour}`: hour}
          </TimerContent>
          <TimerContent>
          :
         </TimerContent>
          <TimerContent>
         {minte < 10 ? `0${minte}`: minte}
         </TimerContent>
         <TimerContent>
         :
        </TimerContent>
         <TimerContent>
         {second < 10 ? `0${second}`: second}
        </TimerContent>
       </Timer>
          <Wrapper>
          
            <Dot></Dot>
            <Sec z={second * 6} className='scorpin'></Sec>
            <Min z={minte  * 6} className='scorpin'></Min>
           <Hour z={(hour * 30) + (minte * 6 / 12) } className='scorpin'></Hour>
          
      
          </Wrapper>
       </Clock>
    </Container>
  )
}

export default Task5