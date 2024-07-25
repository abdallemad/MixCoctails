import { Form, redirect,useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
  
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
  
    toast.success('log in successful')
    return redirect('/');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg)
    return redirect('/newsletter')
  }
};

export default function Newsletter (){
  const navigation = useNavigation()
  const isSubmitting = navigation.state == 'submitting' ? true: false;
  return (
    <Form className="form" method="post" >
      <h4 style={{textAlign:'center',marginBottom:'2rem'}}>Our News Letter</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
          type="text" 
          className="form-input" 
          name="name" 
          id="name" 
          required
          defaultValue={'john'}/>
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">last Name</label>
        <input 
          type="text" 
          className="form-input" 
          name="lastName" 
          id="lastName"
          required 
          defaultValue={'smith'}/>
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">Name</label>
        <input type="email" 
          className="form-input" 
          name="email" 
          id="email" 
          required
          defaultValue={'test@test.com'}/>
      </div>
      <button disabled={isSubmitting} className="btn btn-block" type="submit" style={{marginTop:'0.5rem'}}>{
        isSubmitting ? 'submitting':'submit'
    }</button>
    </Form>
  )
}