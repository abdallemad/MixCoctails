import { useRouteError } from "react-router-dom"

export default function  SinglePageError(){
  const error = useRouteError();
  console.log(error);
  return (
    <h2>there is an Error</h2>
  )
}
