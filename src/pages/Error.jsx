import Wrapper from '../assets/wrappers/ErrorPage'
import { Link,useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'

export default function Error (){
  const error = useRouteError()
  console.log(error);
  if(error.status === 404) return <Wrapper>
    <div>
      <img src={img} alt="" />
      <h3>Ooh!!</h3>
      <p>we seem to con't find the page that you'r looking for</p>
      <Link to='/'>Back Home</Link>
    </div>
  </Wrapper>
  return <Wrapper>
    <div>
      <h3>some thing go wrong</h3>
    </div>
  </Wrapper>
}