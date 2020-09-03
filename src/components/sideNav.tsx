import React, {useState, useEffect} from 'react';
import Channels from './channels';
const MessageBoard = () => {
    return (
        <div className="workspace-nav-content-wrapper">
            <div className="header">
                <div>
                    <h2>Workspace Name</h2> 
                </div>
            </div>
            <div className="workspace-nav-content">
                <Channels />
            </div>
        </div>
    );
};

export default MessageBoard;