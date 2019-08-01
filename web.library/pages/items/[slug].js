import Head from '../components/head'
import Wishlist from '../components/wishlist'
import Closet from '../components/closet'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import { faStar, faShoppingBag } from '@fortawesome/pro-light-svg-icons'

const JUNIOR = 50;
const Item = props => (

<Head title={`${props.english_name} by ${props.brand.name}`} url={item.url} ogImage={ props.image.thumbnail_url ?? default_asset() } ogType="product"/>

<Container>
    <Row className="mb-3">
        <Col className="text-center">
            <h3>{{ $item->english_name }}</h3>
            <h4 className="text-muted">{{ $item->foreign_name }}</h4>
        </Col>
    </Row>

    <Row>
        <Col sm className="p-2">
            <img src="{{ $item->image->url ?? default_asset() }}"
                        onerror="this.src = '{{ default_asset() }}'"
                        data-original-url="{{ $item->image->url ?? default_asset() }}"
                        className="rounded mw-100 d-block" />
            <Row className="p-0 mx-0 my-3">
                <Col className="p-1 text-center small">
                    <Wishlist />
                </Col>
                <Col className=" p-1 text-center small">
                    <Closet />
                </Col>
            </Row>
        </Col>

        <Col sm className="p-2 px-4">
            <h4 className="mt-2">Item Info</h4>
            <div className="text-muted">
                <p className="m-0">
                    {props.year ? (Released in <span className="text-regular">{props.year}</span>)
                     : (Unknown release year)}
               </p>

                <p className="m-0">
                    {props.product_number ? (Product number: <span className="text-regular">{props.product_number}</span>)
                     : (No product number recorded.)}
                </p>

                <p className="m-0">
                    {props.price ? (Originally listed for <span className="text-regular">{props.price_formatted}</span>)
                     : (No listing price recorded.)}
                 </p>

                <p className="m-0">
                    {props.submitter ? (Submitted by <span className="text-regular">{props.submitter.username}</span>)
                         : (Submitted by anonymous)}
                </p>

                <p className="m-0">
                {props.published ? (ublished on <time datetime="{{ $item->created_at->toRfc3339String() }}" className="text-regular">{{ $item->created_at->format('jS M Y, H:i') }} UTC</time>)
                         : (<span className="text-danger">This is a Draft Post</span>)}
                </p>
            </div>

            {props.attributes.map(({name, value}) => (
                <h4 className="mt-4">{name}</h4>
                <p className="text-muted text-regular">{value}</p>
            )}

            {props.notes && 
                <h4 className="mt-4">Notes</h4>
                <p className="text-muted text-regular">{props.notes}</p>
            }

            <Row>
                <Col className="p-1 list-group text-center small">
                    <div className="list-group-item">
                        <Icon icon={faStar} /> {{ $item->stargazers()->count() }} {{ trans_choice('user.wishlist.stargazers', $item->stargazers()->count()) }}
                    </div>
                </Col>
                <Col className="p-1 list-group text-center small">
                    <div className="list-group-item">
                        <Icon icon={faShoppingBag} />{{ $item->owners()->count() }} {{ trans_choice('user.closet.owners', $item->owners()->count()) }}
                    </div>
                </Col>
            </Row>

            <SpanProp header="Brand" url={props.brand.url} name={props.brand.name} />
            <SpanProp header="Category" url={props.category.url} name={props.category.name} />
            <MultiProp header="Features" items={props.features} empty="No features recorded!" />
            <MultiProp header="Colorways" items={props.colors} empty="No colors recorded!" />
            <MultiProp header="Tags" items={props.tags.map((tag) => {return {'url' : tag.url, 'name': '#' + tag.slug}})} empty="No tags recorded!" />
       </Col>
    </Row>

    <Row>
        <h4 className="my-4 px-4">Images</h4>
        <div className="item-image-columns mb-5">
            {props.images.map(({url, thumbnail_url}) => (
                <a className="card m-0 p-0" href="{{ $image->url }}" data-lightbox="show">
                    <img src="{{ $image->thumbnail_url }}"
                        onerror="this.src = '{{ default_asset() }}'"
                        data-original-url="{{ $image->url }}"
                        className="mw-100" />
                </a>
            )}
        </div>
    </Row>

    <Row>
        <Col sm={4} className="mx-auto m-0 p-0 list-group text-center">
            <a className="list-group-item rounded-0" href="#" onclick="alert('We plan to have item corrections in at some point, but this is just a sneak peek!')">
                Submit a correction
            </a>
            <a className="list-group-item text-danger rounded-0" href="#" onclick="alert('We plan to have item flagging in at some point, but this is just a sneak peek!')">
                Flag item
            </a>
        </Col>
    </Row>
   {props.user.level > JUNIOR &&
    <Row>
        <Col sm={4} className="mx-auto m-0 p-0 list-group text-center">
            {props.draft && 
                <a onclick="event.preventDefault(); $('#publish-item').submit()" className="list-group-item rounded-0 text-info">Publish Item</a>
            }
            <a href="{{ route('items.edit', $item) }}" className="list-group-item rounded-0 text-success">Edit Item</a>
            <a onclick="event.preventDefault(); $('#delete-item').submit()" className="list-group-item text-danger rounded-0">Delete Item</a>
        </Col>
    </Row>
    }

</Container>
)

const SpanProp = props => (
    <>
            <h4 className="mt-4">{props.header}</h4>
            <Row>
                <Col className="list-group p-1 text-center small">
                <Button variant="light" href={props.url}
                        {props.name}
                    </Button>
                </Col>
            </Row>
            </>
    )

const MultiProp = props => (
    <>
            <h4 className="mt-4">{props.header}</h4>
            <Row>
            {props.items? props.items.map({url}, {name}) => (
                    <Col lg={4} xs={6} className="p-1 text-center small">
                        <Button variant="light" className="list-group-item" href={url}>
                            {name}
                        </Button>
                    </Col>) : (
                    <Col className="text-muted">{props.empty}</Col>)}
             </Row>
            </>
    )

const ItemInfo = props => (
    )

export default Item