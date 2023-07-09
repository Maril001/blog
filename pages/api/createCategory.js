import Category from '@/models/Category';
import connectDB from'../../utils/connectDB'

connectDB();

export default async function (req, res){
    if(req.method ==='POST'){
        const {categoryName,categoryImage} =req.body;
        try{
            const category = new Category  ({
               categoryName,
               categoryImage,

            });
            await category.save();
            res.status(201).json({success:true,data:category});

        }catch(error){
            res.status(400).json({success:false});
            console.log(error)
        }
        
    } else{
            res.status(404).json({message:"Not Found"})
        }
}