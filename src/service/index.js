import axios from "axios"

class JWZRequest{
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL: baseURL,
            timeout: timeout
        })
    }


    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(response => {
                if (response.status === 200) {
                    if (response.data) {
                        resolve(response.data)
                    }
                    resolve(response)
                }

            }).catch(error => {
                reject(error)
            })
        })
    }


    get(config) {
        return this.request({ ...config, method: 'GET' })
    }


    post(config) {
        return this.request({ ...config, method: 'POST' })
    }
}

export default JWZRequest