import React, { useState } from "react";
import { sendMessage } from "../websocket/websocketClient";

const WebSocketComponent = () => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        sendMessage(message);
        setMessage("");
    };

    return (
        <div>
            <h1>WebSocket Communication</h1>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
            />
            <button onClick={handleSendMessage}>Send Message</button>
        </div>
    );
};

export default WebSocketComponent;
