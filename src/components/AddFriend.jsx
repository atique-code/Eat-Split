import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

const AddFriend = ({onDataRecieve}) => {
    const[addFriend, setAddFriend] = useState("")
    const[image, setImage] = useState("")
console.log(image)

    function handleAdd(){

        const NewItemObj = {addFriend , image , id: Date.now() , OweMoney: 'nothing ' }
        console.log("picture add!!" , NewItemObj)
        onDataRecieve(NewItemObj)
        setAddFriend("");
        setImage("")
    }
  return (
    <div style={{marginTop: "20px"}}>
       <Box>
        <label htmlFor="friendName">Friend Name</label>
        <input type="text" placeholder='Enter your friend Name...'
         value={addFriend} 
         onChange={(e) => setAddFriend(e.target.value)} 
         />
         <br />
         <br />

        <label htmlFor="picture">Friend piccture</label>
        <input type='text' onChange={(e)=>setImage(e.target.value)}/>
        
        <Button variant='contained' onClick={handleAdd}>Add</Button>
       </Box>
    </div>
  )
}

export default AddFriend
