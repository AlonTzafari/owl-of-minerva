type paste = {
    title: string,
    author: string,
    content: string,
    date: Date
};

type extraction = {
    name: string,
    selector: string,
    attribute: string
};

type extractionMap = extraction[];