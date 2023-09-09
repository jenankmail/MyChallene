import React, { useState } from 'react';
import style from './UserForm.module.css';
import ErrorModal from './ErrorModal';
import SubmissionStatusModal from './SubmissionStatusModal';
function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    check:false,
    salary:'',
  });

  const [errors, setErrors] = useState({});
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); 
  const [isSubmissionStatusModalOpen, setIsSubmissionStatusModalOpen] = useState(
    false
  );
  const [isSubmissionSuccess, setIsSubmissionSuccess] = useState(false); 

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim() === ''||/\d/.test(formData.name)) {
      newErrors.name = 'Name is required & not contain number';
    }

    if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if ( formData.age <= 18||formData.age>=65 ) {
      newErrors.age = 'Age must be between 18 and 65';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setIsErrorModalOpen(true);
    }

    return Object.keys(newErrors).length === 0;
  
  };

 
  const isSubmitButtonDisabled = () => {
    return (
      formData.name === '' ||
      formData.phone===''||
      formData.age <= 0 ||formData.salary===''
    );
   
  };

  //const isSubmitButtonDisabled =formData.name===''||formData.phone===''||formData.age==='';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate a form submission (you can replace this with your actual API call)
      simulateFormSubmission()
        .then(() => {
          setIsSubmissionSuccess(true); // Set submission success
          console.log(formData);
        })
        .catch(() => {
          setIsSubmissionSuccess(false); // Set submission failure
          //console.log(formData);
        })
        .finally(() => {
          setIsSubmissionStatusModalOpen(true); // Open submission status modal
        });
    }
  };
  const simulateFormSubmission = () => {
    return new Promise((resolve, reject) => {
      // Simulate a successful submission
      setTimeout(resolve, 2000); // Change this delay as needed
      // Simulate a failed submission
      // setTimeout(reject, 2000);
    });
  };
  

  const isValidPhone = (phone) => {
    // Basic phone number validation using regex
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  };

  return (
    <div className={style.contianer}>
      
      <form onSubmit={handleSubmit} className={style.formstyle}>
        <div>
        <h1>Requesting a Loan</h1>
      <hr></hr>
          <label htmlFor="name">Full Name:</label><br/>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phone">Phone Number:</label><br/>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label><br/>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
npm         </div>
        <br/>
        <div>
        Are you employee?
           <input type="checkbox" checked={formData.check} onChange={(event)=>{
            setFormData({...formData,check:event.target.checked});
           }}/>
           <br/>
        </div>
         <div>
         <br/>
         <label>Salary:</label>
            <br/>
            <select value={formData.salary} onChange={(event)=>{
               setFormData({...formData,salary:event.target.value});
            }}>
              <option>less than 500 $</option>
              <option>Between 500 and 2000 $</option>
              <option> above than 2000 $</option>

            </select>
            <br/>
         </div>
         <button type="submit" disabled={isSubmitButtonDisabled()}>
          Submit
        </button>
      </form>
      <ErrorModal
        isOpen={isErrorModalOpen}
        onRequestClose={() => setIsErrorModalOpen(false)}
        errors={Object.values(errors)}
      />
       <SubmissionStatusModal
        isOpen={isSubmissionStatusModalOpen}
        onRequestClose={() => setIsSubmissionStatusModalOpen(false)}
        isSuccess={isSubmissionSuccess}
        
      />
    </div>
  );
}

export default UserForm;
