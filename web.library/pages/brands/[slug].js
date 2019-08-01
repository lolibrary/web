import { useRouter } from 'next/router';
import React from 'react'
import Link from 'next/link'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {serviceFetch} from '../../utils/util'

const Brand = props => (
<Container>
<Row>
    <h1 className="col p-2">{props.name} Info</h1>
</Row>

<Row className="row text-center mb-4">
    <Col lg={4} sm={6} className="p-1 list-group text-center small p-2">
        <a className="list-group-item" href="{{ $model->url }}">
            {props.image && 
                <img className="d-block mx-auto mw-100 py-2 px-4" src={props.image} height="200" />
            }
                <h1 className="h5 text-center m-0">{props.name}</h1>
        </a>
    </Col>
    <Col lg={8} sm={6} className="p-2">
        {props.description &&
            <div className="card">
                <div className="card-body text-left">
                    {props.description}
                    </div>
            </div>
        }
        <p className={props.description ? 'my-4' : ''}>
            <span className="text-regular">{props.items? props.items.length : '0'}</span> items found with this brand.
        </p>

        <a href="{{ search_route([str_plural($name) => [$model->slug]]) }}"
            className="btn text-white btn-secondary py-2">Search using this brand</a>
    </Col>
</Row>
</Container>

);

Brand.getInitialProps = async ({ req, query }) => {
	const { slug } = query;
  const data = await serviceFetch('https://api.lolibrary.space/brands/' + slug);
	return data;
};


export default Brand;
