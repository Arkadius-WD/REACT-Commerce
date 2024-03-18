import { redirect } from "react-router-dom";
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api";


export function mainPageLoader({params}) {
    const backendPath = PATH_TO_ENDPOINT_MAPPING[params.gender];
    
    if (backendPath) {
        return fetch(`${BACK_END_URL}${backendPath}`);
    } else {
        return redirect("/kobieta");
    }
}
