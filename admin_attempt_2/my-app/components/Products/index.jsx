import { useEffect, useState } from 'react'
import UserChart from '../ProductChart'
import { useAppSelector } from '@/redux/store';


const Products = () => {
  const data = useAppSelector((state) => state.userDataReducer.value.data);
  const [howLong, setHowLong] = useState(0);

  const isDone = useAppSelector((state) => state.userDataReducer.value.isDone);
  const [isDoneLocal, setIsDoneLocal] = useState(false)
  const [chartData, setChartData] = useState({ labels: [], values: [] });

  useEffect(() => {
    if (isDone) {
      setIsDoneLocal(true);
      setChartData({
        labels: Object.keys(data.monthly_sales),
        values: Object.values([data.monthly_sales, data.monthly_return]),
      }
      )
      // console.log(data.monthly_sales);
      // console.log(values);
      console.log(Object.entries(data.monthly_return).slice(-3));
      console.log(Object.entries(data.monthly_sales).slice(-3));
    }
  }, [isDone])



  // console.log(chartData);

  return (
    <div className='flex grow h-full flex-col'>
      <div class="flex pt-5 justify-center">
        <button class={`${howLong == 0 ? "bg-primary text-white font-semibold" : "bg-white text-primary"} rounded-l px-2 py-1 focus:outline-none ease-in-out duration-300 border border-primary text-sm font-bold`} onClick={() => changeTimeInterval(0)}>last 3 months</button>
        <button class={`${howLong == 1 ? "bg-primary text-white font-semibold" : "bg-white text-primary"} px-2 py-1 focus:outline-none ease-in-out duration-300 border-y border-primary text-sm font-bold`} onClick={() => changeTimeInterval(1)}>last 6 months</button>
        <button class={`${howLong == 2 ? "bg-primary text-white font-semibold" : "bg-white text-primary"} rounded-r px-2 py-1 focus:outline-none ease-in-out duration-300 border border-primary text-sm font-bold`} onClick={() => changeTimeInterval(2)}>last 12 months</button>

      </div>
      {/* <div className='w-full h-[55%] p-5'> */}

      {
        isDoneLocal ?
          <div className='w-full h-[45%] p-5'>
            {//howLong == 0 ? 
              <UserChart data={chartData} />
              // : <UserChart data={chartData} />
            }
          </div>
          : <div>loading</div>}
      <mychart></mychart>

      {/* </div> */}
    </div>
  )

  function changeTimeInterval(val) {
    console.log(val, howLong);
    if (val != howLong) {
      setHowLong(val);
      var multipler = 1;
      switch (val) {
        case 0:
          multipler = -3;
          break;
        case 1:
          multipler = -6;
          break;
        case 2:
          multipler = -12;
          break;
      }
      const keys_temp = Object.keys(data.monthly_sales).slice(multipler);
      console.log(keys_temp);
      const monthly_sales_temp = Object.entries(data.monthly_sales).slice(multipler);
      const monthly_return_temp = Object.entries(data.monthly_return).slice(multipler);
      setChartData({
        labels: keys_temp,
        values: [monthly_sales_temp, monthly_return_temp],
      });
    }

  }
}

export default Products