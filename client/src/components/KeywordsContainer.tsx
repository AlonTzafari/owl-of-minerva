import {useState, useEffect, useRef, FormEventHandler, RefObject} from 'react';
import {getAllKeywords, postKeyword} from '../services/api';
import Keyword from './Keyword';

function KeywordsContainer() {

    const [keywords, setKeywords] = useState([] as keyword[]);
    const wordRef = useRef() as RefObject<HTMLInputElement>; 
    const intervalRef = useRef() as RefObject<HTMLInputElement>;

    useEffect(() => {
        loadKeywords();
    }, [])

    function loadKeywords() {
        getAllKeywords()
        .then(setKeywords);
    }

    function addKeyword(keyword: keyword) {
        postKeyword(keyword)
        .then(loadKeywords)
    }

    const keywordSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
        const word = wordRef.current?.value as string;
        const intervalStr = intervalRef.current?.value as string;
        const interval = Number(intervalStr);
        const keyword: keyword = {word, interval};
        if (keyword && interval) addKeyword(keyword); 
        e.preventDefault();
    } 

    return (
        <div>
            {keywords.map( (keyword, i) => <Keyword key={i} keyword={keyword} remove={()=>{}} /> )}
            <form onSubmit={keywordSubmitHandler}>
                <input ref={wordRef} type="text" placeholder="keyword" required/>
                <input ref={intervalRef} type="number" placeholder="interval seconds" required/>
                <button type="submit">add</button>
            </form>
        </div>
    );
}

export default KeywordsContainer;
