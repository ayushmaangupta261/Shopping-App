import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';
import { Link } from 'react-router-dom';

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    async function fetchData() {
        setLoading(true);

        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setItems(data);

            // console.log(items)

        } catch (e) {
            console.log("Error in api");
            setItems([]);
        }

        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (

        <div className='pb-[200px]  ' >

            {

                loading ?
                    (<Spinner />)
                    : (
                        items.length > 0 ?
                            (<div className='mx-auto mr-5 '>
                                <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  p-2 space-y-10 space-x-5 min-h-[100vh] justify-center '>
                                    {
                                        items.map((item) => (
                                            <Product key={item.id} item={item} />
                                        ))
                                    }
                                </div>
                            </div>)
                            :
                            (<div className='flex justify-center items-center h-[100vh] text-3xl font-bold'> <p>No data found !!!</p></div>)

                    )}
        </div>
    )
}

export default Home
