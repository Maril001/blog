import connectDB from '../../utils/connectDB';
import SubCategory from '../../models/SubCategory';

// Connect to MongoDB
connectDB();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const subCategory = await SubCategory.find().sort({ date: -1 });
      res.status(200).json({ success: true, data: subCategory });
      
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(404).json({ message: 'Not found'});
}
}