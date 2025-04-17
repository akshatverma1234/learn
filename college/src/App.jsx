import { use, useEffect, useRef, useState } from "react"
import "./App.css"
import axios from "axios"
import Folder from "./components/Folder"
import explorer from "./folder/folder"

function App() {
  // const [count, setCount] = useState(0)
  // const [data, setData] = useState([])
  // const CountRef = useRef(0)
  // const handleClick = () => {
  //   CountRef.current += 1
  //   alert("You pressed" + CountRef.current)
  // }
  // useEffect(() => {
  //   const fetch = async () => {
  //     try {
  //       const response = await axios.get("https://dummyjson.com/users")
  //       setData(response.data.users)
  //       console.log(response)
  //     } catch (error) {
  //       console.log(err)
  //     }
  //   }
  //   fetch()
  // }, [count])

  return (
    <>
      {/* <h1>Count : {count}</h1>
      <div>
        {data.map((item, index) => (
          <div className="list">
            <li key={index}>{item.firstName}</li>
            <span>{item.age}</span>
            <span>{item.email}</span>
          </div>
        ))}
      </div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={handleClick}>Submit</button> */}
      <Folder explorer={explorer} />
    </>
  )
}

export default App
