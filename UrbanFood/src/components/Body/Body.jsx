import ResCard from './ResCard'
import resList from "../../utils/mockData"
import { useState } from 'react'

function Body() {
    const [rating, setRating] = useState(0)
    const [filterApplied, setFilterApplied] = useState(false)
    const [filterData, setFilterData] = useState([])

    const filterRating = () => {
        resList.map((filterRestaurant) => {
            if (filterRestaurant.data.avgRating >= rating) {
                setFilterData((prevData) => [...prevData, filterRestaurant])
            }
        })
    }

    const filterChange = () => {
        filterRating()
        setFilterApplied(() => !filterApplied)
    }

    return (
        <div>
            <div className='flex gap-5 items-center'>
                <div className='px-5 pt-5 flex gap-3'>
                    <input className='border-1 border-black' type="text" />
                    <button className='bg-gray-300 px-4 rounded-sm py-1 cursor-pointer'>Search</button>
                </div>
                <div className='flex items-center justify-center pt-5 gap-2'>
                    <input
                        onChange={(e) => setRating(e.target.value)}
                        type="number"
                        className='border-1 border-black py-1'
                    />
                    <button
                        onClick={() => filterChange()}
                        className='bg-amber-500 px-5 py-1 border-1 border-black cursor-pointer'
                    >
                        Filter</button>
                </div>
            </div>
            <div className='flex flex-wrap'>
                {
                    filterApplied ? filterData.map((res) => <ResCard key={res.data.id} resData={res} />) :
                        resList.map((res) => <ResCard key={res.data.id} resData={res} />)
                }
            </div>
        </div>
    )
}

export default Body
