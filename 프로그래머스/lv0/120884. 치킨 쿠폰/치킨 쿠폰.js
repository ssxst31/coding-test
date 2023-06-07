function solution(chicken) {
  let coupon = chicken
  let count = 0

  while (coupon >= 10) {
    const leftCoupon = coupon % 10
    count += Math.floor(coupon / 10)
    coupon = leftCoupon + Math.floor(coupon / 10)
  }
  return count
}