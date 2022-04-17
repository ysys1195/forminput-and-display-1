import React, { useState } from 'react'
import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import './index.css'

const App = () => {

 const [title, setTitle] = useState('')
 const [body, setBody] = useState('')
 const [category, setCategory] = useState('')
 const [cards, setCards] = useState([])
 const inputAllForm = title === '' || body === '' || category === ''

 const postAction = e => {
  e.preventDefault()

  const newCard = { cardTitle: title, cardBody: body, cardCategory: category }
    setCards([...cards, newCard])
  }

  useEffect(() => {
    console.log(cards);
  }, [cards])

 return (
   <>
     <Box sx={{ borderBottom: '1px solid lightgray', paddingBottom: '50px' }}>
       <h1>Post Action List</h1>
       <form>
         <TextField className='input-form' id='title' label='Title' variant='outlined' onChange={e => setTitle(e.target.value)} />
         <TextField className='input-form' id='body' label='Body' multiline rows={4} variant='outlined' onChange={e => setBody(e.target.value)} />
         <TextField className='input-form' id='category' label='Category' variant='outlined' onChange={e => setCategory(e.target.value)} />
         <Button className='input-form' variant='contained' onClick={postAction} disabled={inputAllForm}>post</Button>
       </form>
     </Box>

     <Box>
       <h1>Action List</h1>
       <Card sx={{ maxWidth: 500 }}>
         <CardContent>
           <Typography sx={{ fontSize: 20, borderBottom: '1px solid lightgray' }}>
             Title output
           </Typography>
           <Typography sx={{ fontSize: 16, padding: 2 }}>
             Body output
           </Typography>
           <Typography sx={{ fontSize: 12, padding: 2 }}>
             Category output
           </Typography>
         </CardContent>
         <CardActions>
           <Button variant='outlined'>Delete</Button>
         </CardActions>
       </Card>
     </Box>
   </>
 )
}

export default App

