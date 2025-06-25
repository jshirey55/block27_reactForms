import { useState } from "react"
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null)
  const [username, setUsername] = useState(null)

  return (
    <>
    {username && <h2>Welcome {username}!</h2>}
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} setUsername={setUsername}/>
    </>
  )
}

export default App