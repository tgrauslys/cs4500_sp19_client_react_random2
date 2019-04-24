import mockUser from '../data/provider.mock'
import registry from '../data/register.mock'
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
                return [
                    mockUser,
                    ...registry.alreadyRegistered
                ]
            })
        }
        else if (url.includes("/api/profile")) {
           return new Promise((resolve, reject) => {
               resolve({
                   json: function() {
                       return registry.validInput
                   }
               })
           }) 
        }
        else if (url.includes("/api/register")) {
                return new Promise((resolve, reject) => {
                    resolve({
                        json: function() {
                            return registry.validInput
                        }
                    })
                })
        }
        else if (url.includes("api/login")) {
                return new Promise((resolve, reject) => {
                    resolve({
                        json: function() {
                            return registry.validInput
                        }
                    })
                })
        }
        else if (url.includes("/api/logout")) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function() {
                        return registry.validInput
                    }
                })
            })
        }
    });