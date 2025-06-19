import React, { useEffect, useState } from 'react'
import { PRODUCT_API } from './constants';

const useProductData = (productId) => {

    const [productData, setProductData] = useState([]);
  
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(PRODUCT_API + productId);
        const json = await data.json();

        setProductData(json);
    }

    return productData;
}

export default useProductData;
