import React from 'react'
import { Button } from 'react-bootstrap'
import { GoArrowLeft } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
function BackBtn() {
    const navigate = useNavigate()
  return (
    <Button
            className='back-btn ms-0 p-1 px-2 my-3'
            variant='transparent'
            onClick={()=>navigate(-1)}
        >
            <span><GoArrowLeft size={25} className='pb-1 '/></span>
            <span>Back</span> 
        </Button>
  )
}

export default BackBtn