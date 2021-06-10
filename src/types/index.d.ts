interface paste {
    title: string;
    author: string;
    content: string;
    date: Date;
};

interface keyword {
    word: string;
    interval: number;
    _id: string;
};

interface alert {
    keyword: string;
    date: Date;
    pastes: string[];
    seen: boolean;
};