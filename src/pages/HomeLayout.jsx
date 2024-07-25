import { Outlet,useNavigation } from "react-router-dom";
import NavBar from "../components/Navbar";
export default function HomeLayout (){
  const navigation = useNavigation()
  const isPageLoading = navigation.state ==='loading'? true:false;
  return<>
    <div>
      <NavBar />
      <section className="page">
        {
          isPageLoading?
          <div className="loading"></div>:
          <Outlet context={{value:'some value'}} />
        }
      </section>
    </div>
  </>
}