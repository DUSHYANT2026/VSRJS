import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(10);
  const [number , setnumber] = useState(false);
  const [characters , setchar] = useState(false);
  const [password , setpassword] = useState("");

  const passwordgenerator = useCallback( () => {
    let str = "abcdefghijklmanopqrustuvwxyzABCDEFGHIJKLAMNOPQRSTUVWXYZ";
    let num = "0123456789";
    let character ="~!@#$%^&*";

    let pass = "";

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);

  },[length,number,characters])


  useEffect( () => {
    passwordgenerator();
  } , [length , number , characters])

  return (
    <>
    <h1  className='text-4xl text-white text-center'>RANDOM PASSWORD GENERATOR</h1>
    </>
  )
}

export default App
