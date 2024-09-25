import axios from "axios";
import catchAsyncError from "../utils/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";

const baseUrl = process.env.BASE_URL || "https://anapioficeandfire.com/api";

let houses = [];

export const fetchHouses = async()=>{
    try {
        const response = await axios.get(`${baseUrl}/houses`);
        houses= response.data;
    } catch (error) {
        console.log(error)
    }
}

export const getHouses = catchAsyncError(async(req,res,next)=>{

    if(houses.length===0){
        return next(new ErrorHandler("Failed To fetch house",500));
    }

        res.status(200).json({
            success: true,
            message:'House fetched successfully',
            data: houses
        });
   

})



export const getHouseById = catchAsyncError(async(req,res,next)=>{

    const id = req.params.id

   const house = houses[id]

    if(!house){
        return next(new ErrorHandler("House not found", 404));
    }

        res.status(200).json({
            success: true,
            message:'House fetched successfully',
            data: house
        });

     
   

})


export const deleteHouseById = catchAsyncError(async(req,res,next)=>{

    const id = req.params.id

   const house = houses[id]

    if(!house){
        return next(new ErrorHandler("House not found", 404));
    }

    houses.splice(id,1)
        res.status(200).json({
            success: true,
            message:'House deleted successfully',
            data: house
        });


})