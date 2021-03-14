import React, {useState} from 'react'

const App = () => {

  const [notes, setNotes] = useState([])



  return (
    <div>
      <form>
        <input id="title" name="note" type="text" placeholder="enter title"/>
         <br/>
         <br/> 
         <textarea id="body" name="des" type="text" placeholder="enter description"/> 
         <br/> 
         <br/> 
         <input type="Submit"/> 
         <br/> 
         <br/>
      </form>
    </div>
  )

}
export default App;
