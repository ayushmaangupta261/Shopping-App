
import { MdDelete } from "react-icons/md"
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slice/CartSlice'
import { toast } from "react-hot-toast"

const CartItem = ({ item, itemIndex }) => {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item removed from cart !!!")
    }

    // console.log(window.React1 === window.React2);

    return (
        <div className='flex justify-center mr-2 '>


            <div className='flex  items-center justify-between hover:scale-105 transition duration-300 ease-in shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] gap-3 mt-10 ml-5 rounded-xl flex-col md:flex-row w-[18rem] sm:w-[30rem]  py-5 px-10 '>

                <div className='h-[180px]'>
                    <img src={item.image} className='h-full w-full'></img>
                </div>

             <div className='flex flex-col gap-y-2  '>
             <div>
                    <h1 className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{item.title}</h1>
                    <p className='w-40 text-gray-400 font-normal text-[15px] text-left'>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
                </div>
                <div className='flex justify-between items-center'>
                <p className='text-green-600 font-semibold'>${item.price}</p>
                    <div onClick={removeFromCart} >
                        <MdDelete className='h-[50px] hover:scale-150 transition duration-200' />
                    </div>
                </div>
             </div>

            </div>

        </div>
    )
}

export default CartItem
