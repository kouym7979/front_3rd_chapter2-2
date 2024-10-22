// useCart.ts
import { useState } from 'react'
import { CartItem, Coupon, Product } from '../../types'
import { calculateCartTotal, updateCartItemQuantity } from './utils/cartUtils'

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null)

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id)

      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, product.stock) }
            : item
        )
      }
      return [...prevCart, { product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId))
  }

  const updateQuantity = (productId: string, newQuantity: number) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) => {
            if (item.product.id === productId) {
              const maxQuantity = item.product.stock
              const updatedQuantity = Math.max(0, Math.min(newQuantity, maxQuantity))
              return updatedQuantity > 0 ? { ...item, quantity: updatedQuantity } : null
            }
            return item
          })
          .filter((item): item is CartItem => item !== null)
      // map 함수는 배열의 길이를 그대로 유지한 채 새로운 배열을 반환하므로, null 값이 존재할 수 있음.
      // 이런 null 값을 제거하여 cartItem 타입만 남긴 새로운 배열을 만들기 위해 사용된 것.
    )
  }

  const applyCoupon = (coupon: Coupon) => {}

  const calculateTotal = () => ({
    totalBeforeDiscount: 0,
    totalAfterDiscount: 0,
    totalDiscount: 0
  })

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyCoupon,
    calculateTotal,
    selectedCoupon
  }
}
