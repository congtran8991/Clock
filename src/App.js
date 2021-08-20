import React,{useEffect,useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const today = new Date()
  const [second,setSecond] = useState(null)
  const [minute,setMinute] = useState(null)
  const [hour,setHour] = useState(null)
  useEffect(()=>{
   let interval = setInterval(()=>{
      setDate()
    },1000)
   return ()=>{
     clearInterval(interval)
   }
  },[])
  const setDate = ()=>{
    const today = new Date()
    const isSecond = today.getSeconds()
    const isMinute  = today.getMinutes()
    const isHour = today.getHours()
    setSecond(((isSecond / 60) * 360) + 360)
    setMinute((isMinute / 60) * 360)
    setHour((isHour / 12 ) * 360)
  }
  return (
    <div className="clock">
    <div className="hourHand" style={{transform:`rotate(${hour}deg)`}}></div> 
    <div className="minuteHand" style={{transform:`rotate(${minute}deg)`}}></div>
    <div className="sec" style={{transform:`rotate(${second}deg)`}}><div className="secondHand"></div></div>
    <div className="center"></div>
    <div className="red-center center"></div>
    <ul>
        <li><span>1</span></li>
        <li><span>2</span></li>
        <li><span>3</span></li>
        <li><span>4</span></li>
        <li><span>5</span></li>
        <li><span>6</span></li>
        <li><span>7</span></li>
        <li><span>8</span></li>
        <li><span>9</span></li>
        <li><span>10</span></li>
        <li><span>11</span></li>
        <li><span>12</span></li>
    </ul>
  </div>
  );
}

export default App;
