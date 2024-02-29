import React, {FC, PropsWithChildren, useEffect, useState} from "react";
import {ISearch} from "../../interfaces/searchInterface";
import {searchService} from "../../services/SearchService";
import {Search} from "./Search";

interface IProps extends PropsWithChildren {
    keyWord:string
}

const SearchContainer: FC<IProps> = ({keyWord}) => {

    const [keyWords, setkeyWords] = useState<ISearch>({page:null, results: []})
    useEffect(() => {
        searchService.getAllByKeyWord(keyWord).then(({data}) => setkeyWords(data))
    }, [keyWord]);

    const words = keyWords.results

    return (
        <div>
            {words.map(word => <Search key={word.id} word={word}/>)}
        </div>
    );
};

export {SearchContainer};