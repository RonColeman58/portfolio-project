import React from 'react'

const Contacts = () => {
  return (
    <div className="contacts">
     <div className="text-center">
      <h1>contact me</h1>
      <p>Please tell me know about your show and I will contact you as 
      soon as possible.</p>
     </div>
      <div className="container">
       <div className="row">
        <div className="col-md-6 col-xs-12">
         {/* NAME INPUT */}
         <input 
           type="text"
           className="form-control"
           placeholder="Name"
           name="name"
         />
         {/* PHONE  INPUT */}
         <input 
           type="text"
           className="form-control"
           placeholder="Phone Number"
           phone="phone"
         />
         {/* EMAIL  INPUT */}
         <input 
           type="email"
           className="form-control"
           placeholder="Email"
           email="email"
         />
         {/* SUBJECT  INPUT */}
         <input 
           type="text"
           className="form-control"
           placeholder="Subject"
           subject="subject"
         />
        </div>
         <div className="col-md-6 col-xs-12">
          {/* DESCRIPTION  INPUT */}
         <textarea 
           className="form-control"
           placeholder="Description"
           description="description"
         />
         <button className="btn-main-offer center-btn" type="submit">contact me</button>

         </div>
       </div>       
      </div>
    </div>
  )
}

export default Contacts















///////////////////////////////// Resource Copy /////////////////////////////////////

// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import {useForm}  from "react-hook-form";

// const Contacts = () => {
//   const [successMessage, setSuccessMessage] = useState("");
//   const { register, handleSubmit, errors } = useForm();

//   const serviceID = "service_ID";
//   const templateID = "template_ID";
//   const userID = "user_RXtQk9xbkcuxeI8Wr9FD4";

//   const onSubmit = (data, r) => {
//     sendEmail(
//       serviceID,
//       templateID,
//       {
//         name: data.name,
//         phone: data.phone,
//         email: data.email,
//         subject: data.subject,
//         description: data.description
//       },
//       userID
//     )
//     r.target.reset();
//   }

//   const sendEmail = (serviceID, templateID, variables, userID) => {
//     emailjs.send(serviceID, templateID, variables, userID)
//       .then(() => {
//         setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
//       }).catch(err => console.error(`Something went wrong ${err}`));
//   }

//   return (
//     <div className="contacts">
//       <div className="text-center">
//         <h1>contact me</h1>
//         <p>Please fill out the form and describe you project needs and I'll contact you as soon as possible.</p>
//         <span className="success-message">{successMessage}</span>
//       </div>
//       <div className="container">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="row">
//             <div className="col-md-6 col-xs-12">
//               {/* NAME INPUT */}
//               <div className="text-center">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Name"
//                   name="name"
//                   {...register({
//                       required: "Please enter your name",
//                       maxLength: {
//                         value: 20,
//                         message: "Please enter a name with fewer than 20 characters"
//                       }
//                     })
//                   }
//                 />
//                 <div className="line"></div>
//               </div>
//               <span className="error-message">
//                 {errors.name && errors.name.message}
//               </span>
//               {/* PHONE INPUT */}
//               <div className="text-center">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Phone Number"
//                   name="phone"
//                   ref={
//                     register({
//                       required: "Please add your phone number",
//                     })
//                   }
//                 />
//                 <div className="line"></div>
//               </div>
//               <span className="error-message">
//                 {errors.phone && errors.phone.message}
//               </span>
//               {/* EMAIL INPUT */}
//               <div className="text-center">
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Email"
//                   name="email"
//                   ref={
//                     register({
//                       required: "Please provide you email",
//                       pattern: {
//                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                         message: "invalid Email"
//                       }
//                     })
//                   }
//                 />
//                 <div className="line"></div>
//               </div>
//               <span className="error-message">
//                 {errors.email && errors.email.message}
//               </span>
//               {/* SUBJECT INPUT */}
//               <div className="text-center">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Subject"
//                   name="subject"
//                   ref={
//                     register({
//                       required: "OOPS, you forget to add the subject.",
//                     })
//                   }
//                 />
//                 <div className="line"></div>
//               </div>
//               <span className="error-message">
//                 {errors.subject && errors.subject.message}
//               </span>
//             </div>
//             <div className="col-md-6 col-xs-12">
//               {/* DESCRIPTION */}
//               <div className="text-center">
//                 <textarea
//                   type="text"
//                   className="form-control"
//                   placeholder="Please describe shortly you project..."
//                   name="description"
//                   ref={
//                     register({
//                       required: "Please describe shortly your project needs...",
//                     })
//                   }
//                 ></textarea>
//                 <div className="line"></div>
//               </div>
//               <span className="error-message">
//                 {errors.description && errors.description.message}
//               </span>
//               <button className="btn-main-offer contact-btn" type="submit">contact me</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Contacts;

