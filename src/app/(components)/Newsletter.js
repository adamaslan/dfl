// // components/Newsletter.js
// import React from "react";
// // import useSubscription from "../utils/useSubscription";

// // const FORM_URL = `https://app.convertkit.com/forms/3690183/subscriptions`;

// export default function Newsletter() {
// //   const {
// //     email,
// //     name,
// //     status,
// //     handleSubmit,
// //     handleEmailChange,
// //     handleNameChange,
// //   } = useSubscription("", FORM_URL);

//   return (
//     <div>
//       {status === "SUCCESS" && (
//         <>
//           <p>
//             Welcome aboard{name ? `, ${name}` : ""}{" "}
//             <span role="img" aria-label="Ship">
//               🚢
//             </span>
//           </p>
//           <p>Please check your inbox to confirm the subscription!</p>
//         </>
//       )}
//       {status === "ERROR" && (
//         <>
//           <p>Oops, something went wrong...</p>
//           <p>
//             Please, <button onClick={() => setStatus(null)}>try again.</button>
//           </p>
//         </>
//       )}
//       {status === null && (
//         <form onSubmit={handleSubmit}>
//           <input
//             aria-label="Your first name"
//             name="fields[name]"
//             placeholder="Your name"
//             type="text"
//             onChange={handleNameChange}
//             value={name}
//           />
//           <input
//             aria-label="Your email address"
//             name="email_address"
//             placeholder="Your email address"
//             required
//             type="email"
//             onChange={handleEmailChange}
//             value={email}
//           />
//           <button>SUBSCRIBE</button>
//         </form>
//       )}
//     </div>
//   );
// }


export default function Newsletter (){
  return (
    <div>    
      <p> email us at drinksfoodlife@gmail.com</p>
    </div>
  )
}