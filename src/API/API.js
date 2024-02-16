import AxiosInstance from "./AxiosProvider/AxiosProvider";


export const API = {

    //Login Api ...
    async Login(params) {
        try {
            let response = await AxiosInstance.post(
                "/users/login", {
                ...params
            })
            return response.data
        }
        catch (error) {
            return error.response.data
        }
    },


    //Signup Api ...

    async Signup(params) {
        try {
            let response = await AxiosInstance.post(
                "/users/signup", {
                ...params
            })
            return response.data
        }
        catch (error) {
            return error.response.data
        }

    },


    //Function of post pxa
    async FunctionPost(params, url) {
        try {
            let response = await AxiosInstance.post(
                url, {
                ...params
            })
            return response.data
        }
        catch (error) {
            return error.response.data
        }
    }


}


