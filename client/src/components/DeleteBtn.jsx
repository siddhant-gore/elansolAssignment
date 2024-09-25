import React from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa6'

function DeleteBtn({title,isLoading,onClick}) {
  return (
    <Button
    className='del-btn ms-0 p-1 px-2 my-3'
    variant='transparent'
    disabled={isLoading}
    onClick={onClick}
>
{isLoading?
<Spinner size='sm'/>
:
<span>Delete {title} <FaTrash size={20} className='pb-1 ms-1'/></span>
}
    
</Button>
  )
}

export default DeleteBtn