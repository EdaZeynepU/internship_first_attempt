import { useEffect, useState } from 'react'
import './style.css'
import { useAppSelector } from '@/redux/store';

function Dashboard() {

  const data = useAppSelector((state)=> state.userDataReducer.value.data);
  const isDone = useAppSelector((state)=> state.userDataReducer.value.isDone);
  const [isDoneLocal, setIsDoneLocal] = useState(false)
  const [views_men, setviews_men] = useState([])
  const [views_women, setviews_women] = useState([])
  const [views_under_age, setviews_under_age] = useState([])
  const [all_views_prev_current, setall_views_prev_current] = useState([])


  function getData() {
    setviews_men(data.views.views_men);
    setviews_women(data.views.views_women);
    setviews_under_age(data.views.views_under_age);

    const prev=data.views.views_men[2]+data.views.views_women[2]+data.views.views_under_age[2];
    const current=data.views.views_men[3]+data.views.views_women[3]+data.views.views_under_age[3];
    setall_views_prev_current([prev,current]);

    setIsDoneLocal(true);
  }

  useEffect(() => {
    if (isDone) {
      console.log("inside");
      getData();
    }else{
      console.log("not today");
    }
  }, [isDone])
  
  


  return (

    <div className='flex grow justify-center bg-gray-100'>
    {
       isDoneLocal > 0 ?
        <div className="flex grow w-full m-y-[25px] flex-wrap">
          <section className='flex grow justify-around flex-wrap h-fit'>
          <div className="dashboard-element max-w-sm:w-[60vw] sm:w-[30vw] lg:w-[18vw]">
            <div className='flex justify-around items-center mt-4'>
              <img src="../icons/eye_icon.png" alt="eye" className='dashboard-icon' />
            <div>
                <img src={`${all_views_prev_current[0]>all_views_prev_current[1]? "../icons/decrease.png":"../icons/increase.png"}`} className='dashboard-icon ' alt="chart" />
            <p className='text-xs'>{((all_views_prev_current[1]-all_views_prev_current[0])/(all_views_prev_current[0]/100)).toFixed(2)}% </p>
                
            </div>
          
            </div>
            <div className='flex justify-center flex-col items-center grow'>
              <p className='text-lg font-semibold mx-auto mt-2'>Total views</p>
              <span className='my-2'>{all_views_prev_current[1]}</span>
            
            </div>
            
          </div>

          <div className="dashboard-element max-w-sm:w-[60vw] sm:w-[30vw] lg:w-[18vw]">
            <div className='flex justify-around items-center mt-4'>
              <img src="../icons/men.png" alt="eye" className='dashboard-icon' />
            <div>
              <img src={`${views_men[2]>views_men[3]? "../icons/decrease.png":"../icons/increase.png"}`} className='dashboard-icon ' alt="chart" />
              <p className='text-xs'>{((views_men[3]-views_men[2])/(views_men[2]/100)).toFixed(2)}% </p>

              </div>
            </div>
            <div className='flex justify-center flex-col items-center grow'>
              <p className='text-lg font-semibold mx-auto mt-2'>Men views</p>
              <span className='my-2'>{views_men[3]}</span>
            
            </div>
            
          </div>

          <div className="dashboard-element max-w-sm:w-[60vw] sm:w-[30vw] lg:w-[18vw]">
            <div className='flex justify-around items-center mt-4'>
              <img src="../icons/women.png" alt="eye" className='dashboard-icon' />
            <div>
            <img src={`${views_women[2]>views_women[3]? "../icons/decrease.png":"../icons/increase.png"}`} className='dashboard-icon ' alt="chart" />
            <p className='text-xs'>{((views_women[3]-views_women[2])/(views_women[2]/100)).toFixed(2)}% </p>
            </div>
            </div >
            <div className='flex justify-center flex-col items-center grow'>
              <p className='text-lg font-semibold mx-auto mt-2'>Women views</p>
              <p className='my-2 '>{views_women[3]}</p> 
            </div>
          </div>

          <div className="dashboard-element max-w-sm:w-[60vw] sm:w-[30vw] lg:w-[18vw]">
            <div className='flex justify-around items-center mt-4'>
              <img src="../icons/baby.png" alt="eye" className='dashboard-icon' />
            <div>
            <img src={`${views_under_age[2]>views_under_age[3]? "../icons/decrease.png":"../icons/increase.png"}`} className='dashboard-icon ' alt="chart" />
            <p className='text-xs'>{((views_under_age[3]-views_under_age[2])/(views_under_age[2]/100)).toFixed(2)}% </p>
            
            </div>
            </div>
            <div className='flex justify-center flex-col items-center grow'>
              <p className='text-lg font-semibold mx-auto mt-2'>Under 18 views</p>
              <span className='my-2'>{views_under_age[3]}</span>
            </div>
          </div>
          </section>
        {/* first section is over with views*/}
          <section className='h-fit'>
          <div className="dashboard-element max-w-sm:w-[60vw] sm:w-[30vw] lg:w-[18vw]">
            <div className='flex justify-around items-center mt-4'>
              <img src="../icons/baby.png" alt="eye" className='dashboard-icon' />
            <div>
            <img src={`${views_under_age[2]>views_under_age[3]? "../icons/decrease.png":"../icons/increase.png"}`} className='dashboard-icon ' alt="chart" />
            <p className='text-xs'>{((views_under_age[3]-views_under_age[2])/(views_under_age[2]/100)).toFixed(2)}% </p>
            
            </div>
            </div>
            <div className='flex justify-center flex-col items-center grow'>
              <p className='text-lg font-semibold mx-auto mt-2'>Under 18 views</p>
              <span className='my-2'>{views_under_age[3]}</span>
            </div>
          </div>
          </section>

    </div>
      : <div>Loading</div>
     
  } </div>
  )
}

export default Dashboard