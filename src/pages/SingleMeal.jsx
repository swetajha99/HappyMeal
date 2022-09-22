import React from 'react';

import Loading from '../components/Loading';
import {useParams, Link} from 'react-router-dom';
import '../App.css'
const url =   `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`

const SingleMeal = () => {
    const {id} = useParams();
    const [loading,setLoading] = React.useState(false);
    const [meal,setMeal] = React.useState(null);

    React.useEffect(()=>{
        setLoading(true);
        async function getMeal(){
            try{
                const response = await fetch(`${url}${id}`);
                const data = await response.json();
              if(data.meals){
                const {strMeal:name,strCategory:category, strInstructions:instructions,strMealThumb:image,strYoutube:turorial,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6,
                strIngredient7,
                strIngredient8,
                strIngredient9
                } = data.meals[0];
                const ingredients= [
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                    strIngredient6,
                    strIngredient7,
                    strIngredient8,
                    strIngredient9
                ]
                const newMeal = {
                    name, image, category, instructions,turorial,ingredients,
                }
                setMeal(newMeal)
              }else{
                
                setMeal(null);
              }
              setLoading(false);
            }catch(error){
                console.log(error);
                setLoading(false);
            }
        }
        getMeal();
    },[id])
    if(loading){
        return <Loading />
    }
    if(!meal){
        return <h2 className='section-title'>no meal to display</h2>
    }
    const { name, image, category, instructions,turorial,ingredients} = meal;
    return (
        <section section meal-section>
        <Link to='/' className = 'btn btn-primary'>Back Home</Link>
        <h2 className = 'section-title'>{name}</h2>
        <div className='food'>
        <img src={image} alt={name} />
        <div className='food-info'>
            <p>
            <span className='food-data'>category : {category}</span>
            </p>
            <p>
            <span className='food-data'><p>instructions :</p> {instructions}</span>
            </p>
            <p>
            <span className='food-data'><p>Ingredients : </p>{ingredients.map((item,index)=> {
                return item?<span key={index}>{item}</span>:null
            })}</span>
            </p>
            <p>
            <span className='food-data'></span>
            </p>
        </div>
        </div>
        </section>
    )
}
export default SingleMeal