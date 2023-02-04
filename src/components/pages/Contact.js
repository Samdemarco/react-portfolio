import React, { useState } from 'react';
import "../styles/Contact.css";



export default function Contact()  {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });



  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    
  };

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      message: ""
    };

    if (!formData.name) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === "");
  };


  const handleSubmit = event => {
       event.preventDefault();
       if (validate()) {
        // Submit the form data
      }
   
  };

  return (
  <div className="contact"> 

    <form onSubmit={handleSubmit}>
      <div>  
      <h1>Contact Me!</h1>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={validate}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={validate}
        />
        {errors.email && <p className="error">{errors.email}</p>}

      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          onBlur={validate}
        />
         {errors.message && <p className="error">{errors.message}</p>}
      </div>
      <button type="submit">Submit</button>
      
     
    </form>

   </div> 
  );
};

