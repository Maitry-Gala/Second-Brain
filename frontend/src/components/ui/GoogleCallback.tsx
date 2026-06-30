import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router"

export function GoogleCallback(){
    const navigate = useNavigate();
    const [params] = useSearchParams();

    useEffect(() => {
        const token  = params.get("token");
        if(token) {
            localStorage.setItem("token", token);
            navigate("/dashboard");
        } else {
            navigate("/auth");
        }
    }, []);

    return<div className="flex items-center justify-center min-h-screen text-gray-400 text-sm">Signing you in...</div>;
}