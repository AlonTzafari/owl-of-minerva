import '../styles/AlertsContainer.scss';
import {useState, useEffect} from 'react';
import {getAllAlerts} from '../services/api';
import Loader from './Loader';
import Alert from './Alert';

function AlertsContainer() {
    const [alerts, setAlerts] = useState([] as verboseAlert[])
    const [alertsLoad, setAlertsLoad] = useState('loading')
    
    useEffect(updateAlerts, []);

    function updateAlerts() {
        setAlertsLoad('loading');
        getAllAlerts()
        .then(alerts => {
            setAlerts(alerts);
            setAlertsLoad('success');
        }).catch(err => setAlertsLoad('fail'));
    }
    
    return (
        <div className="alertsContainer">
            {
                alertsLoad === 'loading' ? <Loader /> :
                alertsLoad === 'fail' ? <h2>Failed to load alerts</h2> :
                alertsLoad === 'success' ? alerts.map(alert => <Alert key={alert._id} alert={alert} />) :
                null
            }
        </div>
    );
}

export default AlertsContainer;
