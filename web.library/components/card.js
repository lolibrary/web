import React from 'react'
import Link from 'next/link'

const Card = props => (
	<div class="card">
    <div class="card-body text-center">
    <style jsx>{`
    	p {white-space: nowrap;
    		overflow-x: hidden;
    		text-overflow: ellipsis;}
    	`}</style>
        <p className="mb-0">
            { props.item.english_name }
        </p>
        <p className="text-muted small">
            { props.item.foreign_name ? props.item.foreign_name : " "}
        </p>

        <div style={{ height: "14rem" }} className="text-center">
            <a href="{ props.item.url }">
                <img src="{{props.item.image.thumbnail_url ? props.item.image.thumbnail_url : ''}}" class="mw-100 mh-100 rounded"
                    onerror="if (this.src !== '') this.src = ''" />
            </a>
        </div>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item py-1 px-3">
            <div className="row small text-muted">
                <p className="col m-0 text-left">
                    Brand
                </p>
                <p className="col m-0 text-right">
                    Category
                </p>
            </div>
                        <div className="d-flex small">
                <p className="p-0 m-0 text-left flex-fill" style={{whiteSpace: "nowrap", overflowX: "ellipsis"}}>
                    <a href={ props.item.brand.url } title={ props.item.brand.name }>
                        { props.item.brand.name }
                    </a>
                </p>
                <p className="p-0 m-0 text-right flex-fill" style={{whiteSpace: "nowrap", overflowX: "hidden"}}>
                    <a href={ props.item.category.url }>
                        { props.item.category.name }
                    </a>
                </p>
            </div>

        </li>
    </ul>
    <a className=" btn btn-outline-primary rounded-0" style={{border: "none"}} href={ props.item.url }>
        View Item
    </a>

</div>
)

export default Card