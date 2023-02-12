import axios from "axios";

export class postRequest {
    static async getPosts(limit = 10, page = 1) {
        const response = await (await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page,
            }
        }))
        return response
    }

}

