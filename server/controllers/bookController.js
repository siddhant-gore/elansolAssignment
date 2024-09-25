import axios from "axios";
import catchAsyncError from "../utils/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";

const baseUrl = process.env.BASE_URL || "https://anapioficeandfire.com/api";

let books = [];

export const fetchBooks = async()=>{
    try {
        const response = await axios.get(`${baseUrl}/books`);
        // books= response.data;
        books = response.data.sort((a, b) => {
            return a.name.localeCompare(b?.name); 
          });
          
    } catch (error) {
        console.log(error)
    }
}

export const getBooks = catchAsyncError(async(req,res,next)=>{

    if(books.length===0){
        return next(new ErrorHandler("Failed To fetch book",500));
    }

        res.status(200).json({
            success: true,
            message:'Books fetched successfully',
            data: books
        });
   

})


// export const getBooks = catchAsyncError(async(req,res,next)=>{

//     try {
//         console.log(baseUrl)
//         const response = await axios.get(`${baseUrl}/books`);

//         res.status(200).json({
//             success: true,
//             message:'Books fetched successfully',
//             data: response.data
//         });

//       } catch (error) {
//         res.status(500).json({ message: 'Failed to fetch books' });
//       }
   

// })



// export const getBookById = catchAsyncError(async(req,res,next)=>{

//     const id = req.params.id
//     try {
//         console.log(baseUrl)
//         const response = await axios.get(`${baseUrl}/books/${id}`);

//         res.status(200).json({
//             success: true,
//             message:'Book fetched successfully',
//             data: response.data
//         });

//       } catch (error) {
//         res.status(500).json({ message: 'Failed to fetch book' });
//       }
   

// })

export const getBookById = catchAsyncError(async(req,res,next)=>{

    const id = req.params.id

   const book = books[id]

    if(!book){
        return next(new ErrorHandler("Book not found", 404));
    }

        res.status(200).json({
            success: true,
            message:'Book fetched successfully',
            data: book
        });

     
   

})


export const deleteBookById = catchAsyncError(async(req,res,next)=>{

    const id = req.params.id

   const book = books[id]

    if(!book){
        return next(new ErrorHandler("Book not found", 404));
    }

    books.splice(id,1)
        res.status(200).json({
            success: true,
            message:'Book deleted successfully',
            data: books
        });


})