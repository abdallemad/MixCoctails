import Wrapper from '../assets/wrappers/CocktailCard'
import { Link, useLoaderData, useOutletContext } from 'react-router-dom'

export default function  CocktailCard({item}){
  const data = useOutletContext();
  const {id,name,image,info,glass} = item
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt="" className='img' />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn'>Details</Link>
      </div>
    </Wrapper>
  )
}