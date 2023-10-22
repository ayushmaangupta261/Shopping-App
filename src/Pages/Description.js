import React from 'react'
import {  useSelector } from 'react-redux'
import DescItem from '../Components/DescItem';




const Description = () => {



    const { desc } = useSelector((state) => state);

  

    return (

        <div className='flex flex-col justify-center items-center'>

            <div>
                {desc.map((item, index) => (

                    <DescItem key={item.id} item={item} itemIndex={index} />

                ))}
            </div>

      


        </div>
    )
}

export default Description
