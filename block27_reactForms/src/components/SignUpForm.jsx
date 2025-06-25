import { use, useState } from "react";

function SignUp ({setToken}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        try{
            const res = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                }
            )
            const result = await res.json()
            console.log(result)
            setToken(result.token)
        }catch(error){
            console.log(error)
        }
    }


    return (
        <>
        <h2>Sign Up!</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </label><br />
            <label>
                Password:
                <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label><br />
            <button>Submit</button>
            {/* <p>{username}</p> */}
        </form>
        </>
    )
}

export default SignUp