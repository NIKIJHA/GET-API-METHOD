import './App.css';
import React,{useEffect,useState} from 'react'
function App() {
  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch("https://staging.instapreps.com/api/board").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })
  },[])
  console.warn(users)
  return (
    <div className="App">
      <h1>REACT TABLE </h1>
      <table border="1">
       <tbody>
       <tr>
          <td>ID</td>
          <td>Board</td>
          <td>Created_at</td>
          <td>Updated_at</td>
          <td>Priority</td>
          <td>Publish</td>
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.id}</td>
          <td>{item.board}</td>
          <td>{item.created_at}</td>
            <td>{item.updated_at}</td>
            <td>{item.priority}</td>
            <td>{item.publish}</td>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  );
}
export default App;