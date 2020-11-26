import React, {useState, useEffect} from "react";
import axios from 'axios';

const Table = ({value}) => {
  const url = `https://7cg8uz8p69.execute-api.us-east-1.amazonaws.com/test/people?period=${value}`
  console.log(url)

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url)
    .then(res => setData(res.data.people)
    ).catch(err=>{
      console.log(err);
  })
  },[])

  
  const renderTable = () => {
    return data.map((people, index) => {
      return (
        <tr key={index}>
          <td>{people.client}</td>
          <td>{people.matter}</td>
          <td>{people.description}</td> 
          <td>{people.type}</td>
          <td>{people.time}</td>
        </tr>
      )
    })
  }

  return (
    <div>
   
      <table class="table"> 
        <thead>
          <tr>
            <th>Client</th>
            <th>Matter</th>
            <th>Description</th>
            <th>Type</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  )
}
export default Table;