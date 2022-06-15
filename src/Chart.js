
import axios from 'axios'
import React, { useState } from 'react'
import './Chart.css'

function Chart() {
    const [arr, setArr] = useState([]);
    // const [body, setBody] = useState({});

    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((value)=>
    setArr(value.data) /*setBody(value.data)*/).catch(error=>console.log(error))
  return (
        arr.map((key)=> {

            return (            <div className='main'>
 
            <div className='rank'>
                <p>{arr.market_cap_rank}</p>
                
            </div>
    
        <div className="Image">
            <img src={arr.image}alt="/"></img>
        </div>
    
        <div className='Name'>
            <p>{arr.name}</p>
            </div> 
    
        <div className='Price'>
            <p>${arr.current_price}</p>
            </div> 
    
            <div className='Drop'>
                <p>-{arr.market_cap_change_percentage_24h}%</p>
            </div>
    
            <div className='Gain'>
                <p>{arr.market_cap_change_percentage_24h}%</p>
            </div>
    
            <div className='MarketCap'>
                <p>${arr.market_cap}</p>
            </div>
    
        </div> )

        }
                
             
   

        )
        
  )
}

export default Chart
