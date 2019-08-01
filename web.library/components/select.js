import React, {useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import {sortObj} from '../utils/util';

function SelectForm (props) {
	const [data, setData] = useState({items: [], isFetching: false});
	useEffect(() => {
        const fetchData = async () => {
            try {
                setData({items: data.items, isFetching: true});
                const res = await fetch(props.service);
                const items = await res.json();
                const sortedItems = items[props.name].sort(sortObj);
                setData({items: sortedItems, isFetching: false});
            } catch (e) {
                console.log(e);
                setData({items: data.items, isFetching: false});
            }
        };
        fetchData();
    }, []);
    return 	(
        <Form.Group controlId={props.name}>
            <Form.Label className="col-form-label">{props.label}</Form.Label>
        	<Select name={props.multiple ? props.name + "[]" : props.name} isMulti={props.multiple} options={data.items} getOptionValue={option => option.slug} getOptionLabel={option => option.name} value={props.selected} id={props.name} className="form-control-chosen"/>
        </Form.Group>
    	);
}

export const ColorSelect = props => (
    <SelectForm name="colors" multiple={true} service={'https://api.lolibrary.space/colors'} selected={props.selected} label="Colorways" />

);

export const TagsSelect = props => (
    <SelectForm name="tags" multiple={true} service={'https://api.lolibrary.space/tags'} selected={props.selected} label="Tags"/>

);

export const FeatureSelect = props => (
    <SelectForm name="features" multiple={true} service={'https://api.lolibrary.space/features'} selected={props.selected} label="Features" />

);

export const BrandSelect = props => (
    <SelectForm name="brands" multiple={false} service={'https://api.lolibrary.space/brands'} selected={props.selected} label="Brand" />

);

export const CatSelect = props => (
    <SelectForm name="categories" multiple={false} service={'https://api.lolibrary.space/categories'} selected={props.selected} label="Category" />

);

export default SelectForm