import Product from '../models/Product';
import User from "../models/User";


export const createProduct = async (req, res) => {
        console.log(req.body);
       const {name, category, price, imgURL } = req.body;
    const newProduct = new Product({ name, category, price, imgURL });

    const productSaved = await newProduct.save();
// status 201 new object created
    res.status(201).json(productSaved);
};

export const getProducts = async(req, res) => {
    const products = await Product.find();
      res.json(products);
};

export const getProductById = async (req, res) => {
   const product = await Product.findById(req.params.productId);
   res.status(200).json(product);
};

export const updateProductById = async (req, res) => {
   const updatedProduct = await Product.findByIdAndUpdate(
     req.params.productId,
     req.body,
     {new: true}
   );
     res.status(200).json(updatedProduct);
};
 
export const deleteProductById = async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.productId);
  // with status 204 don't see the answer, status 200 yes
  res.status(200).json(deleteProduct);
}; 


export const deleteProductByUserId = async (req, res) => {
  const deleteUserProduct = await Product.findByIdAndDelete(req.params.productUserId);
  // with status 204 don't see the answer, status 200 yes
  res.status(200).json(deleteUserProduct);
};