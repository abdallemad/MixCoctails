import Wrapper from '../assets/wrappers/CocktailList'
import CocktailCard from './CocktailCard'
const CockTailList = ({drinks}) => {
  // console.log(drinks)
  if(!drinks){
    return <h4 style={{textAlign:'center'}}>No drinks match.....</h4>
  }
  const formateDrinks = drinks.map(item=>{
    const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = item;
    return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}
  })
  // console.log(formateDrinks)
  return (
    <Wrapper>
      {formateDrinks.map(item=>{
        return <CocktailCard item = {item} />
      })}
    </Wrapper>
  )
}

export default CockTailList
