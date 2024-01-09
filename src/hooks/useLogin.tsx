import axios, { AxiosPromise } from "axios";
import { useMutation } from "@tanstack/react-query";
import useSignIn from "react-auth-kit/hooks/useSignIn";

const API_URL = "https://disturbed-fact-production.up.railway.app/api/users"

const login = async (data: UserLogin):AxiosPromise<string> => {
    return axios.post(API_URL + "/login", data)
}

export function useLogin() {
    const signIn = useSignIn();
    const mutate = useMutation({
        mutationFn: login,
        retry: 2,
        onSuccess(data) {
            window.location.href = '/homepage'
            signIn({
                auth: {
                    token: data.data,
                    type: 'Bearer'
                }
            })
        },
        onError() {

        }
    })

    return mutate;

}



