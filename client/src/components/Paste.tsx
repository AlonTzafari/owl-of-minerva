interface pasteProps {
    paste: paste
}

function Paste({paste}: pasteProps) {
    return (
        <div>
            <h3>{paste.title}</h3>
            <p>{paste.content}</p>
            <em>{`create by ${paste.author} at ${new Date(paste.date).toUTCString()}`}</em>
        </div>
    );
}

export default Paste;
