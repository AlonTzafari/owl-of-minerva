interface keywordProps {
    keyword: keyword;
    remove: Function;
}

function Keyword({keyword, remove}: keywordProps) {
    return (
        <div>
            <span>{keyword.word}</span>
            <span>{`${keyword.interval/1000}s`}</span>
            <button onClick={() => remove()}>remove</button>
        </div>
    );
}

export default Keyword;
