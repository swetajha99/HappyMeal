import React from 'react'
import { useGlobalContext} from '../context';
function SearchForm() {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = React.useRef('');
  const searchMeal = () =>{
    setSearchTerm(searchValue.current.value);
  }

  React.useEffect(() =>{
    searchValue.current.focus();
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
   <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>Search your favourite meal</label>
            <input type="text" id="name" ref={searchValue} onChange={searchMeal} />
          </div>
      </form>
   </section>
  )
}

export default SearchForm
