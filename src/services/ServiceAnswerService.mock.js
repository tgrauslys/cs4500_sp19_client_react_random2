import answers from '../data/answers.mock.json'
import pagedAnswers from '../data/pagedAnswers.mock.json'

global.fetch = jest.fn()
    .mockImplementation(url => {
        if (url.includes("/api/answers/1")) {
            return new Promise((resolve, reject) => {
                resolve({ 
                    json: function() {
                    return answers[0]
                }})
            })
        } else if (url.includes("/api/answers/paged?page=0&count=10")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function() {
                        return pagedAnswers[0]
                    }
                })
            })
        } else if (url.includes("/api/answers/paged?page=1&count=10")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function() {
                        return pagedAnswers[1]
                    }
                })
            })
        } else if (url.includes("/api/answers")) {
            return new Promise((resolve, reject) => {
                return answers
            })
        }
    })