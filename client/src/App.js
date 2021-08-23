import './App.css';
import {useState} from "react";
import Axios from 'axios'; 
import Modal from 'react-modal';
import React from 'react';
/**
 * custom css for modal
 */
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
/**
 * setting states
*/
Modal.setAppElement('#root');
function App() {
  const[id,setID]= useState(0);
  const[name,setName]= useState("");
  const[pin,setPin]= useState(0);
  const[message,setMessage]= useState("");
  const[email,setEmail]= useState("");
  const[date,setDate]= useState("");
  const[modalpin,setModalpin]= useState(0);
  
  const [reveal, setReveal] = useState("display:none");
const [userList,setUserList] = useState([]);

/**
 * 
 * Get user from API and list them in the page
*/
const getusers = () => {
  Axios.get('http://localhost:3001/users').then((response)=>{
    console.log(response);
    setUserList(response.data);
  });
};

/**
 * 
 * Add user using api
 */
const addUsers = () => {
  Axios.post('http://localhost:3001/create',{
    name:name, 
    pin:pin,
    message:message,
    email:email,
    date:date,
  }).then(getusers);
};

/**
 * 
 * verify pin if the pin valid to show message
 */
const verifyPin = () => {
  Axios.post('http://localhost:3001/revealmessage',{
    modalpin:modalpin,
    id:id,
  }).then((response)=>{
    if(response=="success")
    {setReveal(true);}
  });
};

let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  /*
  *modal functions to setup modal
  */
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
/***
 * acutal html for the project
 */
  return (
    <div className="App">
      <div className="information">
        <label> Name :</label>
        <input type="text" onChange={(event)=>{setName(event.target.value);}} 
        />
        <label> Pin :</label>
        <input type="Number"  onChange={(event)=>{setPin(event.target.value);}} 
        />
        <label> Message:</label>
        <input type="text"  onChange={(event)=>{setMessage(event.target.value);}} 
        />
        <label> Email :</label>
        <input type="email"  onChange={(event)=>{setEmail(event.target.value);}} 
        />
        <input type="hidden"  onChange={(event)=>{setDate(event.target.value);}} 
        />


        <button onClick={addUsers}>Add Users</button>
      </div>


      <div className="users">
        <button onClick={getusers}>Show Users</button>
        {userList.map((val,key)=>{
        return <div className="user">
                <h3>Name: {val.name}</h3>
                <h3>Pin: {val.pin}</h3>
                <button onClick={addUsers}>Add Users</button>
                
                <h3>Message:<button onClick={openModal}>Reveal</button>
       
                <div>
             
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Reveal message"
                >
                  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Please Enter your pin to reveal message</h2>
                  <label> Pin :</label>
                  <input type="hidden"  onChange={(event)=>{setID({id});}} />
                  <input type="Number"  onChange={(event)=>{setModalpin(event.target.value);}}  /><br/>

                  <br/>
                  <div>
                  {val.message}
                  </div>
                  <br/>
                  <button onClick={verifyPin}>Reveal Message</button><br/>
                 
                  <button onClick={closeModal}>close</button>
                 

                </Modal>
              </div>
               </h3>
                <h3>Email: {val.email}</h3>
                <h3>Date: {val.date}</h3>
                </div>
        })}
      </div>
    </div>
  );
}

export default App;
