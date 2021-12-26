import React from 'react'
import {useRouter} from 'next/router';

const ProductReview = () => {
  const router = useRouter()
  const { productId, reviewId } = router.query
  return (
    <div>
      <h1>Welcome, It's review {reviewId} for product { productId }</h1>
    </div>
  )
}

export default ProductReview
