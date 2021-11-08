import { useEffect } from "react";
export default function useDocumentTitle(text) {
    useEffect(() => {
    document.title = text;
    }, [text]);
    }