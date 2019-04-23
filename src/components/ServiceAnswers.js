import React from 'react'
import './ServiceAnswers.css'

const ServiceAnswers = ({
                            serviceAnswers, 
                            optionValues, 
                            currentPage,
                            itemCount,
                            first,
                            last,
                            setPage,
                            handleRedirect}) => {
    let previousButton = <button onClick= {async (e) => await setPage(e, currentPage - 1)}
                            style={{margin: '2px'}}
                            // &#60; displays "<"
                            type="button" className="btn btn-secondary previous-btn">&#60;</button>
    let previousPageButton = <button onClick= {async (e) => await setPage(e, currentPage - 1)}
                                style={{margin: '2px'}}
                                type="button" className="btn btn-primary previous-page-btn">{currentPage}</button>
    let nextButton = <button onClick= {async (e) => await setPage(e, currentPage + 1)}
                            style={{margin: '2px'}}
                            // &#62; displays ">"
                            type="button" className="btn btn-secondary next-btn">&#62;</button>
    let nextPageButton = <button onClick= {async (e) => await setPage(e, currentPage + 1)}
                                style={{margin: '2px'}}
                                type="button" className="btn btn-primary next-page-btn">{currentPage + 2}</button>

    if (first) {
        previousButton = ''
        previousPageButton = ''
    } 
    if (last) {
        nextButton = ''
        nextPageButton = ''
    }

    return(
        <div>
            <h3>Service Answers</h3>
            <table className="table">
                <tbody>
                {
                    serviceAnswers
                        .map(serviceAnswer =>
                            <tr className="answer-row" key={serviceAnswer.id}>
                                <td>
                                    <body className="hyperlink"onClick={() => handleRedirect(serviceAnswer.id)}>
                                        {
                                            (serviceAnswer.trueFalseAnswer != null &&
                                            <label>{serviceAnswer.trueFalseAnswer}</label>) ||
                                            (serviceAnswer.minRangeAnswer != null &&
                                            <label>{serviceAnswer.minRangeAnswer}</label>) ||
                                            (serviceAnswer.maxRangeAnswer != null &&
                                            <label>{serviceAnswer.maxRangeAnswer}</label>) ||
                                            (serviceAnswer.choiceAnswer != null &&
                                            <label>{serviceAnswer.choiceAnswer}</label>)
                                        }
                                    </body>
                                </td>
                            </tr>
                        )
                }
                <tr>
                        <td>
                            <select value={itemCount} onChange={async e => await setPage(e)}>
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
        </div>
        
    )
}

export default ServiceAnswers