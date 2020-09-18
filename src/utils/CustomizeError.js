import { toast } from 'react-toastify';
const myNewToastId = 'myId';
const toastId = null;
const NETWORK_ERROR = `NETWORK ERROR..! This site can’t be reached`;


export const customizeError = (error) => {
    console.log("Api error found \n", error.response)
    return error.response === undefined ? toast.update(toastId, toast(NETWORK_ERROR, {
        toastId: myNewToastId,
        type: 'error'
    })) : error.response.data
}

