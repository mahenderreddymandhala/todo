import { useState } from "react"

function App (){

    const [word,setWord] = useState('')

    const [todo,setTodo]= useState([{
        id:1,
        name:'reddy'
    }])


    const onDeleteItem=(id)=>{

        let newList = todo.filter((item)=>item.id!==id)
        setTodo(newList)
    }


    const addToDo=()=>{
let newTodo = {
            id:Date.now(),
            name:word
         }

        //  console.log(newTodo)
        //  console.log("24",todo)
        setTodo([...todo,newTodo])
console.log(todo)
        setWord('')
    }

    return (

        <div>
            <input type='text' value={word} style={{marginLeft:'40px'}} onChange={(e)=>setWord(e.target.value)}></input>
  
            <button  onClick={()=>addToDo()}>ADD TODO</button>

{
    todo.map((item)=>(
        <ul key={item.id} >
<li>{item.name}
<button onClick={()=>onDeleteItem(item.id)}>Delete</button></li>
        </ul>
    ))
}

        </div>
    )


}


export default App