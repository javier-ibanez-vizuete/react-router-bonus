import { useSearchParams } from "react-router-dom"

export const AboutPage = () => {
    const [queryParams] = useSearchParams();
    console.log("queryParams", queryParams);
    const queryParamsObj = Object.fromEntries([...queryParams]);
    console.log("queryParamsObj", queryParamsObj);
    

    return <h1>About Page</h1>
} 