import mockUser from '../data/provider.mock'
import FAQAnswers from "../data/faqanswers.mock";

global.fetch = jest.fn()
    .mockImplementation(url => {
        if (url.includes("/api/users/1")) {
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
    });