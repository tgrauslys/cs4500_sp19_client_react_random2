import React from 'react'
import {Link} from 'react-router-dom'

const ServiceCategories = ({
                               categories,
                               createCategory,
                               deleteCategory,
                               optionValues,
                               currentPage,
                               itemCount,
                               totalPages,
                               setPage
                           }) => {
    const isFirstPage = currentPage === 0;
    const isLastPage = currentPage >= totalPages - 1;

    let previousButton = <button onClick= {(e) => setPage(e, currentPage - 1)}
                                 style={{margin: '2px'}}
        // &#60; displays "<"
                                 type="button" className="btn btn-secondary">&#60;</button>
    let previousPageButton = <button onClick= {(e) => setPage(e, currentPage - 1)}
                                     style={{margin: '2px'}}
                                     type="button" className="btn btn-primary">{currentPage}</button>
    let nextButton = <button onClick= {(e) => setPage(e, currentPage + 1)}
                             style={{margin: '2px'}}
        // &#62; displays ">"
                             type="button" className="btn btn-secondary">&#62;</button>
    let nextPageButton = <button onClick= {(e) => setPage(e, currentPage + 1)}
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
            <h3>Service Categories</h3>
            <a role="button" className="btn btn-success" variant="outline-success"
               onClick={createCategory}
            >Create new</a>
            <table className="table">
                <tbody>
                {
                    categories
                        .map(serviceCategory =>
                                 <tr key={serviceCategory.id}>
                                     <td>
                                         <Link to={`/admin/categories/${serviceCategory.id}`}>
                                             {serviceCategory.serviceCategoryName}
                                         </Link>
                                     </td>
                                     <td>
                                         <a role="button" className="btn btn-danger"
                                            onClick={() => {
                                                deleteCategory(
                                                    serviceCategory.id)
                                            }}>
                                             Delete
                                         </a>
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
export default ServiceCategories