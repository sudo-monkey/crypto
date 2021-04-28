import './App.css';
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, {useState} from 'react';

function App() {
  const[id, setID] = useState("")
  const[crypto, setSymbol] =useState({})
  const[curr, setCurrency] =useState("")

  const coinIDonChange = (e) => {
    const value = e.target.value
    setID(value)  
  }
  const coinCurrency = (e) =>{
    const value = e.target.value
    setCurrency(value)
  }
  const retunCurr = () => {
    return curr
  }

  const clearValue = () => {
    setID("")
    setSymbol({})
    setCurrency("")
  }
  const buttonOnClick = () => {
    console.log(id) 
    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${id.toLowerCase()}&vs_currencies=${curr}`)
    .then(function ({data}) {
      console.log(data)
      setSymbol(data)
    })
  }
//https://api.coingecko.com/api/v3/simple/price/${id}${coinCurrency}')
//https://api.coingecko.com/api/v3/simple/price?ids=01coin&vs_currencies=USD



  return (
    <div className="App">
        <TextField id="standard-basic" label="Coin ID" onChange={coinIDonChange} value={id} />
        <div><TextField id="standard-basic" label="Currency" onChange={coinCurrency} value={curr} /></div>
        <Button onClick={buttonOnClick}>Submit</Button>
        <Button onClick={clearValue}>Clear</Button>
        {
          Object.keys(crypto).length > 0 &&
          <p>{crypto[`${id.toLowerCase()}`][`${curr.toLowerCase()}`]}</p>
        }
<img src="/logo192.png" style={{margin:16}}/>
    </div>
  );
}
// ["01coin"]
// crypto["01coin"]["usd"]
console.log()
export default App;
//test
