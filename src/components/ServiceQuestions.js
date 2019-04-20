import React from 'react'

const ServiceQuestions = ({
                            serviceQuestions, 
                            optionValues, 
                            currentPage,
                            itemCount,
                            first,
                            last,
                            setPage}) => {
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
            <h3>Service Questions</h3>
            <table className="table">
                <tbody>
                {
                    serviceQuestions
                        .map(serviceQuestion =>
                            <tr className="question-row" key={serviceQuestion.id}>
                                <td >
                                    <a href={`/questions/${serviceQuestion.id}`}>
                                        {serviceQuestion.question}
                                    </a>
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

export default ServiceQuestions