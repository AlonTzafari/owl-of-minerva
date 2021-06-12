import '../styles/Keyword.scss';

interface keywordProps {
    keyword: keyword;
    remove: Function;
}

function Keyword({keyword, remove}: keywordProps) {
    return (
        <div className="keyword">
            <span>{keyword.word}</span>
            <span>{`${keyword.interval/1000}s`}</span>
            <button onClick={() => remove()}>✖</button>
        </div>
    );
}

export default Keyword;
