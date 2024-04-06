import { useState } from "react"
import attack from './assets/attack.png'
import defend from './assets/defend.png'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const handleAttack = () => {
        // alert('Attack is clicked!')
        setCounter((preCounter) => {
            let newCount = preCounter + Math.round(Math.random() * 10)
            return newCount
        })
        }
        const handleDefense = () => {
            // alert('Defend is clicked!')
        setCounter((preCounter) => {
            let newCount = preCounter + Math.round(Math.random() * 10)
            return newCount
            })
    }

const handleReset = () => {
    setCounter(0)
}

const handleRandomPlay = () => {
    let playMode = Math.round(Math.random())
    if(playMode === 0){
        handleAttack()
    } else {
        handleDefense()
    }
}

  return (
    <div className="row text-white text-center">
        <h1>Counter: {counter} </h1>
        <p>You win at +10, and you lose at -10 points</p>
        <p>Let's play!</p>
        <p>Game status</p>
        <div className='col-6 col-md-3 offset-md-3'>
        <button onClick={handleAttack} style={{width: '200px'}}>+1</button>
            <img 
            src={attack} 
            alt="attack" 
            onClick={handleAttack} 
            style={{cursor:'pointer', width:'100%', border:'2px solid green'}}/>
        </div>
        <div className='col-6 col-md-3 offset-md-3'>
        <button onClick={handleDefense} style={{width: '200px'}}>-1</button>
            <img 
            src={defend} 
            alt="defend" 
            onClick={handleDefense} 
            style={{cursor:'pointer', 
            width:'100%', 
            border:'2px solid green'}}/>
        </div>

        <div className='col-12 col-md-4 offset-md-4'>
            <button onClick={handleRandomPlay} className='btn btn-secondary w-100 mt-2' >Random play</button>
            <button onClick={handleReset} className='btn btn-secondary w-100 mt-2' >Reset</button>
        </div>

    </div>
   )
}

export default Counter