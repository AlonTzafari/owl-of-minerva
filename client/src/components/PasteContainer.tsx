import Paste from './Paste';
import Loader from './Loader';
import Error from './Error';

interface pasteContainerProps {
    pastes: paste[],
    loadStatus: string
}

function PasteContainer({pastes, loadStatus}: pasteContainerProps) {
    
    return (
        <div>
            {
                loadStatus === 'loading' ? <Loader /> :
                loadStatus === 'fail' ? <Error /> :
                loadStatus === 'success' ? pastes.map(paste => <Paste paste={paste} key={paste._id}/>) :
                null
            }
        </div>
    );
}

export default PasteContainer;
