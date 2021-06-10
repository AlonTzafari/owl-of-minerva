import {useState, useEffect} from 'react';
import {getPastesBySearch} from '../services/api';
import SearchBar from './SearchBar';
import PasteContainer from './PasteContainer';

function Dashboard() {
    
    const [pastes, setPastes] = useState([] as paste[]);
    const [pastesLoad, setPastesLoad] = useState('success');

    function searchPastes(searchText: string) {
        setPastesLoad('loading');
        getPastesBySearch(searchText)
        .then(pastesData => {
            setPastes(pastesData);
            setPastesLoad('success');
        }).catch(err => {
            setPastesLoad('fail');
        });
    }

    useEffect(() => {
        setPastes([]);
        setPastesLoad('success');
    }, []);

    return (
        <div className="dashboard view">
            <SearchBar search={searchPastes}/>
            <PasteContainer pastes={pastes} loadStatus={pastesLoad}/>
        </div>
    );
}

export default Dashboard;