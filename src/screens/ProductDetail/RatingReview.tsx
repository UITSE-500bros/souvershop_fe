import ReviewFrame from '@/components/ReviewFrame/ReviewFrame'
import { Button } from '@mui/material'
import React from 'react'

export default function RatingReview() {
  return (
    <div className='w-full h-full flex flex-col'>
        <div className='flex flex-row justify-between items-center'>
        <div className="text-black text-2xl font-bold font-['Inter']">All Reviews(413)</div>
            <Button variant='contained' color='primary' sx={
                {
                    backgroundColor: '#000',
                    color: '#ffff',
                    borderRadius: '20px',
                    width: '200px',
                    height: '52px',
                    marginLeft: '20px',
                }
            }>
                Write a Review
            </Button>   
        </div>
        <div className='flex flex-wrap'>
  <div className='w-1/2 p-2'>
    <ReviewFrame />
  </div>
  <div className='w-1/2 p-2'>
    <ReviewFrame />
  </div>
  <div className='w-1/2 p-2'>
    <ReviewFrame />
  </div>
  <div className='w-1/2 p-2'>
    <ReviewFrame />
  </div>
  <div className='w-1/2 p-2'>
    <ReviewFrame />
  </div>
  <div className='w-1/2 p-2'>
    <ReviewFrame />
  </div>
</div>

      
    </div>
  )
}
