import React, {useState} from 'react';


export default function CreateListing() {
    const [formData, setFormData] = useState({
        type: "sell",
        name:"",
        bedroom: 1,
        bathsroom: 1,
        parking:false,
        furnished: false,
        address: "",
        description: "",
        offer: false,
        regularPrice: 0,
        discountedPrice:0,

    });
    const {type, name, bedroom, bathsroom, parking,furnished, address, description, offer, regularPrice, discountedPrice} = formData;
    function onChange(){

    }
  return (

    <main className='max-w-md px-2 mx-auto '>
        <h1 className='text-3xl text-center mt-6 font-bold'>Create a Listing</h1>
        <form>
            <p className='text-lg mt-6 font-semibold'>Sell/Rent</p>
            <div className=' flex space-x-5'>
                <button type='button' id='type' value="sell" onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase
                shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-ease-out w-full
                 ${ type === "rent" ? "bg-white text-black" : "bg-slate-600 text-white" }`}>Sell</button>
                 <button type='button' id='type' value="rent" onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase
                shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-ease-out w-full
                 ${ type === "sell" ? "bg-white text-black" : "bg-slate-600 text-white" }`}>Rent</button>
            </div>
            <p className='mt-6 font-semibold '>Name</p>
            <input type="text" id="name" value={name}  placeholder="Full name" maxLength={32} minLength={10} required 
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300
             rounded transition duration-150 ease-in-out focus-text-gray-700 focus:bg-white 
             focus:border-slate-600 mb-6' onChange/>
             <div className='flex space-x-6 mb-6 '>
                <div >
                    <p className='text-lg font-semibold '>Beds</p>
                    <input type="number" id="bedroom" value={bedroom} onChange={onChange} min="1" max="50" 
                    className=' w-full text-center px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300
                    rounded transition duration-150 ease-in-out focus-text-gray-700 focus:bg-white 
                    focus:border-slate-600 mb-6'/>
                </div>
                <div>
                    <p className='text-lg font-semibold'>Baths</p>
                    <input type="number" id='bathrooms' value={bathsroom} onChange={onChange} min="1" max="50"
                    className='w-full text-center px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300
                    rounded transition duration-150 ease-in-out focus-text-gray-700 focus:bg-white 
                    focus:border-slate-600 mb-6' />
                </div>
             </div>
             <p className='text-lg mt-6 font-semibold'>Parking spot</p>
            <div className=' flex space-x-5'>
                <button type='button' id='type' value={true} onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase
                shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-ease-out w-full
                 ${ !parking ? "bg-white text-black" : "bg-slate-600 text-white" }`}>Yes</button>
                 <button type='button' id='type' value={false} onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase
                shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-ease-out w-full
                 ${ parking ? "bg-white text-black" : "bg-slate-600 text-white" }`}>No</button>
            </div>
            <p className='text-lg mt-6 font-semibold'>Furnished</p>
            <div className=' flex space-x-5'>
                <button type='button' id='furnished' value={true} onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase
                shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-ease-out w-full
                 ${ !furnished? "bg-white text-black" : "bg-slate-600 text-white" }`}>Yes</button>
                 <button type='button' id='furnished' value={false} onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase
                shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-ease-out w-full
                 ${ furnished? "bg-white text-black" : "bg-slate-600 text-white" }`}>No</button>
            </div>
            <p className='mt-6 font-semibold '>Address</p>
            <textarea type="text" id="address" value={address}  placeholder="Address"  required 
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300
             rounded transition duration-150 ease-in-out focus-text-gray-700 focus:bg-white 
             focus:border-slate-600 mb-6' onChange></textarea>
<p className=' font-semibold '>Description</p>
<textarea type="text" id="description" value={description}  placeholder="Address"  required 
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300
             rounded transition duration-150 ease-in-out focus-text-gray-700 focus:bg-white 
             focus:border-slate-600 mb-6' onChange></textarea>
             <p className='text-lg  font-semibold'>Offer</p>
            <div className=' flex space-x-5 mb-6'>
                <button type='button' id='offer' value={true} onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase
                shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-ease-out w-full
                 ${ !offer? "bg-white text-black" : "bg-slate-600 text-white" }`}>Yes</button>
                 <button type='button' id='offer' value={false} onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase
                shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-ease-out w-full
                 ${ offer? "bg-white text-black" : "bg-slate-600 text-white" }`}>No</button>
            </div>
            <div className='flex items-center mb-6'>
            <div className=' '>
                <p className='text-lg font-semibold'>Regular Price</p>
                <div className='flex w-full justify-center items-center space-x-6'>
                    <input type="number" id='regularPrice' value={regularPrice} onChange={onChange} min="50" max="4000000000"  
                    className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out 
                    focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'/>
                    {type === "rent" && (
                    <div className=''><p className='text-md w-full whitespace-nowrap'>$ / Month</p></div>
                )}
                </div>
                
            </div>
           
            </div>
            {offer && (
              <div className='flex items-center mb-6'>
              <div className=' '>
                  <p className='text-lg font-semibold'>Discounted Price</p>
                  <div className='flex w-full justify-center items-center space-x-6'>
                      <input type="number" id='discountedPrice' value={discountedPrice} onChange={onChange} required={offer} min="50" max="4000000000"  
                      className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out 
                      focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'/>
                      {type === "rent" && (
                      <div className=''><p className='text-md w-full whitespace-nowrap'>$ / Month</p></div>
                  )}
                  </div>
                  
              </div>
             
              </div>  
            )}
            <div className='mb-6 '>
                <p className='text-lg font-semibold'>Images</p>
                <p className='text-gray-600'>The first image will be the cover (max 6)</p>
                <input className='w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition 
                duration-150 ease-in-out focus:bg-white focus:border-slate-600' type="file" id="images" onChange={onChange} accept=".jpg, .png, .jpeg" multiple required/>
            </div>
            <button type='submit' className='mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase
            rounde shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg rounded active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Create Listing</button>
        </form>
    </main>
  )
}
