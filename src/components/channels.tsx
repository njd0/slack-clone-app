import React, {useState, useEffect} from "react";

const Channels = () => {
    const [channels, setChannels] = useState(['general', 'random']);

    return (
        <React.Fragment>
            <h3>Channels</h3>
            {channels.map((channel) => {
                return (
                    <div key={channel}>{channel}</div>
                );
            })}
        </React.Fragment>
    );
};

export default Channels;