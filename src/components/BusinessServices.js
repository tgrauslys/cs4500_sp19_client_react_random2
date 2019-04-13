import React from 'react'
import Link from "react-router-dom/es/Link";


const BusinessServices = ({
                              searchTerm,
                              searchedServices,
                              selectedServices,
                              findServicesForTerm,
                              updateServ,
                              updateDisplay,
                              displayedService,
                              updateQnAnswer
                          }) => {


    function displayAnswers(question) {
        switch (question.type) {
            case "TrueFalse":
                return (
                    <div>
                        <label className="btn-lbl">
                            <input
                                type="radio"
                                name={question.id}
                                defaultChecked={true}
                                //value={true}
                                onChange={e => updateQnAnswer(e, question)}
                            />
                            {" True"}
                        </label>
                        <label className="btn-lbl">
                            <input
                                type="radio"
                                name={question.id}
                                value={false}
                                //checked={true}
                                onChange={e => updateQnAnswer(e, question)}
                            />
                            {" False"}
                        </label>
                    </div>);
            case "Range":
                return (
                    <div>
                        <label>
                            {"Min: "}
                            <input type="number"
                                   name="min"
                                   min="0">
                            </input>

                        </label>
                        <label>
                            {"Max: "}
                            <input type="number"
                                   name="max"
                                   min="0">

                            </input>
                        </label>
                    </div>
                )
            case "MultipleChoice":
                const choices = question.choices.split(',');
                return (
                    choices.map((choice =>
                                <div key={choice}>
                                    <label>
                                        <input type="checkbox"
                                               name="multiple-choices"
                                               value={choice}
                                               onChange={e => updateQnAnswer(e, choice)}/>
                                        {choice}
                                    </label>
                                    <br/>
                                </div>
                        )
                    ))
        }
    }


    return (
        <div>
            <h3>Business Services</h3>

            {/*<a role="button" className="btn btn-success" variant="outline-success"
           onClick={createCategory}
        >Create new</a>*/}
            <table className="bserv-table">
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

                                        <label className="btn-lbl">
                                            <input type="checkbox"
                                                   name="service-checkbox"
                                                   value={serv.id}
                                                   checked={selectedServices.some(
                                                       sel => sel.id === serv.id)}
                                                   onChange={e => updateServ(e)}/>
                                            {serv.serviceName}
                                        </label>

                                    </li>
                                )
                            }
                        </ul>
                        <h4>Selected services</h4>
                        <ul className="select-list">

                            {
                                selectedServices.map(serv =>
                                    <li key={serv.id}>
                                        <label className="btn-lbl"
                                               htmlFor={"h" + serv.id}>
                                            <input
                                                type="radio"
                                                name="select-displayed"
                                                value={serv.id}
                                                id={"h" + serv.id}
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
                                            <div key={question.question}>
                                                <h5>
                                                    {question.question}
                                                </h5>

                                                {displayAnswers(question)}
                                                <br/>
                                            </div>
                                        )
                                    })
                                :
                                <h4/>
                        }
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BusinessServices