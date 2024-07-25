import { useLoaderData } from "react-router-dom"
import axios from 'axios';
import {useQuery} from '@tanstack/react-query'
import CockTailList from "../components/CockTailList";
import SearchForm from "../components/SearchForm";
const cocktailSearchUrl ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const searchQuery = (searchTerm)=>{
  return {
    queryKey:['drinks',searchTerm || 'all'],
    queryFn:async()=> await axios.get(`${cocktailSearchUrl}${searchTerm}`).then(res=>res.data?.drinks)
  }
}
export const loader =
(queryClient)=> async({request})=>{
  const url = new URL(request.url);
  const search = url.searchParams.get('search')
  const searchTerm = search || '';
  await queryClient.ensureQueryData(searchQuery(searchTerm));
  return {searchTerm}
}

export default function Landing (){
  const {searchTerm} = useLoaderData();
  const {data:drinks} =  useQuery(searchQuery(searchTerm))
  console.log(drinks);
  // console.log(drinks);
  return <>
  <SearchForm searchTerm = {searchTerm}/>
  <CockTailList drinks={drinks} />
  </>
}