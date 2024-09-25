import React, { useEffect } from 'react'
import { Button, Container, Spinner } from 'react-bootstrap'
import { useDeleteBookByIdMutation, useDeleteCharacterByIdMutation, useGetBookByIdQuery, useGetBooksQuery, useGetCharacterByIdQuery, useGetCharactersQuery } from '../../features/apiSlice'
import { getError } from '../../utils/error'
import { useNavigate, useParams } from 'react-router-dom'
import BackBtn from '../../components/BackBtn'
import MotionDiv from '../../components/MotionDiv'
import Skeleton from 'react-loading-skeleton'
import { toast } from 'react-toastify'
import DeleteBtn from '../../components/DeleteBtn'

function ViewCharacter() {

    const {id} = useParams();
    const navigate = useNavigate();
    const {data,isLoading,isError,error} = useGetCharacterByIdQuery(id,{skip:!id})
    const [deleteCharacterById,{isLoading:deleteLoading}] = useDeleteCharacterByIdMutation();
    const {refetch} = useGetCharactersQuery();

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

             <p>Gender: {data?.data?.gender}</p>
             <h6>Aliases:</h6>
             <ul>
             {data?.data?.aliases?.map((alia,i)=>(
                <li key={alia}>{alia}</li>
             ))}
                </ul>
             <p>Culture: {data?.data?.culture}</p>


            <DeleteBtn title={'Character'} isLoading={deleteLoading} onClick={()=>handleDelete(id)}/>

           </div>
}  
    </MotionDiv>
  )
}

export default ViewCharacter