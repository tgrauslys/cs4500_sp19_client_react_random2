import providers from '../data/providers.mock.json'
import mockUser from '../data/provider.mock'
import FAQAnswers from "../data/faqanswers.mock";

global.fetch = jest.fn()
    .mockImplementation(url => {
        if (url.includes("/api/users/filtered?username=&zipcode=")) {
            return new Promise((resolve, reject) => {
                resolve({ 
                    json: function() {
                    return providers
                }})
            })
        } else if (url.includes("/api/users/filtered?username=1&zipcode=02115")) {
            return new Promise((resolve, reject) => {
                resolve({ 
                    json: function() {
                    return [providers[0]]
                }})
            })
        } else if (url.includes("/api/users/1")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function() {
                        return mockUser
                    }})
            })
        }
        else if (url.includes("/api/users")) {
            return new Promise((resolve, reject) => {
                return mockUser
            })
        }
    })
