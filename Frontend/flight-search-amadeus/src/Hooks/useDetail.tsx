import { useContext } from "react";
import DetailsContext from "../Context/DetailsContext";

const useDetail = () => {
    return useContext(DetailsContext);;
}
 
export default useDetail;