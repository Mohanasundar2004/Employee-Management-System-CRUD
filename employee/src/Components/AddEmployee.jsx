
import React ,{useEffect, useState}from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../Services/EmployeeService';
import { useNavigate,useParams } from 'react-router-dom';

function AddEmployee() {
    const [firstName,setfirstName]=useState('');
    const[lastName,setlastName]=useState('');
    const [email,setemail]=useState('');
    const {id}=useParams();
    const[errors,seterrors]=useState({
      firstName:'',
      lastName:'',
      email:''
    });

      useEffect(()=>{
        if(id){
          getEmployee(id).then(res=>{
            setfirstName(res.data.firstName);
            setlastName(res.data.lastName);
            setemail(res.data.email);
          }).catch(err=>{
            console.log(err.message);
          })
        }
      },[id]);
    const nav=useNavigate();

    function saveOrupdatebutton(e){
      e.preventDefault();
      if(validateform()){
        const employee={firstName:firstName,lastName:lastName,email:email};

        if(id){
          updateEmployee(id,employee).then(res=>{
            console.log(res.data);
            nav('/employee');
          }).catch(err=>console.log(err.message));
        }
        else{
          createEmployee(employee).then((res)=>{
          console.log(res.data); 
          nav("/employee"); 
          }).catch(err=>console.log(err));
        }
      
      }   
    }

    function validateform(){
      let valid=true;
      const errorcopy={...errors};
      if(firstName.trim()){
        errorcopy.firstName='';
      }
      else{
        errorcopy.firstName='First Name is required';
        valid=false;
      }
      if(lastName.trim()){
        errorcopy.lastName='';
      }
      else{
        errorcopy.lastName='Last Name is required';
        valid=false;
      }
      if(email.trim()){
        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          errorcopy.email='';
        } else {
          errorcopy.email='Please enter a valid email';
          valid=false;
        }
      }
      else{
        errorcopy.email='Email is required';
        valid=false;
      }
      seterrors(errorcopy);
      return valid;
    }

    function pageTitle(){
      if(id){
        return <h2 className='text-center'><i className="bi bi-pencil-square me-2"></i>Update Employee</h2>;
      }
      else{
        return <h2 className='text-center'><i className="bi bi-person-plus me-2"></i>Add Employee</h2>
      }
    }
  return (
    <div>
      <div className='container'>
        <br/><br/>
        <div className='row'>
          <div className='card col-md-6 offset-md-3'>
            {
              pageTitle()
            }
            <div className='card-body'>
              <form>
                <div className='form-group mb-2'>
                  <label className='form-label'>First Name :</label>
                  <input 
                    type='text' 
                    placeholder='Enter your First Name' 
                    name='firstName' 
                    value={firstName} 
                    className={`form-control ${errors.firstName ? 'is-invalid':''}` }
                    onChange={(e)=>setfirstName(e.target.value)}>
                  </input>
                  {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>Last Name :</label>
                  <input 
                    type='text' 
                    placeholder='Enter your Last Name' 
                    name='lastName' 
                    value={lastName} 
                    className={`form-control ${errors.lastName ? 'is-invalid':''}` } 
                    onChange={(e)=>setlastName(e.target.value)}>
                  </input>
                  {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>Email :</label>
                  <input 
                    type="email" 
                    placeholder='Enter your Email' 
                    name='email' 
                    value={email} 
                    className={`form-control ${errors.email ? 'is-invalid':''}` } 
                    onChange={(e)=>setemail(e.target.value)}>
                  </input>
                  {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                </div>
                <div className='d-flex justify-content-between'>
                  <button 
                    type="button"
                    className='btn btn-secondary'
                    onClick={() => nav('/employee')}
                  >
                    <i className="bi bi-arrow-left me-1"></i>Back
                  </button>
                  <button 
                    className='btn btn-success'  
                    onClick={saveOrupdatebutton}
                  >
                    {id ? (
                      <>
                        <i className="bi bi-check-lg me-1"></i>Update
                      </>
                    ) : (
                      <>
                        <i className="bi bi-save me-1"></i>Submit
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployee