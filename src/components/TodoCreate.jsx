import React, { useState } from 'react';
import { FaTasks } from "react-icons/fa";
import { Button, Flex, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { Add } from '../redux/actions/TodoActions';
import { v4 as uuidv4 } from 'uuid'


function TodoCreate() {
  const [todo, setTodo] = useState({
    id: uuidv4(),
    content: '',
    editable: false
  })
  const dispatch = useDispatch()
  console.log(todo.id)

  return (
    <Flex vertical className='todo-section'>
      <h1>To do App..</h1>
      <Input size="large"
        id='todo_inpt'
        name='todo'
        placeholder="Enter to do.."
        prefix={<FaTasks style={{ color: '#59b0ff' }} />}
        value={todo.content}
        onChange={(e) => setTodo({
          id: uuidv4(),
          content: e.target.value,
          editable: false
        })}
      />
      <Button onClick={() => {
        todo.content ? dispatch(Add(todo)) : alert("Enter Todo!")
        setTodo("")
      }}
        className='add-btn'
        variant='solid'
        color='primary'
      >Add</Button>
    </Flex>
  )
}

export default TodoCreate