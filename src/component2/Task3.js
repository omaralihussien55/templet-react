import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
height:80px;
padding:5px;
text-align:center;
`
const Title1 = styled.h4`
width: 100%;
height:100%;
text-align:center;
background-color:${props => props.bg};
color:${props => props.color};
position:absolute;
top:0;
left :${props => props.left};
transition:all .5s
`
const Title2 = styled.h4`
width: 100%;
height:100%;
text-align:center;
background-color:${props => props.bg};
color:${props => props.color};
position:absolute;
top:0;
left :${props => props.left};
transition:all .5s
`
const Wrapper = styled.div`
width: 50%;
height:80%;
margin:auto;
text-align:center;
position:relative;
overflow:hidden;
&:hover ${Title1}{
left:100%
}
&:hover ${Title2}{
    left:0%
}
`

const Task3 = () => {
  return (

    <Container>
       <Wrapper>
          <Title1 left="0%" color="white" bg="green">Omar Ali Hussien</Title1>
          <Title2 left="-100%" color="white" bg="blue">Omar Ali Hussien</Title2>
       </Wrapper>
    </Container>
  )
}

export default Task3