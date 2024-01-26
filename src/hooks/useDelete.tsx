import { useMutation } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import Cookies from 'js-cookie'


const API = "http://localhost:8081/api/users"

const getusername = Cookies.get("_auth_state")?.match(/"name":"([^"]+)"/);

const username = getusername ? getusername[1] : null;


const Delete = async (): AxiosPromise<any> => {
    return axios.delete(API + "/delete/" + username )
}

export function useDelete() {
    const mutate = useMutation({
        mutationFn: Delete,
        retry: 1
    })

    return mutate
} 
