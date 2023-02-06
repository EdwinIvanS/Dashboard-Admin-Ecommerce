import { useEffect, useState } from "react";
import { servicesUpdateUser } from "../services/taskApi";

export const useFetchUpdate = () => {
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
    })
}