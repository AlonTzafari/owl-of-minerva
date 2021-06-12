import { useState } from 'react';
import '../styles/Paste.scss';

interface pasteProps {
    paste: paste
}

function Paste({paste}: pasteProps) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="paste">
            <div className="pasteHeader">
                <span className="title">{paste.title}</span>
                <button onClick={() => {setExpanded(!expanded)}}>{expanded ? '≙' : '≪'}</button>
            </div>
            <p className={`content ${expanded ? 'expanded' : null}`}>{paste.content}</p>
            <span className="details">{`create by ${paste.author} at ${new Date(paste.date).toUTCString()}`}</span>
        </div>
    );
}

export default Paste;
