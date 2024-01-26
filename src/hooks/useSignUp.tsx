import axios, { AxiosPromise } from "axios";
import { useMutation } from "@tanstack/react-query";

const API_URL = "https://garrulous-glass-production.up.railway.app/api/users"



const SignUp = async (data: UserRegister): AxiosPromise<any> => {
    return axios.post(API_URL + "/register", data)
}




export function useSignUp() {
    const mutate = useMutation({
        mutationFn: SignUp,
        onSuccess: () => {
         window.location.href = '/login';
        },
    }) 

    return mutate
}
