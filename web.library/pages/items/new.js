import React from 'react';
import Head from '../../components/head';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fetch from 'isomorphic-unfetch';
import {yearRange} from '../../utils/util';
import {ColorSelect, BrandSelect, TagsSelect, FeatureSelect, CatSelect} from '../../components/select';
import {TextInput, TextareaInput, SelectInput, FileInput} from '../../components/forminput';

const New = props => (
	<>
    <Row className="mb-3">
        <Col className="text-center">
            <h3>Create an Item</h3>
        </Col>
    </Row>
    <h1>Create an Item</h1>

{/*    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif*/}
<Form>
    <Row>
        <Col lg="4">
        <FileInput name="image" label="Main Image" text="Try and find a somewhat decent quality image for the main image! Do not upload the default.png image. Leave this blank if you don't have a main image." />

            <hr />

            <div class="form-group">
                <label for="image" class="col-form-label">Additional Images</label>
              {/*  {{ Form::file('images[]', ['id' => 'additional-image']) }}
*/}
                <div id="additional-container"></div>

                <Button
                    size="sm"
                    variant="primary"
                    onclick="$('<input name=\'images[]\' type=\'file\'>').appendTo($('#additional-container'))"
                >add another image</Button>
            </div>

            <hr />
            <FeatureSelect />
			<ColorSelect />
			<TagsSelect />
            <BrandSelect />
            <CatSelect />
        </Col>

        <Col lg="8">
	        <TextInput id="english_name" label="English Name" required={true} text="An english or romanized version of this item's name. This will be used to identify the item in the search index." />
	        <TextInput id="foreign_name" label="Foreign Name" required={true} text="The non-english version of this item's name. Usually the original." />

            <Row>
                <Col lg="4">
                	<SelectInput id="year" label="Release Year" items={yearRange} required={true} text="The release year." />
                </Col>

                <Col lg="8">
                	<TextInput id="product_number" label="Product Number" required={false} text="The seller's product number for this item." />
                </Col>
            </Row>

            <Row>
                <Col lg="4">
                    <div class="form-label-group">
                        <select id="currency" name="currency" class="form-control form-control-chosen" required>
            {/*                @foreach ($currencies as $code => $currency)
                                <option value="{{ $code }}" @if ($code === old('currency')) selected @endif>{{ $currency }}</option>
                            @endforeach*/}
                        </select>
                        <label for="currency">Currency <span class="text-danger">*</span></label>

                        <p class="form-text">Use the release currency.</p>
                    </div>
                </Col>
                <Col lg="8">
                	<TextInput id="price" label="Price" required={true} placeholder="1000" text="Prices should be in whole numbers! If unknown, use 0." />
                </Col>
            </Row>
            <TextareaInput id="notes" label="Item Notes" placeholder="Item Notes. Note that this no longer supports HTML/bbcode, but may in the future!" />

            <h2>Attributes</h2>
            <div class="form-group">
                <p class="form-text">
                    Select a button below to add that particular attribute to this item.
                </p>
                <Col lg="12" style={{marginBottom: "20px"}}>
                {props.attributes.map(({ slug,  name})=> (
        			<Button variant="outline-primary" size="sm" id={'attribute-button-' + slug } data-clicked="0" data-type="attribute.button" data-id={slug} style={{margin: "5px"}}>{name}</Button>
        			))}
                </Col>
            </div>

            <Row>
                <Col lg="12">
                    {props.attributes.map(({ slug,  name})=> (
        			<TextInput id={'attribute.' + slug } data-clicked="0" data-type="attribute.input" data-id={slug} name={slug} label={name} />
        			))}
                </Col>
            </Row>


    <Row>
        <Col lg="12" className="text-center">
            <Button type="submit" variant="outline-primary" size="lg">Save as Draft</Button>
        </Col>
    </Row>
</Col>
</Row>
    </Form>
    </>
)

New.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.lolibrary.space/attributes');
  const attrs = await res.json();

  return { attributes: attrs.attributes};
};

export default New