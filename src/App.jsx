import React from 'react';
import './styles/App.css'
import { FaPen } from "react-icons/fa";
import {GiDoctorFace} from 'react-icons/gi'
import {chirpData} from './data';
import {useState} from 'react'


const App = () =>{
  var [chirps, setChirps] = useState(chirpData)
  var [thought,setThought] = useState('')
  var [name,setName] = useState('')

  const addChirp = () =>{
    setChirps([...chirps,{"name":name,"thought":thought}])
    setName('')
    setThought('')

  }
  return(
    <div className="formdiv mt-4 container">
    
    <div className="row">
    <div lassName="col-4">
    <div className="inputchirps">
    

    

    <div className="mb-3">
    <div style={{position:"relative"}}><label for="exampleFormControlInput1" className="form-label"><div style={{position:"absolute",left:"10px",top:"4px"}}><GiDoctorFace/></div></label>
    <input type="email" onChange={(e)=>{setName(e.target.value)}} className="form-control inputs" id="exampleFormControlInput1" placeholder="    Username" value={name} /></div>

    </div>
  <div className="mb-3">
  <div style={{position:"relative"}}><label for="exampleFormControlInput1" className="form-label"><div style={{position:"absolute",left:"10px",top:"4px"}}><FaPen/></div></label>
  <textarea className="form-control inputs" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>{setThought(e.target.value)}} value = {thought} placeholder="    Enter your text here"></textarea>
  </div>
  </div>
</div>
<button type="button" class="btn btn-primary" onClick={addChirp}>Chirp it</button>
</div>

<div className="col-4"></div>

<div className="my-chirps col-4">
{
  chirps.map(val=>{
    return (
      <><h1>{val.name}</h1>
            <p>{val.thought}</p> <hr/></>)

  })
}
</div>

  </div>

    </div>
  )
}

export default App;