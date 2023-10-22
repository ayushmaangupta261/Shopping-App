import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-hot-toast"


import { add, remove } from '../redux/slice/CartSlice'
import { show, hide } from '../redux/slice/descSlice'
import { NavLink } from 'react-router-dom'
// import Description from '../Pages/Description'

const Product = ({ item }) => {

    const { cart } = useSelector((state) => state);
    // const {desc} = useSelector((state)=>state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(item));
        toast.success("Item added to cart...")
    };
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from cart !!!")
    };

    // const [desc,setDesc] = useState();

    const clickHandler = () => {
        // <Description title={item.title} key={item.id} />
        dispatch(show(item));

    }

    return (

        <div className='flex flex-col items-center justify-between hover:scale-105 transition duration-300 ease-in shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] gap-3 mt-10 ml-5 rounded-xl p-5' >


            <div>
                <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{item.title}</p>
            </div>
            <div>
                <p className='w-40 text-gray-400 font-normal text-[15px] text-left'>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>
            <div className='h-[180px]'>
                <NavLink to="/description">
                    <img src={item.image} className='h-full w-full' onClick={clickHandler} /></NavLink>
            </div>

            <div className='flex justify-between gap-12 items-centerw-full '>
                <div>
                    <p className='text-green-600 font-semibold'>${item.price}</p>
                </div>
                <div>
                    {cart.some((p) => p.id == item.id) ?
                        (<button onClick={removeFromCart} className='text-gray-700 border-2 border-gray-700 rounded-xl font-semibold text-[12px] px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300'
                        >Remove from Cart</button>)
                        :
                        (<button onClick={addToCart} className='text-gray-700 border-2 border-gray-700 rounded-xl font-semibold text-[12px] px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300'
                        >Add to Cart</button>)}
                </div>
            </div>

        </div>
    )
}

export default Product
