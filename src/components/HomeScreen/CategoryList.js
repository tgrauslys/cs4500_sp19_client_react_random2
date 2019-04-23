import React from 'react'

const CategoryList = ({
                          props,
                          category
                      }) => {
    console.log(category.services)
    return (<div>
        <h3>Category: {category.serviceCategoryName}</h3>
        <table className="table">
            <tbody>
            {
                category.services
                    .map(service =>
                             <tr key={service.id}>
                                 <td>

                                     <a className="nav-link btn-lg text-center"
                                        href={"/provider-search/"  + service.id}>
                                         {/*<i className={`fa ${serviceCategory.icon}`}/>*/}
                                         {service.serviceName}
                                     </a>
                                 </td>
                             </tr>
                    )
            }
            </tbody>
        </table>
        <a role="button" className="btn btn-success" variant="outline-success"
           onClick={() => props.history.push('/home')}
        >Back</a>

    </div>)
}

export default CategoryList;