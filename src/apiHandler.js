import ENV from "./env";
import axios from "axios";

const responseFormatter = (status, data, error) => {
    return { status, data, error };
}

export const postApiReq = async (url, data) => {
    const route_url = ENV.API_URL + url;

    return await axios.post(route_url, data, {
        headers: {
            Acceept: "application/json"
        }

    })
}

export const getApiReq = async (url) => {
    const route_url = ENV.API_URL + url;

    return await axios.get(route_url,
        {
            headers: {
                Acceept: "application/json"
            }
        })

}
export const putApiReq = async (url, data) => {
    const route_url = ENV.API_URL + url;

    return await axios.put(
        route_url, data,
        {
            headers: {
                Acceept: "application/json"
            }
        }
    )
}
export const deleteApiReq = async (url, data) => {
    const route_url = ENV.API_URL + url;

    return await axios.delete(
        route_url, data,
        {
            headers: {
                Acceept: "application/json"
            }
        }
    )
}
