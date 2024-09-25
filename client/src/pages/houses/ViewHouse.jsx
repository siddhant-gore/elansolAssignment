import React, { useEffect } from 'react'
import { Button, Container, Spinner } from 'react-bootstrap'
import { useDeleteBookByIdMutation, useDeleteCharacterByIdMutation, useDeleteHouseByIdMutation, useGetBookByIdQuery, useGetBooksQuery, useGetCharacterByIdQuery, useGetCharactersQuery, useGetHouseByIdQuery, useGetHousesQuery } from '../../features/apiSlice'
import { getError } from '../../utils/error'
import { useNavigate, useParams } from 'react-router-dom'
import BackBtn from '../../components/BackBtn'
import MotionDiv from '../../components/MotionDiv'
import Skeleton from 'react-loading-skeleton'
import { toast } from 'react-toastify'
import DeleteBtn from '../../components/DeleteBtn'

function ViewHouse() {

    const {id} = useParams();
    const navigate = useNavigate();
    const {data,isLoading,isError,error} = useGetHouseByIdQuery(id,{skip:!id})
    const [deleteCharacterById,{isLoading:deleteLoading}] = useDeleteHouseByIdMutation();
    const {refetch} = useGetHousesQuery();

    useEffect(()=>{
        if(isError){
         getError(error);
         console.log(error);
        }     
     },[isError,error])


     const handleDelete = async()=>{
        try {
            const data = await deleteCharacterById(id).unwrap();
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

             <h5>Name: {data?.data?.name ?data?.data?.name:'N/A' }</h5>

             <p>Region: {data?.data?.region}</p>
             <p>Words: {data?.data?.words}</p>
             <h6>Titles:</h6>
             <ul>
             {data?.data?.titles?.map((title,i)=>(
                <li key={title}>{title}</li>
             ))}
                </ul>
             <h6>Seats:</h6>
             <ul>
             {data?.data?.seats?.map((seat,i)=>(
                <li key={seat}>{seat}</li>
             ))}
                </ul>
             <p>Founded: {data?.data?.founded ?data?.data?.founded : 'N/A'}</p>


            <DeleteBtn title={'House'} isLoading={deleteLoading} onClick={()=>handleDelete(id)}/>

           </div>
}  
    </MotionDiv>
  )
}

export default ViewHouse