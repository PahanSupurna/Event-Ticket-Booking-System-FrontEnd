// import React, { useState } from "react";
// import "../App.css";

// const ParameterInput = () => {
//   const [formData, setFormData] = useState({
//     totalTickets: "",
//     ticketReleaseRate: "",
//     customerRetrievalRate: "",
//     maxTicketCapacity: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="container">
//       <div className="form-card">
//         <h2>Create Configuration</h2>
//         <form>
//           <div className="form-group">
//             <label>Total Tickets</label>
//             <input
//               type="text"
//               name="totalTickets"
//               value={formData.totalTickets}
//               onChange={handleInputChange}
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label>Ticket Release Rate</label>
//             <input
//               type="text"
//               name="ticketReleaseRate"
//               value={formData.ticketReleaseRate}
//               onChange={handleInputChange}
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label>Customer Retrieval Rate</label>
//             <input
//               type="text"
//               name="customerRetrievalRate"
//               value={formData.customerRetrievalRate}
//               onChange={handleInputChange}
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label>Max Ticket Capacity</label>
//             <input
//               type="text"
//               name="maxTicketCapacity"
//               value={formData.maxTicketCapacity}
//               onChange={handleInputChange}
//               className="form-input"
//             />
//           </div>
//         </form>

//         {/* Pass the form data to the ProcessHandler component */}
//         <ProcessHandler formData={formData} />
//       </div>
//     </div>
//   );
// };

// export default ParameterInput;
