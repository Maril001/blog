import mongoose from 'mongoose'

const subCategorySchema=new mongoose.Schema
({
   subCategoryName:{
    type:String,
    required:true,
   },
   subCategoryImage:{
    type:String,
    required:true,
   },
});
export default mongoose.models.subCategory || mongoose.model('subCategory',subCategorySchema)