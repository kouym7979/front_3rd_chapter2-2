import { useState } from 'react'
import { Product } from '../../types.ts'

export const useProducts = (initialProducts: Product[]) => {
  const [products, setProducts] = useState<Product[]>(initialProducts)

  const addProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct])
  }

  const updateProduct = (updatedProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((curProduct) =>
        curProduct.id === updatedProduct.id ? updatedProduct : curProduct
      )
    )
  }

  return {
    products,
    addProduct,
    updateProduct
  }
}
