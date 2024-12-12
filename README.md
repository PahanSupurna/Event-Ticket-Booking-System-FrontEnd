--Real-Time Event Ticketing System-- 
  Introduction 
    -The Real-Time Event Ticketing System is a web application built using React for the 
    frontend and Spring Boot for the backend. The system simulates a real-time ticket 
    booking process where vendors add tickets to a pool and customers purchase tickets from 
    the pool. The application ensures that the number of tickets in the system does not exceed 
    a specified capacity and that all tickets are sold in a controlled manner. The frontend 
    provides a user interface for configuring the system, starting and stopping the simulation, 
    and viewing the system log. 
 
  Setup Instructions 
    Prerequisites 
      • Java: Ensure you have Java Development Kit (JDK) 11 or higher installed. 
      • Node.js: Ensure you have Node.js (v14 or higher) installed. 
      • Spring Boot: The backend is built using Spring Boot. 
      • MySQL: A MySQL database is required for storing ticket, vendor, and customer data. 
      • IDE: An Integrated Development Environment (IDE) like IntelliJ IDEA or Eclipse is 
  
  recommended for development and debugging. 
    • Build Tools: Maven for the backend and npm for the frontend. 
  
  How to Configure and Start the System 
    1. Open the Application: 
      • Open your web browser and navigate to http://localhost:3000. 
    2. Configuration Form: 
      • Total Tickets: Enter the total number of tickets available for sale. 
      • Ticket Release Rate: Enter the rate at which vendors release tickets (in minutes). 
      • Customer Retrieval Rate: Enter the rate at which customers retrieve tickets (in minutes). 
      • Maximum Ticket Count: Enter the maximum number of tickets that can be  stored in the system at any given time. 
      • Save Configuration: Click the "Save Configuration" button to save the  configuration. 
    3. Controls: 
    • Start Process: Click the "Start Process" button to start the simulation. 
    • Stop Process: Click the "Stop Process" button to stop the simulation. 
 
  Explanation of UI Controls 
    Configuration Form: 
      • Total Tickets: The total number of tickets available for sale. 
      • Ticket Release Rate: The rate at which vendors release tickets (in minutes). 
      • Customer Retrieval Rate: The rate at which customers retrieve tickets (in minutes). 
      • Maximum Ticket Count: The maximum number of tickets that can be stored in the system at any given time. 
      • Save Configuration: Saves the configuration to the backend. 
    Controls: 
      • Start Process: Starts the simulation. 
      • Stop Process: Stops the simulation. 
    System Log: 
      • System Log: Displays a log of all the activities in the system, including when tickets are added and purchased. 
      • Output Box: Displays the current output or status of the system. 
