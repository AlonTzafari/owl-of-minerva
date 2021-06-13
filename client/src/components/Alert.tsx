import '../styles/Alert.scss';

interface AlertProps {
    alert: verboseAlert;
    // setAlertSeen: Function;
}

function Alert({alert}: AlertProps) {
    return (
        <div className={`alert ${alert.seen ? 'seen': null}`}>
            <div className="alertHeader">
                <span className="title">{`Found ${alert.pastes.length} pastes for word ${alert.keyword}`}</span>
            </div>
            <div className="content">
                {alert.pastes.map(paste => <span className="pasteTitle" key={paste._id}>{paste.title}</span>)}
            </div>
            <span className="details">{new Date(alert.date).toUTCString()}</span>
        </div>
    );
}

export default Alert;
