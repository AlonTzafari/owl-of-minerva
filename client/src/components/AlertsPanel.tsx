import KeywordsContainer from './KeywordsContainer';
import AlertsContainer from './AlertsContainer';

function AlertsPanel() {
    return (
        <div className="alertsPanel view">
            <KeywordsContainer />
            <AlertsContainer />
        </div>
    );
}

export default AlertsPanel;
