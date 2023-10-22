import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../Components/CartItem';

const Cart = () => {


    // Fetching the data from the cart
    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalamount] = useState(0);
    useEffect(() => {
        
console.log("Hello")
        setTotalamount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart])

    return (
        <div className='flex flex-col  w-10/12 mx-auto pb-10 overflow-hidden'>
            {
                cart.length > 0 ?
                    (<div className='flex flex-col lg:flex-row justify-between'>
                        <div>
                            {
                                cart.map((item, index) => {
                                    return <CartItem key={item.id} item={item} itemIndex={index} />
                                })
                            }
                        </div>

                        <div className='flex flex-col justify-between justify-center mt-[2rem] '>

                            <div className='text-3xl font-bold text-slate-500 '>Your Cart Summary</div>
                           
                            <div className='flex justify-between gap-x-10 items-center justify-center '>
                                <div className='flex flex-col justify-center mt-5'>
                                  <p className='text-xl font-semibold'>  Total Amount </p>
                                <p className='text-green-600 font-semibold text-2xl'> ${totalAmount}</p>
                                </div>
                            
                            <button className="uppercase bg-green-600 p-3 px-10 rounded-lg text-white mt-6 font-semibold tracking-wider hover:bg-purple-50 duration-300 transition-all ease-in hover:text-green-600 border-2 border-green-600">Checkout</button>
                            </div>
                        </div>

                    </div>)
                    :
                    (<div className="min-h-[80vh] flex flex-col justify-center items-center">
                        <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty ...</h1>
                        <NavLink to="/">
                            <button className="uppercase bg-green-600 p-3 px-10 rounded-lg text-white mt-6 font-semibold tracking-wider hover:bg-purple-50 duration-300 transition-all ease-in hover:text-green-600 border-2 border-green-600">
                                shop now
                            </button>
                        </NavLink>
                    </div>)
            }
        </div>
    )
}

export default Cart