///////////////////////////////Original///////////////////////////////////


// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import { useForm } from "react-hook-form";

// const Contacts = () => {
//   const [successMessage, setSuccessMessage] = useState("");
//   const { register, handleSubmit, errors } = useForm(); 

//   const serviceID = "service_ID";
//   const templateID = "template_ID";
//   const userID = "user_FaX4yqQXiWfj8ZfmVxho1";

//   const onSubmit = (data, r) => {
//     sendEmail(
//       serviceID, 
//       templateID,
//       {
//        name: data.name,
//        phone: data.phone,
//        email: data.email,
//        suject: data.subject,
//        description: data.description
//       },
//         userID
//       )
//       r.target.reset();
//   }

//   const sendEmail = (serviceID, templateID, variables, userID) => {
//     emailjs.send(serviceID, templateID, variables, userID)
//       .then(() => {
//         setSuccessMessage("Form sent successfully! I will contact you as soon as possible");
//       }).catch(err => console.error(`Something went weong ${err}`));
//   }


// return (
//     <div className="contacts">
//       <div className="text-center">
//         <h1>contact me</h1>
//         <p>Please fill out the form and leave a description 
//         of you program needs</p>
//         {/* <span className="success-message">{successMessage}</span> */}
//       </div>
//       <div className="container">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="row">
//           <div className="col-md-6 col-xs-12">
//             {/* Name Input */}
//             <div className="text-center">
//           <input 
//               type="text"
//               className="form-control"
//               placeholder="Name"
//               name="name"
//               ref={
//                   register({
//                   required: "Please enter your name",
//                   maxLength: {
//                     value: 20,
//                     message: "Please enter less than 20 characters"
//                   }
//                 })
//               }
//           />
//           <div className="line"></div>
//             </div>
//             <span className="error-message">
//               {errors.name && errors.name.message}
//             </span>
//             {/* Phone Number */}
//             <div className="text-center">
//           <input 
//               type="text"
//               className="form-control"
//               placeholder="Phone Number"
//               name="phone"
//           />
//           <div className="line"></div>
//               </div>
//             {/* Email Address */}
//             <div className="text-center">
//           <input 
//               type="text"
//               className="form-control"
//               placeholder="Email"
//               name="email"
//           />
//           <div className="line"></div>
//             </div>
//             {/* Subject */}
//             <div className="text-center">
//           <input
//               type="text" 
//               className="form-control"
//               placeholder="Subject"
//               name="subject"
//           />
//           <div className="line"></div>
//             </div>
//           </div>
//           <div className="col-md-6 col-xs-12">
//             {/* Description Area */}
//             <div className="text-center">
//             <textarea 
//               type="text"
//               className="form-control"
//               placeholder="Please leave a short description of your show"
//               name="description"
//             ></textarea>
//             <div className="line"></div>
//             </div>
//             <button className="btn-main-offer contacts-btn" type="submit">contact me</button>
//           </div>
//         </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Contacts;
