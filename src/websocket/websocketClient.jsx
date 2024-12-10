const socket = new WebSocket("ws://localhost:8080/ws");

socket.onopen = () => {
    console.log("WebSocket connection established");
};

socket.onmessage = (event) => {
    console.log("Message received from server:", event.data);
};

socket.onclose = () => {
    console.log("WebSocket connection closed");
};

socket.onerror = (error) => {
    console.error("WebSocket error:", error);
};

export const sendMessage = (message) => {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(message);
    } else {
        console.error("WebSocket is not open.");
    }
};
