import React, { FC } from 'react';

const ProductSort: FC = () => {
    return (
        <div className="zb-filter-label-group">
            <form action="#">
                <div className="row gap-0 align-items-center justify-content-end">
                    <div className="col-auto">
                        <label htmlFor="inputPassword6" className="col-form-label">
                            Sort By :
                        </label>
                    </div>
                    <div className="col-auto">
                        <select className="form-select" aria-label="Default select example">
                            <option selected={true}>Most Popular</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProductSort