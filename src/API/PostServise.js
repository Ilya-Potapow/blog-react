import axios from "axios";

export class postRequest {
    static async getPosts() {
        try {
            const response = await (await axios.get('https://jsonplaceholder.typicode.com/posts')).data
            return response
        } catch (error) {
            console.log(error);
        }
    }

}

