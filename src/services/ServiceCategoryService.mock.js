import React from 'react'
import category from '../data/category.mock'
import categories from "../data/categories.mock";
import pagedCategories from "../data/pagedCategories.mock"

global.fetch = jest.fn()
    .mockImplementation(url => {
        if (url.includes("/api/categories/2652")) {
            return new Promise((resolve, reject) => {
                resolve({
                            json: function () {
                                return category
                            }
                        })
            })
        }
        else if (url.includes("/api/categories")) {
            return new Promise((resolve, reject) => {
                resolve({
                            json: function () {
                                return categories
                            }
                        })
            })
        }
        else if (url.includes("paged?page=0&count=2")) {
            return new Promise((resolve, reject) => {
                resolve({
                            json: function () {
                                return pagedCategories[0]
                            }
                        })
            })
        } else if (url.includes("paged?page=1&count=2")) {
            return new Promise((resolve, reject) => {
                resolve({
                            json: function () {
                                return pagedCategories[1]
                            }
                        })
            })
        } else {
            return new Promise((resolve, reject) => {
                resolve({
                            json: function () {
                                return "@@@@@@@@ERROR: " + url;
                            }
                        })
            })
        }
    });