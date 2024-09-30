import { Flex } from 'antd'
import React from 'react'
import TodoInfo from './TodoInfo'
import { useSelector } from 'react-redux'

function TodoList() {
  const todoObj = useSelector(state => state.todoAr)
  return (
    <Flex className='todo-list' vertical>
      {
        todoObj.map((todo, index) => (
          <TodoInfo key={index} todo={todo} />
        ))
      }

    </Flex>
  )
}

export default TodoList