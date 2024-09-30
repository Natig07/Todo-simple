import { Flex, Tooltip } from 'antd'
import React, { useState } from 'react'
import { MdOutlinePlaylistRemove, MdDownloadDone } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { Edit, Remove } from '../redux/actions/TodoActions';



function TodoInfo({ todo }) {
  const dispatch = useDispatch()
  const { id, content, editable } = todo;

  return (
    <Flex align='center' className='todo-info' justify='space-between'>
      <h5 style={{ textDecoration: editable ? 'line-through' : 'none' }}>{content}</h5>
      <Flex align='center' justify='center'>
        {editable ? <Tooltip color='green' title='Done'> <MdDownloadDone onClick={() => {
          dispatch(Edit(id))
        }} className='edit-icon' /></Tooltip> : <Tooltip color='blue' title='Mark as done'><IoCheckmarkDone onClick={() => {
          dispatch(Edit(id))
        }} className='done-icon' /></Tooltip>}


        <Tooltip color='red' title='Delete'>
          <MdOutlinePlaylistRemove onClick={() => { dispatch(Remove(todo)) }} className='remove-icon' />

        </Tooltip>
      </Flex>
    </Flex>
  )
}

export default TodoInfo