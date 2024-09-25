import axios from "axios";
import catchAsyncError from "../utils/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";

const baseUrl = process.env.BASE_URL || "https://anapioficeandfire.com/api";

let characters = [];

export const fetchCharacters = async()=>{
    try {
        const response = await axios.get(`${baseUrl}/characters`);
        characters= response.data;
    } catch (error) {
        console.log(error)
    }
}

export const getCharacters = catchAsyncError(async(req,res,next)=>{

    if(characters.length===0){
        return next(new ErrorHandler("Failed To fetch character",500));
    }

        res.status(200).json({
            success: true,
            message:'Characters fetched successfully',
            data: characters
        });
   

})



export const getCharacterById = catchAsyncError(async(req,res,next)=>{

    const id = req.params.id

   const character = characters[id]

    if(!character){
        return next(new ErrorHandler("Character not found", 404));
    }

        res.status(200).json({
            success: true,
            message:'Character fetched successfully',
            data: character
        });

     
   

})


export const deleteCharacterById = catchAsyncError(async(req,res,next)=>{

    const id = req.params.id

   const character = characters[id]

    if(!character){
        return next(new ErrorHandler("Character not found", 404));
    }

    characters.splice(id,1)
        res.status(200).json({
            success: true,
            message:'Character deleted successfully',
            data: characters
        });


})