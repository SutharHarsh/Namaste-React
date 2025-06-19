import React, { useEffect, useState } from 'react'
import { DATA_API } from './constants';

const useShowProducts = () => {

    const [newData, setNewData] = useState([])
  
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(DATA_API);
        const json = await data.json();

        setNewData(json.products);
    }

    return newData;
}

export default useShowProducts;
