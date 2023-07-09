import subCategory from '@/models/SubCategory';
import connectDB from'../../utils/connectDB'

connectDB();

export default async function (req, res){
    if(req.method ==='POST'){
        const {subCategoryName,subCategoryImage} =req.body;
        try{
            const SubCategory = new subCategory  ({
               subCategoryName,
               subCategoryImage,

            });
            await SubCategory.save();
            res.status(201).json({success:true,data:SubCategory});

        }catch(error){
            res.status(400).json({success:false});
            console.log(error)
        }
        
    } else{
            res.status(404).json({message:"Not Found"})
        }
}