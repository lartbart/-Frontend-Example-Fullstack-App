import axios, { AxiosPromise } from "axios";
import { useMutation } from "@tanstack/react-query";
import useSignIn from "react-auth-kit/hooks/useSignIn";

const API_URL = "https://garrulous-glass-production.up.railway.app/api/users/"


const login = async (data: UserLogin):AxiosPromise<string> => {
    return axios.post(API_URL + "/login", data)
}

export function useLogin() {
    const signIn = useSignIn();
    const mutate = useMutation({
        mutationFn: login,
        onSuccess(data, variables) {
            window.location.href = '/homepage'
            signIn({
                auth: {
                    token: data.data,
                    type: 'Bearer'
                },
                userState: {name: variables.username}
            })
        },
        onError() {

        }
    })

    return mutate;

}



