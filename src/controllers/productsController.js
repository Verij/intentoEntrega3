import Product from '../models/Product';

export const createProduct = async (req,res) => {
  
  const {name, category, gasto} = req.body

  const newProduct = new Product({name, category, gasto});

  const productSaved = await newProduct.save();

  res.json(productSaved)

}

export const getProducts = async (req, res) => {

  const products = await Product.find();
  res.json(products);
}
export const getProductById = async (req, res) => {

    const product = await Product.findById(req.params.productId);
    res.json(product)

}
export const updateProductById = async (req, res) => {

    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {new: true })
    res.status(200).json(updatedProduct);
}
export const deleteProductById = async (req, res) => {

  const {productId} = req.params;
  await Product.findByIdAndDelete(req.params.productId);
  res.status(204).json();
}