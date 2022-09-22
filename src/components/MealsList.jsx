import React from 'react'
import Meals from './Meals';
import Loading from './Loading';
import { useGlobalContext } from '../context';
import '../App.css'
function MealsList() {
  const {meals, loading} = useGlobalContext();
  console.log(meals);
  if(loading){
    return <Loading />
  }
  if(meals.length<1){
    return <h2 className='section-title'>Sorry!! no matches</h2>
  }
  return (
    <section className='section'>
      <h2 className='section-title'>
      Meals</h2>
      <div className='meals-center'>
      {meals.map((item)=>{
        return <Meals key={item.id} {...item} />
      })}
      </div>
      </section>
  )
}

export default MealsList;
