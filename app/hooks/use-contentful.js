import { useState, useEffect } from "react";

const NEXT_PUBLIC_SPACE_ID = process.env.NEXT_PUBLIC_SPACE_ID;
const NEXT_PUBLIC_TOKEN = process.env.NEXT_PUBLIC_TOKEN;

function useContentful(query) {
    let [dataTasks, setDataTasks] = useState(null);
    let [errors, setErrors] = useState(null);
    useEffect(() => {
        window.fetch(`https://graphql.contentful.com/content/v1/spaces/${NEXT_PUBLIC_SPACE_ID}/environments/master`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${NEXT_PUBLIC_TOKEN}`
            },
            body: JSON.stringify({ query })
        }).then(response => response.json())
            .then(({data, errors}) => {
                if(data) setDataTasks(data)
                if(errors) setErrors(errors)
            })
        .catch((error) => setErrors([error]));
    }, [query]);

    return { dataTasks, errors }
}

export default useContentful