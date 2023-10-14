import { useEffect, useState } from 'react'
import UserChart from '../FirstChartAttempt'
import { useAppSelector } from '@/redux/store';


const Products = () => {
  const data = useAppSelector((state)=> state.userDataReducer.value.data);

  //if the user directly tap into this segment 
  const isDone = useAppSelector((state)=> state.userDataReducer.value.isDone);
  const [isDoneLocal, setIsDoneLocal] = useState(false)
  const [chartData, setChartData] = useState({labels:[],values:[]});

  useEffect(() => {
    if (isDone) {
      setIsDoneLocal(true);
      setChartData({
        labels: Object.keys(data.monthly_sales),
        values: Object.values(data.monthly_sales), 
      })
    }else{
      
    }
  }, [isDone])
  


  console.log(data.monthly_sales);

  return (
    <div className='flex grow h-[45%] p-5'>
      
    {
      isDoneLocal? 
    <div className='w-full'><UserChart data={chartData} /></div>:<div>loading</div>}
    </div>
  )
}

export default Products