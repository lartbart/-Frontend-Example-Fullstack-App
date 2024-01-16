import axios, { AxiosPromise } from "axios";
import { useMutation } from "@tanstack/react-query";

const API_URL = "https://disturbed-fact-production.up.railway.app/api/users"


const SignUp = async (data: UserRegister): AxiosPromise<any> => {
    return axios.post(API_URL + "/register", data)
}




export function useSignUp() {
    const mutate = useMutation({
        mutationFn: SignUp,
        retry: 2,
        onSuccess: () => {
         window.location.href = '/login';
        }

    }) 

    return mutate
}
