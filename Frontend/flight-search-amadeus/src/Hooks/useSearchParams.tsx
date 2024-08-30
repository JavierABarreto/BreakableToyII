import { useContext } from "react";
import SearchParamsContext from "../Context/SearchContext";

const useSearchParams = () => {
    return useContext(SearchParamsContext);;
}

export default useSearchParams;
