import questions from '/question.mock.json'
import pagedQuestions from '/pagedQuestions.mock.json'

global.fetch = jest.fn()
.mockImplementation(url => {
    if (url.includes("/api/questions/1")) {
        return new Promise((resolve, reject) => {
            resolve({ 
                json: function() {
                return questions[0]
            }})
        })
    } else if (url.includes("/api/questions/paged?page=0&count=10")) {
        return new Promise((resolve, reject) => {
            resolve({
                json: function() {
                    return pagedQuestions
                }
            })
        })
    } else if (url.includes("/api/questions")) {
        return new Promise((resolve, reject) => {
            return questions
        })
    }
})