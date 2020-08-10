import React from 'react'
import Router from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { counting } from '../redux/actions/counterActions'

const Home = () => {
  const count = useSelector((state) => state.counterReducer.count)
  const dispatch = useDispatch()

  const handleChange = (num) => {
    counting({ dispatch, count: num })
  }
  return (
    <div>
      <span>current count : {count}</span>
      <input type="number" onChange={(e) => handleChange(e.target.value)} />
      <br />
      <button onClick={() => handleChange(count - 1)}>Increase</button>
      <br />
      <button onClick={() => handleChange(count + 1)}>decrease</button>
      <button onClick={() => Router.push('/about?counter=10')}>to aboutPage</button>
    </div>
  )
}

export default Home