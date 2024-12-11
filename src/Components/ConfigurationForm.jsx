import React from "react";
import axios from "axios";

const ConfigurationForm = ({ config, updateConfig }) => {
  const handleChange = (field) => (e) => {
    const value = e.target.value;
    updateConfig(field, value ? Math.max(0, Number(value)) : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send data to the backend via POST request
    axios
      .post("http://localhost:3001/config/update", config)  // Replace with the correct endpoint
      .then((response) => {
        console.log("Configuration updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating configuration:", error);
      });
  };
  <h1>Real-Time Event Ticketing System</h1>

  return (
    <form className="configuration-form" onSubmit={handleSubmit}>
      <label>
        Total Tickets
        <input
          type="number"
          value={config.totalTickets}
          onChange={handleChange("totalTickets")}
          placeholder="Please enter the inputs here..."
        />
      </label>
      <label>
        Ticket Release Rate
        <input
          type="number"
          value={config.ticketReleaseRate}
          onChange={handleChange("ticketReleaseRate")}
          placeholder="Please enter the inputs here..."
        />
      </label>
      <label>
        Customer Retrieval Rate
        <input
          type="number"
          value={config.customerRetrievalRate}
          onChange={handleChange("customerRetrievalRate")}
          placeholder="Please enter the inputs here..."
        />
      </label>
      <label>
        Maximum Ticket Count
        <input
          type="number"
          value={config.maxTicketCount}
          onChange={handleChange("maxTicketCount")}
          placeholder="Please enter the inputs here..."
        />
      </label>
      <div class = "configButton">
        <button type="submit">Save Configuration</button>
      </div>
    </form>
  );
};

export default ConfigurationForm;