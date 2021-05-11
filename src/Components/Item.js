import React from 'react';

function Item(props){
     const item = props.itemName
     const index = props.index
     const showEdit = ()=>{
          document.getElementById('itemName'+item+index).style.display='none'
          document.getElementById('editBar'+item+index).style.display='flex'
          document.getElementById('editInput'+item+index).focus()
     }

     const AddItem = (e)=>{
          if(e.code === "Enter"){
               props.editItem(item,document.getElementById('editInput'+item+index).value)
          }
     }

     return(
     <div className='todo__item' id={item} key={item+index}>
          <div className='todo__itemName' id={'itemName'+item+index}>{item}</div>
          <div className='todo__editBar' id={'editBar'+item+index} style={{display:'none'}}> 
          <input className='todo__editInput' id={'editInput'+item+index} type='text' defaultValue={item} onKeyDown={AddItem}></input>
          <button className='todo__editButton' onClick={()=>props.editItem(item,index,document.getElementById('editInput'+item+index).value)}>SAVE</button>
          </div>
          <div className='todo__buttonsBar'>
          <button className='todo__itemEditing' onClick={showEdit}>EDIT</button>
          <button className='todo__itemDeleting' onClick={()=>props.deleteItem(item)}>X</button>
          </div>
     </div>
     )
}

export default Item