import { useEffect, useState } from 'react';
import Header from '../../Compoents/Header/Header';
import {stud_Details} from '../Mockdata/Mockdata';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  /*const stud_Details = [
    { id: 1, Name: 'sangita', Age: 23, Email: 'sangita@gmail.com', mobile: 256362326 },
    { id: 2, Name: 'gauri', Age: 23, Email: 'gauri@gmail.com', mobile: 256362326 },
    { id: 3, Name: 'nikita', Age: 23, Email: 'nikita@gmail.com', mobile: 256362326 },
    { id: 4, Name: 'shweta', Age: 23, Email: 'shweta@gmail.com', mobile: 256362326 },
    { id: 5, Name: 'dipak', Age: 23, Email: 'dipak@gmail.com', mobile: 256362326 },
    { id: 6, Name: 'vaibhav', Age: 23, Email: 'vaibhav@gmail.com', mobile: 256362326 },
  ];*/

  // ✅ Initialize state correctly
  const [studentDetailsState, setStudentDetails] = useState(stud_Details);

  const navigate = useNavigate();
   console.log(studentDetailsState,'studentDetailsState@#####');

      useEffect(()=>{
         console.log('useEffect called');
      },[])
         
         

      const redirect=(id)=>{
        console.log('Id',id);
         localStorage.setItem('stud_Id',id);
          navigate('/Student_Details');
       
      }

     
  return (
    <>
      <Header />

      <h1 className='text-dark bg-danger'>Welcome To Product</h1>

      <div className='container'>
        {studentDetailsState.map((item, index) => (
          <div className='card mt-4' key={index}>
            <div className='card-body'>
              <p><strong>Name:</strong> {item.Name}</p>
              <p><strong>Age:</strong> {item.Age}</p>
              <p><strong>Email:</strong> {item.Email}</p>
              <p><strong>Mobile:</strong> {item.mobile}</p>

              <button className='btn btn-primary' onClick={()=>redirect(item.id)}>view</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
