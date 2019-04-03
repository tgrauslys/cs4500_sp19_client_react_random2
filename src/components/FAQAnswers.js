import React from 'react'
import {Link} from "react-router-dom";
import "react-pagination-library/build/css/index.css";


const FAQAnswers =
    ({faqAnswers, faqAnswer, totalPages, currentPage, selectFAQAnswer, updateAnswer, updateQuestion, createFaqAnswer, updateFaqAnswer, deleteFAQAnswer, setPage, optionValues, itemCount}) => {
        const isFirstPage = currentPage === 0;
        const isLastPage = currentPage >= totalPages - 1;

        let previousButton = <button onClick={(e) => setPage(e, currentPage - 1)}
                                     style={{margin: '2px'}}
            // &#60; displays "<"
                                     type="button" className="btn btn-secondary">&#60;</button>
        let previousPageButton = <button onClick={(e) => setPage(e, currentPage - 1)}
                                         style={{margin: '2px'}}
                                         type="button" className="btn btn-primary">{currentPage}</button>
        let nextButton = <button onClick={(e) => setPage(e, currentPage + 1)}
                                 style={{margin: '2px'}}
            // &#62; displays ">"
                                 type="button" className="btn btn-secondary">&#62;</button>
        let nextPageButton = <button onClick={(e) => setPage(e, currentPage + 1)}
                                     style={{margin: '2px'}}
                                     type="button" className="btn btn-primary">{currentPage + 2}</button>

        if (isFirstPage) {
            previousButton = ''
            previousPageButton = ''
        }
        if (isLastPage) {
            nextButton = ''
            nextPageButton = ''
        }

        return (
            <div>
                <h3> FAQ Answers {faqAnswers.length}</h3>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>
                            <input
                                className="question-fld"
                                onChange={e => updateQuestion(e)}
                                value={faqAnswer.question}></input>
                            <input
                                className="answer-fld"
                                onChange={e => updateAnswer(e)}
                                value={faqAnswer.answer}></input>
                            <a role="button"
                               className="btn btn-primary btn-lg active"
                               onClick={createFaqAnswer}>+</a>
                            <a role="button"
                               className="btn btn-primary btn-lg active"
                               onClick={updateFaqAnswer}>Update</a>
                        </td>
                    </tr>
                    {
                        faqAnswers.map(faqAnswer =>
                            <tr key={faqAnswer.id}>
                                <td>{faqAnswer.question}</td>
                                <td>
                                    <Link to={`/admin/faq-answers/${faqAnswer.id}`}>
                                        {faqAnswer.answer}
                                    </Link>
                                </td>
                                <td>
                                    <a class="btn btn-danger btn-lg active" role="button" aria-pressed="true"
                                       onClick={() =>
                                           deleteFAQAnswer(faqAnswer.id)}
                                    >X</a>

                                    <button className="select-faq-answer-btn"
                                            onClick={() => selectFAQAnswer(faqAnswer.id)}>
                                        Select
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                    <tr>
                    <td>
                        <select value={itemCount} onChange={e => setPage(e)}>
                            {
                                optionValues.map(possibleItemCounts =>
                                    <option key={possibleItemCounts} value={possibleItemCounts}>{possibleItemCounts}</option>)
                            }
                        </select>
                        {previousButton}
                        {previousPageButton}
                        <button
                            style={{margin: '2px'}}
                            type="button" className="btn btn-primary" disabled>{currentPage + 1}</button>
                        {nextPageButton}
                        {nextButton}
                    </td>
                    </tr>
                    </tbody>
                </table>
            </div>)
    }


export default FAQAnswers