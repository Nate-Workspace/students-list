import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import './index.css';
import MemeData from "./MemeData";
import Boxes from "./Boxes";
import Color from './Color';
import Counter from "./Counter";


function Main(){


    //MORE OF CONCEPTS OF: DIV1: STATE, 
    //DIV2: PROPS,
    //DIV3: CONDITIONAL RENDERING
    //DIV4 : FORMS
    //DIV5 : useEffect 
    
    // Div one starts here
    //--------------------------------

    const answer=['true', 'false'];
    const [items, setItems]=React.useState(['fruit 1', 'fruit 2']);
    
    const [Response, setResponse] = React.useState('yes');

    function addObject(){
        const x= Math.floor(Math.random()*2);
        setResponse(answer[x]);


        console.log('button clicked');
    }
    function addItem(){
        setItems(prevItems=>{
            return [...prevItems, `fruit ${items.length + 1}`]
        });
        console.log(items);

        console.log("new item is added");
    }

    //div 2 Starts here
    //--------------------------------------------


    function toggle(id){
        setBox(prevBox=>{
          return prevBox.map(each=>{
            return each.id===id ? {...each, on:!each.on}: each;
          });
        });
    }
    const [Box, setBox]=React.useState(Boxes);
    const Squares=Box.map(each=> {
        return <Color toggle={toggle} key={each.id} id={each.id} on={each.on} />
      });


      //div 3 Starts here
      //---------------------------------------------------

      const [messages, setMessages]=React.useState(['mess 1','mess 2']);

      

      function addMessages(){
        console.log('messages added');
        setMessages(prevMessages=> {
            return [
                ...prevMessages,
                `mess ${prevMessages.length}`
            ]
        });
      }
      function Clear(){
        console.log('messages cleared');
        setMessages([]);
      }


      //div 4 Start here
      //-------------------------------------------------------

      const [formData, setFormData]=React.useState({
        firstName:"",
        lastName:'',
        Comments:''
      });
      
      function handleChange(event){
        setFormData(prevFormData=>{
            return{
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        });
      }
      function handleSubmit(event){
        event.preventDefault();
        console.log(formData);
      }

      //div 5 starts here
      //--------------------------------------------------------

      const [show, setShow]= React.useState('true');
      const [windowWidth, setWindowWidth]=React.useState(window.innerWidth);


      function widthShower(){
        setShow(prevShow=> !prevShow);
      }
      React.useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWindowWidth(window.innerWidth);
          });
      }, [windowWidth]);
      


    return(
        <div>
        <div className="Chain_Master">
            <h1>{Response==='true' ? 'yes':'no'}</h1>
            <h2>{items.map(each=> <p key={items.indexOf(each)}>{each}</p>)}</h2>
            <button onClick={addObject}>Click Here</button>
            <button onClick={addItem}>Add aonther object</button>
        </div>
        <div className="Chain_Master2">
            {Squares}
        </div>
        <div className="Chain_Master3">
            {messages.length >0 && <h1>You have {messages.length} Unread {messages.length>1 ? "messages": 'message'}</h1>}
            <button className="Clear" onClick={Clear}>Clear</button>
            <button className="addMessages" onClick={addMessages}>Add a new message</button>
        </div>
        <div className="Chain_Master4">
            <form onSubmit={handleSubmit}>
                <input 
                    type=" text" 
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input 
                    type="password"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
                <textarea 
                    placeholder="Comments"
                    onChange={handleChange}
                    name="Comments"
                    value={formData.Comments}
                />
                <button>Submit</button>
            </form>
        </div>
        <div className="Chain_Master5">
            <button onClick={widthShower}>Toggle</button>
            {show && <h3>Window width:{windowWidth}</h3>}
        </div>
        </div>
    )
}



/* don't pass ---------------------------------------*/


function Gdsc(){
    const [counter, setCounter]=useState(0)

    function increase(){
        return setCounter(prevCounter=> prevCounter+1)
    }
    function decrease(){
        return setCounter(prevCounter=> prevCounter-1)
    }
    function reset(){
        return setCounter(0)
    }
    function generate(){
        const randomNumber= Math.floor(Math.random()*100)
        return setCounter(randomNumber)
    }
    return(
        <>
            <h1>something</h1>
            <div>{counter}</div>
            <button onClick={increase}>Add</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrease}>Sub</button>
            <button onClick={generate}>Generate</button>
        </>
    )
}

function GdscProj2(){

    const membersData=['Nathan Israel', 'Nathnael Wondimagegn', 'Olbia Letta','Temesgen Getye', 'Osman Hassan','Rahel Belay','...']

    const membersName=membersData.map(each=><h1>{each}</h1>)
    return(
        <>
            {membersName}
            
        </>
    )
}
ReactDOM.render(<GdscProj2/>, document.getElementById('root'));
