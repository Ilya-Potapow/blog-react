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

    static async getPostById(id) {
        const response = await (await axios.get('https://jsonplaceholder.typicode.com/posts/' + id))
        return response
    }
    static async getCommById(id) {
        const response = await (await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`))
        return response
    }
    // static async getImages() {
    //     const API_KEY = 'xE8ukhjofnzIL5s92u5TLD65IXW3Z8SKD_PnmtpQvp8'
    //     const response = await (await axios.get(`https://picsum.photos/200`))
    //     return response
    // }

}

