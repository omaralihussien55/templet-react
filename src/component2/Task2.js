import React, { useEffect, useState } from 'react'
let name = 'OOmar Ali Hussien'
let count = 0
let x = []
const Task2 = () => {
  const [arr,setArr] =useState(x)

  useEffect(()=>{

let  ti = setInterval(() => {

    count += 1
if(count <= name.length -1){
   
setArr([...arr,name[count]])


}else{
    setArr([])  
   clearInterval(ti)
    return count = 0
}



}, 300);

return () =>{
    clearInterval(ti)
}
},[count])


  return (
    <div className='task2'>
     {
         arr.map((i,idx)=>{
             return (
                 <React.Fragment key={idx}>
                   <span>{i}</span>
                 </React.Fragment>
             )
         })
     }
    </div>
  )
}

export default React.memo(Task2)