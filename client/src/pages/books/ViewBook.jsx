import React, { useEffect } from 'react'
import { Button, Container, Spinner } from 'react-bootstrap'
import { useDeleteBookByIdMutation, useGetBookByIdQuery, useGetBooksQuery } from '../../features/apiSlice'
import { getError } from '../../utils/error'
import { useNavigate, useParams } from 'react-router-dom'
import BackBtn from '../../components/BackBtn'
import MotionDiv from '../../components/MotionDiv'
import Skeleton from 'react-loading-skeleton'
import { FaTrash } from 'react-icons/fa6'
import { toast } from 'react-toastify'
import DeleteBtn from '../../components/DeleteBtn'

function ViewBook() {

    const {id} = useParams();
    const navigate = useNavigate();
    const {data,isLoading,isError,error} = useGetBookByIdQuery(id,{skip:!id})
    const [deleteBookById,{isLoading:deleteLoading}] = useDeleteBookByIdMutation();
    const {refetch} = useGetBooksQuery();

    useEffect(()=>{
        if(isError){
         getError(error);
         console.log(error);
        }     
     },[isError,error])


     const handleDelete = async()=>{
        try {
            const data = await deleteBookById(id).unwrap();
            toast.success(data?.message);
            navigate(-1)
            refetch();
        } catch (error) {
            getError(error)
        }
     }

  return (
    <MotionDiv >
        
        <BackBtn/>
        {isLoading?
        
    
        <div>
        <Skeleton height={'1rem'} width={'30%'} />
        <Skeleton height={'1rem'} width={'50%'}/>
        <Skeleton height={'1rem'} width={'50%'}/>
        <Skeleton height={'1rem'} width={'50%'}/>
        <Skeleton height={'1rem'} width={'25%'}/>
        
        </div>
        :
        <div className='shadow p-5 rounded-4'>

             <h5>{data?.data?.name}</h5>

             <p>Publisher: {data?.data?.publisher}</p>
             <h6>Authors:</h6>
             <ul>
             {data?.data?.authors?.map((auth,i)=>(
                <li key={auth}>{auth}</li>
             ))}
                </ul>
             <p>Number of Pages: {data?.data?.numberOfPages}</p>


             <DeleteBtn title={'Book'} isLoading={deleteLoading} onClick={()=>handleDelete(id)}/>

           </div>
}  
    </MotionDiv>
  )
}

export default ViewBook