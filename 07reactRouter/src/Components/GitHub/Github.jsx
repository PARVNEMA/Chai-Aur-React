import React, { useEffect, useState } from 'react'
function Github() {
    const [Data,setdata]=useState([]);
    useEffect (()=>{
  fetch('https://api.github.com/users/hiteshchoudhary').then((res)=>res.json()).then((data)=>{
    setdata(data);
  })
    },[])
    return (
        <>Github Followers:{Data.followers}
        <img src="Data.avatar_url" alt=""  width={300} height={150}/>
        </>
    )
}

export default Github
