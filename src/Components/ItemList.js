import React from 'react';
import Item from './Item'

function ItemList({list,deleteItem,editItem}){
     const itemList = []
     let index=0;
     list.forEach(element =>{
          itemList.push(<Item itemName={element} deleteItem={deleteItem} editItem={editItem} index={index}/>)
          index += 1;
          }
     )

     return(          
          <div className='todo__itemList'>
               {itemList}
          </div>

     )
}

export default ItemList