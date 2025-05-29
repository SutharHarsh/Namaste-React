import ResCard from './ResCard'
import resList from "../../utils/mockData"

function Body() {
    
    return (
        <div>
            <div className='px-5 pt-5 flex gap-3'>
                <input className='border-1 border-black' type="text" />
                <button className='bg-gray-300 px-4 rounded-sm py-1 cursor-pointer'>Search</button>
            </div>
            <div className='flex flex-wrap'>
                { resList.map((res) => <ResCard key={res.data.id} resData = {res} />) }
            </div>
        </div>
    )
}

export default Body
