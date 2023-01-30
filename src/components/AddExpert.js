// import React from "react";
// import { useForm } from "react-hook-form";



// const AddExpert = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);
//   console.log(errors);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         type="text"
//         placeholder="Name"
//         {...register("Name", { required: true, maxLength: 80 })}
//       />
//       <input
//         type="tel"
//         placeholder="Gender"
//         {...register("Gender", { required: true, maxLength: 100 })}
//       />
//       <input
//         type="text"
//         placeholder="Father's Name"
//         {...register("Father's Name", {
//           required: true,
//           pattern: /^\S+@\S+$/i,
//         })}
//       />
//       <select {...register("Gender", { required: true })}>
//         <option value="Male">Male</option>
//         <option value=" female"> female</option>
//         <option value=" Others"> Others</option>
//       </select>
//       <input
//         type="text"
//         placeholder="Age"
//         {...register("Age", { required: true })}
//       />
//       <input
//         type="datetime"
//         placeholder="Experience Since"
//         {...register("Experience Since", { required: true })}
//       />
//       <input
//         type="email"
//         placeholder="Email Id"
//         {...register("Email Id", { required: true })}
//       />
//       <select {...register("Reporting Type", { required: true })}>
//         <option value="Crime">Crime</option>
//         <option value="Civil">Civil</option>
//         <option value="Politics">Politics</option>
//       </select>
//       <select {...register("News Paper Name", { required: true })}>
//         <option value="Crime">Crime</option>
//         <option value="Civil">Civil</option>
//         <option value="Politics">Politics</option>
//       </select>
//       <select {...register("Languages", { required: true })}>
//         <option value="Hindi">Hindi</option>
//         <option value="English">English</option>
//         <option value="Bengali">Bengali</option>
//       </select>
//       <select {...register("Specialization", { required: true })}>
//         <option value="Crime">Crime</option>
//         <option value="Civil">Civil</option>
//         <option value="Politics">Politics</option>
//       </select>
//       <input type="checkbox" placeholder="RNI" {...register("RNI", {})} />
//       <input
//         type="text"
//         placeholder="RNI Registration Number"
//         {...register("RNI Registration Number", {})}
//       />
//       <input
//         type="text"
//         placeholder="Current Reporting Area"
//         {...register("Current Reporting Area", { required: true })}
//       />
//       <input
//         type="number"
//         placeholder="Aadhar No"
//         {...register("Aadhar No", { required: true })}
//       />
//       <input
//         type="text"
//         placeholder="Upload Aadhar card"
//         {...register("Upload Aadhar card", { required: true })}
//       />
//       <input
//         type="text"
//         placeholder="Pancard No"
//         {...register("Pancard No", { required: true })}
//       />
//       <input
//         type="text"
//         placeholder="Upload Pancard"
//         {...register("Upload Pancard", { required: true })}
//       />
//       <input
//         type="text"
//         placeholder="Bank Holder Name"
//         {...register("Bank Holder Name", { required: true })}
//       />
//       <input
//         type="number"
//         placeholder="Account No"
//         {...register("Account No", { required: true })}
//       />
//       <input
//         type="text"
//         placeholder="IFSC Code"
//         {...register("IFSC Code", { required: true })}
//       />
//       <input
//         type="number"
//         placeholder="Conference Charge"
//         {...register("Conference Charge", { required: true })}
//       />
//       <select {...register("Reporting History", { required: true })}>
//         <option value="Daily News Paper">Daily News Paper</option>
//         <option value="  Monthly Paper"> Monthly Paper</option>
//       </select>
//       <input
//         type="text"
//         placeholder="Additional Documents"
//         {...register("Additional Documents", { required: true })}
//       />
//       <input
//         type="text"
//         placeholder="Permanent Address"
//         {...register("Permanent Address", { required: true })}
//       />
//       <input
//         type="text"
//         placeholder="Current Address"
//         {...register("Current Address", { required: true })}
//       />

//       <input type="submit" />
//     </form>
//   );
// };
// export default AddExpert;


import React from 'react';
import { useForm } from 'react-hook-form';

export default function AddExpert() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input {...register("Developer", { required: true })} type="radio" value="Yes" />
      <input {...register("Developer", { required: true })} type="radio" value="No" />

      <input type="submit" />
    </form>
  );
}