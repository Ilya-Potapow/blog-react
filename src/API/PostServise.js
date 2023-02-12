import axios from "axios";

export class postRequest {
    static async getPosts() {
        const response = await (await axios.get('https://jsonplaceholder.typicode.com/posts')).data
        return response

    }

}

