// import React, { useState } from "react";
// import Logs from "./Logs";

// const Controllers = ({ formData }) => {
//   const [logs, setLogs] = useState(""); // Logs for displaying backend responses or errors

//   const handleStartProcess = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/api/startProcess", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setLogs(`Success: ${JSON.stringify(result)}`);
//       } else {
//         setLogs("Failed to send data to the backend.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setLogs("An error occurred while communicating with the backend.");
//     }
//   };

//   const handleStopProcess = () => {
//     setLogs("Process stopped.");
//   };

//   return (
//     <div>
//       <div className="button-group">
//         <button type="button" onClick={handleStartProcess} className="button start">
//           Start Process
//         </button>
//         <button type="button" onClick={handleStopProcess} className="button stop">
//           Stop Process
//         </button>
//       </div>
//       <Logs logs={logs} />
//     </div>
//   );
// };

// export default Controllers;
