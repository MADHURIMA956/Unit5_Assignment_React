import React from 'react';
import {useState } from 'react';
import {useEffect } from 'react';
import grocery from '../image/grocery.jpg'


export const Todo = () => {
    const [text , setText] = useState('');
    const [todo , setTodo] = useState([]);

    useEffect(() => {
        getTodo();
    },[]);

    const getTodo = () => {
        fetch("http://localhost:3001/items")
        .then((d) => d.json())
        .then((res) => {
            if(!text){

            }else{
                setTodo(res);

            }
        });
    };

    const addTodo = () => {
        const playLoad = {
            title:text,
            status:false,
        };
        fetch("http://localhost:3001/items" , {
            method:"POST",
            body:JSON.stringify(playLoad),
            headers:{
                "content-type" : "application/json"
            }
        }).then(() =>{
            if(!text){
                
            }else{
                getTodo();
                setText("")
            }
           
        });
    }

    //delete each Item
    const deleteItem = (id) => {
        const updatedItem = todo.filter((ele , idd) => {
            return (idd !== id)
        });
        setTodo(updatedItem)
    }

    return (
            <div >
                    <figure>
                        <img src={grocery} alt="grocery image" />
                        <figcaption>Add Your List Here </figcaption>
                    </figure>

                    <input value={text} type="text" onChange={(e) => setText(e.target.value)} placeholder='Enter items ...'/>
                    <button onClick={addTodo} ><i className="fa fa-plus" title='Add Item'></i></button>
                       {todo.map((e , idd) => (
                           <div key={idd}>
                               {e.title}
                                  <button>Done</button>
                                  <i className="fa fa-trash" title='Delete Item' onClick={ () => deleteItem(e.id)}></i>
                           
                           </div>
                         ))}
                  
                    <div>
                        <button >Remove All</button>
                    </div>
            </div>
    )
}