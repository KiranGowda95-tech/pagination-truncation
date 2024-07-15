import { useEffect } from 'react';
import './App.css'




function App() {
  const fetchData=async()=>{
    const res=await fetch('https://dummyjson.com/products');
    const data=await res.json()
    console.log(data)
  
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
    <h2>pagination</h2>
    </>
  )
}

export default App
