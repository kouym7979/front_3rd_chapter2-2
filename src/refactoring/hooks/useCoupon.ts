import { Coupon } from '../../types.ts'
import { useState } from 'react'

export const useCoupons = (initialCoupons: Coupon[]) => {
  //return { coupons: [], addCoupon: () => undefined };

  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons)

  const addCoupon = (newCoupon: Coupon) => {
    setCoupons((prevCoupons) => [...prevCoupons, newCoupon])
  }

  return {
    coupons,
    addCoupon
  }
}
