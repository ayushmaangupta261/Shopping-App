import React from 'react'
import { Link } from 'react-router-dom';
import { hide } from '../redux/slice/descSlice';
import { useDispatch } from 'react-redux';

const DescItem = ({ item }) => {

    const dispatch = useDispatch();

    const removeHandler = () => {
        dispatch(hide(item.id));
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex  items-center justify-between hover:scale-105 transition duration-300 ease-in shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] gap-3 mt-10 ml-5 rounded-xl flex-col w-[18rem] sm:w-[40rem]   py-5 px-10 '>
                <div className=''>
                    <h1 className='text-gray-700 font-bold text-2xl   mt-1 text-center'>{item.title}</h1>
                </div>
                <div className='w-[180px]'>
                    <img src={item.image} className='h-full w-full'></img>
                </div>
                <div>
                    <p className=' text-gray-400 font-normal text-[15px] text-left'>{item.description}</p>
                </div>
                <div className='flex justify-center items-center gap-x-4'>
                    <p className='text-lg font-semibold'>Price : </p>
                    <p className='text-green-600 font-semibold'>${item.price}</p></div>

            </div>

            <div className=''>
                <Link to="/">
                    <button className="uppercase bg-green-600 p-3 px-10 rounded-lg text-white mt-6 font-semibold tracking-wider hover:bg-purple-50 duration-300 transition-all ease-in hover:text-green-600 border-2 border-green-600" onClick={removeHandler}>Home</button>
                </Link>
            </div>


        </div>
    )
}

export default DescItem
