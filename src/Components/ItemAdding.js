import React from 'react';

function ItemAdding(props){     

     const AddItem = (e)=>{
          if(e.code === "Enter"){
               props.addNewItem()
          }
     }

     return(
          <div className='todo__itemAdding'>
               <input type='text' className='todo__input' id='todo__input' onKeyDown={AddItem} ></input>
               <button className='todo__addButton' onClick={props.addNewItem}>ADD</button>
          </div>
     )
}

export default ItemAdding