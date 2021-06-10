import {useState, useEffect, useRef, FormEventHandler, RefObject} from 'react';
import {getAllKeywords, postKeyword, removeKeyword} from '../services/api';
import Keyword from './Keyword';

function KeywordsContainer() {

    const [keywords, setKeywords] = useState([] as keyword[]);
    const [inputError, setInputError] = useState(null as string | null);
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
        const isKeywordExists = keywords.some(keywordFromState => keywordFromState.word === keyword.word);
        if (isKeywordExists) {
            const errMsg = `Can't set more than one keyword for same word`;
            setInputError(errMsg);
            setInterval(()=>{setInputError(null)}, 5000);
            return Promise.reject({type: 'input', message: errMsg});
        }
        return postKeyword(keyword)
        .then(loadKeywords)
    }

    function removeKeywordHandler(word: string) {
        removeKeyword(word)
        .then(loadKeywords);
    }

    const keywordSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
        const word = wordRef.current?.value as string;
        const intervalStr = intervalRef.current?.value as string;
        const interval = Number(intervalStr) * 1000;
        const keyword: keyword = {word, interval};
        if (keyword && interval) {
            addKeyword(keyword)
            .then(() => {
                if(wordRef.current && intervalRef.current) {
                    wordRef.current.value = '';
                    intervalRef.current.value = '';
                }
            }).catch(err => {
                if (err?.type === 'input') {
                    setInputError(err.message);
                    setInterval(()=>{setInputError(null)}, 5000);
                }
            }); 
        }
        e.preventDefault();
    } 

    return (
        <div>
            {keywords.map( (keyword, i) => <Keyword key={i} keyword={keyword} remove={() => removeKeywordHandler(keyword.word)} /> )}
            <form onSubmit={keywordSubmitHandler}>
                <input ref={wordRef} type="text" placeholder="keyword" required/>
                <input ref={intervalRef} type="number" placeholder="interval seconds" required/>
                <button type="submit">add</button>
            </form>
            {inputError ? <em>{inputError}</em> : null}
        </div>
    );
}

export default KeywordsContainer;
