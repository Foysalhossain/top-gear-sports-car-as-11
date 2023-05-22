import { useEffect } from "react";

function usePath(title) {
    useEffect(() => {
        document.title = `${title}-TOP GEAR`
    }, [title])
}

export default usePath;