import providers from '../data/providers.mock.json'

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
        }
    })