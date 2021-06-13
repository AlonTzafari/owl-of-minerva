interface paste {
    title: string;
    author: string;
    content: string;
    date: Date;
    _id: string;
};

interface keyword {
    word: string;
    interval: number;
    _id?: string;
};

interface alert {
    keyword: string;
    date: Date;
    pastes: string[];
    seen: boolean;
    _id: string;
};

interface verboseAlert {
    keyword: string;
    date: Date;
    pastes: paste[];
    seen: boolean;
    _id: string;
};