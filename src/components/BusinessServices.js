import React from 'react'
import Link from "react-router-dom/es/Link";

const BusinessServices = ({
                              searchTerm,
                              searchedServices,
                              selectedServices,
                              findServicesForTerm,
                              updateServ,
                              updateDisplay,
                              displayedService
                          }) =>

    <div>
        <h3>Business Services</h3>

        {/*<a role="button" className="btn btn-success" variant="outline-success"
           onClick={createCategory}
        >Create new</a>*/}
        <table className="table">
            <tbody>
            <tr>
                <td>
                    <h4>Search for services</h4>
                    <input
                        type="text"
                        placeholder="Type a service name..."
                        value={searchTerm}
                        className="form-control"
                        name="service-searchbox"
                        autoComplete="off"
                        onChange={e => updateServ(e)}/>
                    <ul className="search-list">
                        {
                            searchedServices.map(serv =>
                                                     <li key={serv.id}>
                                                         <input type="checkbox"
                                                                name="service-checkbox"
                                                                value={serv.id}
                                                                checked={selectedServices.some(
                                                                    sel => sel.id === serv.id)}
                                                                onChange={e => updateServ(e)}/>
                                                         {serv.serviceName}

                                                     </li>
                            )
                        }
                    </ul>
                    <h4>Selected services</h4>
                    <ul className="select-list">

                        {
                            selectedServices.map(serv =>
                                                     <li key={serv.id}>
                                                         <label>
                                                             <input
                                                                 type="radio"
                                                                 name="select-displayed"
                                                                 value={serv.id}
                                                                 onChange={e => updateDisplay(e)}
                                                             />
                                                             {serv.serviceName}
                                                         </label>
                                                     </li>
                            )
                        }
                    </ul>
                </td>

                <td>
                    <h4>Service questions</h4>
                    {
                        displayedService ? displayedService.serviceQuestions
                                             .map(question => {
                                                 return (
                                                     <h5 key = {question.question}>
                                                         {question.question}
                                                     </h5>
                                                 )
                                             })
                            : ""
                    }
                    
                </td>
            </tr>
            </tbody>
        </table>
    </div>

export default BusinessServices