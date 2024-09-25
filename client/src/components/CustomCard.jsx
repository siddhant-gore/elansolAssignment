import React from 'react'
import { Card } from 'react-bootstrap'

function CustomCard({title,onClick,borderColor}) {
  return (
    <Card onClick={onClick} style={{border: `2px solid ${borderColor || '#000'}`}} className='rounded custom-card shadow p-3 m-1 h-100'>
    <h5>{title}</h5>
    </Card>
  )
}

export default CustomCard