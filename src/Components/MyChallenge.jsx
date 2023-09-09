import React, { useState } from 'react'

function MyChallenge() {
  const [FormInput,SetFormInput]=useState({
      name:"",
      phone_number:'',
      age:'',
      salary:'',
      check:false,
      nameErorr:"",
      ageErorr:"",
      phoneErorr:"", 
  });
  const nameValid = (e) => {
    if(/\d/.test(e)){
      SetFormInput({...FormInput,nameErorr:"Name cannot contain numbers"});
        }else{
          SetFormInput({...FormInput,nameErorr:""});    }
  
  };
 //const phoneValid=(inputphone)=>{
  //const newphone=parseInt(inputphone,10);
  //if(/^\d{10}$/.test(newphone)){
    //SetFormInput({...FormInput,phoneErorr:""})
  //}
  //else{
  //  SetFormInput({...FormInput,phoneErorr:"error in phone"})
  //}
// }
  //const phoneValid = (inputPhone) => {
    //if (/^\d{10}$/.test(inputPhone)) {
      //SetFormInput({...FormInput,phoneErorr:""});
      //return true;
    //} else {
      //SetFormInput({...FormInput,phoneErorr:"Age must be between 18 and 65"});
     
      //return false;
    //}
  //};
  
  
  const ageValid = (inputAge) => {
    const ageValue = parseInt(inputAge, 10);
    if (!isNaN(ageValue) && ageValue >= 18 && ageValue <= 65) {
      SetFormInput({...FormInput,ageErorr:""});
      return true;
    } else {
      SetFormInput({...FormInput,ageErorr:"Age must be between 18 and 65"});
     
      return false;
    }
  };
 const handelsubmit=(event)=>{
  event.preventDefault();
 const isnameValid= nameValid(FormInput.name);
 //const isphoneValid= phoneValid(FormInput.phone_number);
 const isageValid= ageValid(FormInput.age);
 if (isageValid && isnameValid) {
  // Inputs are valid; you can proceed with your logic here.
  // For example, you can submit the form or perform other actions.
} else {
  // Inputs are invalid; you can handle this as needed.
}
 }
  return (
    <div>
        <form onSubmit={handelsubmit} >
            <label>Name:</label>
            <br/>
            <input value={FormInput.name} onChange={(event)=>{
                SetFormInput({...FormInput,name:event.target.value})
            }}></input>
            <span className='error'>{FormInput.nameErorr}</span>
            <br/>
            <label>Phone Number:</label>
            <br/>
            <input type="tel" value={FormInput.phone_number} onChange={(event)=>{
              SetFormInput({...FormInput,phone_number:event.target.value})
            }}/>
            <span className='error'>{FormInput.phoneErorr}</span>
            <br/>
            <label>Age:</label>
            <br/>
            <input value={FormInput.age} onChange={(event)=>{
              SetFormInput({...FormInput,age:event.target.value})
            }}></input>
            <span className='error'>{FormInput.ageErorr}</span>
            <br/>
           Are you employee?
           <input type="checkbox" checked={FormInput.check} onChange={(event)=>{
            SetFormInput({...FormInput,check:event.target.checked})
           }}/>
           <br/>
            <label>Salary:</label>
            <br/>
            <select value={FormInput.salary} onChange={(event)=>{
               SetFormInput({...FormInput,salary:event.target.value})
            }}>
              <option>less than 500 $</option>
              <option>Between 500 and 2000 $</option>
              <option> above than 2000 $</option>

            </select>
            <br/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default MyChallenge