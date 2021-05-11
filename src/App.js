import React, {useState} from 'react';
import ItemList from './Components/ItemList';
import ItemAdding from './Components/ItemAdding';
import ItemHeader from './Components/ItemHeader';
import './css/style.css';

function App() {
     const [list, setList] = useState(['Get up']);

     const editItem = (itemToEdit,index, newValue)=>{
          document.getElementById('itemName'+itemToEdit+index).style.display='flex'
          document.getElementById('editBar'+itemToEdit+index).style.display='none'
          list[index]=newValue
          setList([...list])
     }

     const deleteItem = (itemToDelete)=>{
          const itemIndex = list.indexOf(itemToDelete)
          list.splice(itemIndex,1)
          setList(
               [...list]
          )
     }
  
     const addNewItem = ()=>{
          let elementValue = document.getElementById("todo__input")
          if (elementValue.value !== ''){
               setList([...list,elementValue.value])
          }
          elementValue.value = ''
     }

     return (
          <div className="todo">
               <ItemHeader/> 
               <ItemList list={list} setList={setList} deleteItem={deleteItem} editItem={editItem}/>
               <ItemAdding addNewItem={addNewItem}/>
          </div>
     );
}

export default App;
