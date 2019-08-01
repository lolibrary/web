import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Card from '../components/card'
import Scrollbox from '../components/scrollbox'
import {ColorSelect} from '../components/select';
import {serviceFetch} from '../utils/util';
import Container from 'react-bootstrap/Container';

const brand = {
    'name': 'Excentrique',
    url: 'https://lolibrary.org/brands/excentrique'
  };

  const cat = {
    'name': 'Bags',
    url: 'https://lolibrary.org/categories/bags'
  };
const item = {
  english_name: 'Mandrake Bag',
  foreign_name: 'マンドラゴラのバッグ ',
  url: 'https://lolibrary.org/items/excentrique-mandrake-bag',
  brand: brand,
  category: cat
}

const recent = [{item: item}];


const Home = props => (
  <Container>
    <Head />
<ColorSelect />
    <h1 className="text-center mb-4 px-4">
    <img className="mw-100" src="{{ cdn_link('assets/banners/banner01-resized.png') }}" alt="" style={{maxHeight: "200px"}} />
</h1>


    <h2 class="sr-only">{'News'}</h2>
    <div class="row">
{/*        @foreach ($posts as $post)
            <div class="col-md">
                @include('blog.card')
            </div>
        @endforeach*/}
    </div>

    <Scrollbox name='Brands' items={props.brands} />
    <Scrollbox name='Categories' items={props.categories} />


    <h2 className="mt-5">{'Recent Items'}</h2>
    <div className="scrollbox">
        {recent.map(({ item })=> (
            <div className="scrollbox-item scrollbox-item-card m-2">
                <Card item={item}/>
            </div>
        ))}
    </div>
    </Container>
)

Home.getInitialProps = async ({ req }) => {
  const brands = await serviceFetch('https://api.lolibrary.space/brands');
  const cats = await serviceFetch('https://api.lolibrary.space/categories');
  return { brands: brands.brands, categories: cats.categories};
};

export default Home
