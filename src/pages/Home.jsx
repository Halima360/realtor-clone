import React, { useEffect } from 'react'
import Slider from '../components/slider'



export default function Home() {
//   useEffect(()=>{
// async function fetchListings(){
//   const Listings = collection(db, "listings")
//   const q = query(ListingRef, orderBy('timestamp' ,'desc'), limit(5))
// }
// fetchListings
//   }, [])
  return (
    <div>
      <Slider/>
    </div>
  )
}
