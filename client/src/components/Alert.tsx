interface AlertProps {
    alert: verboseAlert;
    // setAlertSeen: Function;
}

function Alert({alert}: AlertProps) {
    return (
        <div className={`alert ${alert.seen ? 'seen': null}`}>
            <h2>{`Found ${alert.pastes.length} pastes for word ${alert.keyword}`}</h2>
            <div>{alert.pastes.map(paste => <h3>{paste.title}</h3>)}</div>
            <em>{(new Date(alert.date)).toUTCString()}</em>
        </div>
    );
}

export default Alert;
