import React, { useState } from 'react'
import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import './index.css'

const App = () => {

  const inputAllForm = inputCard.title === '' || inputCard.body === '' || inputCard.category === ''

  const [cardId, setCardId] = useState(1)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('')
  const [cards, setCards] = useState([])
  const [cardNum, setCardNum] = useState(0)
  const [deleteCardId, setDeleteCardId] = useState(0)
  const [inputCard, setInputCard] = useState({ id: 1, title: '', body: '', category: '' })

  const postAction = e => {
    e.preventDefault()

    setCardNum(cardNum + 1)
  }

  const deleteCard = (id, e) => {
    e.preventDefault()
    console.log(id);
 
    setCardNum(cardNum - 1)
  }

  useEffect(() => {
    const changeCard = async () => {
      if (cardNum > cards.length) {
        if (title !== '') {
          const newCard = await { cardId: cardId, cardTitle: title, cardBody: body, cardCategory: category }
          if (cards.length) {
            setCards([...cards, newCard]);
          } else {
            setCards([newCard]);
          }
          setInputCard({ id: inputCard.id + 1, title: '', body: '', category: '' })
        }
      } else if (cardNum < cards.length) {
        console.log('↓これがdeleteCardId========');
        console.log(deleteCardId);
        const newArray = cards.filter((card) => {
          return card.cardId !== deleteCardId;
        })
        setCards(newArray);
      }
    }
    changeCard()
  }, [cardNum])
  // カードの表示まで５０の途中

  return (
    <>
      <Box sx={{ borderBottom: '1px solid lightgray', paddingBottom: '50px' }}>
        <h1>Post Action List</h1> カード枚数：{cardNum}
        <form>
          <TextField
            className='input-form'
            id='title'
            label='Title'
            variant='outlined'
            value={inputCard.title}
            onChange={e => setInputCard(
              {
                id: inputCard.id,
                title: e.target.value,
                body: inputCard.body,
                category: inputCard.category
              }
            )}
          />
          <TextField
            className='input-form'
            id='body'
            label='Body'
            multiline
            rows={4}
            variant='outlined'
            value={inputCard.body}
            onChange={e => setInputCard(
              {
                id: inputCard.id,
                title: inputCard.title,
                body: e.target.value,
                category: inputCard.category
              }
            )}
          />
          <TextField
            className='input-form'
            id='category'
            label='Category'
            variant='outlined'
            value={inputCard.category}
            onChange={e => setInputCard(
              {
                id: inputCard.id,
                title: inputCard.title,
                body: inputCard.body,
                category: e.target.value
              }
            )}
          />
          <Button className='input-form' variant='contained' onClick={postAction} disabled={inputAllForm}>post</Button>
        </form>
      </Box>

      <Box>
        <h1>Action List</h1>
        {cards.map((card) => (
          <Card sx={{ maxWidth: 500, margin: 2 }} key={card.id}>
            <CardContent>
              <Typography sx={{ fontSize: 20, borderBottom: '1px solid lightgray' }}>
                {card.title}
              </Typography>
              <Typography sx={{ fontSize: 16, padding: 2 }}>
                {card.body}
              </Typography>
              <Typography sx={{ fontSize: 12, padding: 2, color: '#0040a4' }}>
                #{card.category}
              </Typography>
            </CardContent>
            <CardActions>
              <Button color='warning' variant='outlined' onClick={(e) => deleteCard(card.id, e)}>Delete</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  )
}

export default App

137.56