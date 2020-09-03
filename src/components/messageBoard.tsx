import React, {useState, useEffect} from 'react';

const MessageBoard = () => {
    const [messages, setMessages] = useState<string[]>([]);

    const _handleKeyDown = (e : any) => {
        if (e.key === 'Enter') {
            sendMessage(e.target.value);
        }
    }

    const sendMessage = (message : string) => {
        if (!message || !message.length) return;

        setMessages((currentMessages) => {
            return [...currentMessages, message];
        });
    }

    return (
        <div className="message-board-content-wrapper">
            <div className="header message-board-header">
                <div>
                    <h2>#Chat Name</h2> 
                </div>
                <div>
                    <div>Viewers</div>
                </div>
            </div>
            <div className="message-board-content">
                <div className="message-board">
                    {
                        messages.map((message) => <p>{message}</p>)
                    }
                </div>
                <div className="message-input">
                    <input onKeyDown={_handleKeyDown} />
                </div>
            </div>
        </div>
    );
};

export default MessageBoard;