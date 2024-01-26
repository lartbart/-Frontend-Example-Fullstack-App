import { useMutation } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import Cookies from 'js-cookie'


const API_URL = "https://garrulous-glass-production.up.railway.app/api/users"

const getusername = Cookies.get("_auth_state")?.match(/"name":"([^"]+)"/);

const username = getusername ? getusername[1] : null;


const Update = async (data: UserUpdate): AxiosPromise<any> => {
    return axios.patch(API_URL + "/update/" + username, data )
}

export function useUpdate() {
    const mutate = useMutation({
        mutationFn: Update,
    })

    return mutate
} 
