import React from 'react'
import {Link} from 'react-router-dom'

const CategoryList = ({
                               category,
                               createCategory,
                               deleteCategory,
                           }) =>

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
            </tbody>
        </table>
    </div>

export default ServiceCategories