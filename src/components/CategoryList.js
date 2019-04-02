import React from 'react'
import {Link} from 'react-router-dom'

const CategoryList = ({
                          category,
                      }) =>

    <div>
        <h3>{category.serviceCategoryName}</h3>
        <table className="table">
            <tbody>
            {
                category.services
                    .map(service =>
                             <tr key={service.id}>
                                 <td>

                                     {service.name}

                                 </td>
                             </tr>
                    )
            }
            </tbody>
        </table>
    </div>

export default CategoryList;