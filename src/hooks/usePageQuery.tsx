import {useSearchParams} from "react-router-dom";

const UsePageQuery= () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const page = query.get('page')



    return (
       <div></div>
    )
};

export {UsePageQuery};