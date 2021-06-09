import {useState} from 'react';
import Keyword from './Keyword';

function KeywordsContainer() {
    const emptyKeywordsArray: keyword[] = [];
    const [keywords, setKeywords] = useState(emptyKeywordsArray);

    return (
        <div>
            {keywords.map((keyword, i) => <Keyword key={i} keyword={keyword} remove={()=>{}}/>)}
            <input type="text" placeholder="keyword" />
            <input type="number" placeholder="interval seconds" />
            <button>add</button>
        </div>
    );
}

export default KeywordsContainer;
