import {useState, useEffect} from 'react';
import {getAllPastes} from '../services/api';
import SearchBar from './SearchBar';
import PasteContainer from './PasteContainer';

function Dashboard() {
    const emptyPasteArray:paste[] = []; 
    const [pastes, setPastes] = useState(emptyPasteArray);
    const [pastesLoad, setPastesLoad] = useState('success');

    useEffect(() => {
        setPastesLoad('loading');
        getAllPastes()
        .then(pastesData => {
            setPastes(pastesData);
            setPastesLoad('success');
        }).catch(err => {
            setPastesLoad('fail');
        });
    }, []);

    return (
        <div className="dashboard">
            <SearchBar />
            <PasteContainer pastes={pastes} loadStatus={pastesLoad}/>
        </div>
    );
}

export default Dashboard;