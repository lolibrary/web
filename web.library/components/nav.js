import React from 'react'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import { faSearch, faColumns, faUser, faStar, faPlus, faBookmark, faTags, faSignOutAlt } from '@fortawesome/pro-light-svg-icons'

const JUNIOR = 10;
const SENIOR = 50;
const ADMIN = 100;
const Nav = props => (

         <nav className="navbar navbar-expand-md navbar-light navbar-laravel fixed-top">
            <div className="container">
                <Link href="/"><a className="navbar-brand">
                    <img style={{height: "14px"}} src="{{ cdn_link('assets/logo_horizontal.png') }}" alt="Lolibrary logo" />
                </a>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/*<!-- Left Side Of Navbar -->*/}
                    <ul className="navbar-nav mr-auto">
                    {props.user.level > JUNIOR && (
                      <AdminNav user={props.user} />)}
                    </ul>

                    {/*<!-- Right Side Of Navbar -->*/}
                    <ul className="navbar-nav ml-auto">
                        {/*<!-- Authentication Links -->*/}
                        <li><a className="nav-link" href="{{ route('donate') }}">{'Donate'}</a></li>
                          {props.user.isLoggedIn ? (<DropdownNav user={props.user}/>) : (
                            <>
                            <li><a className="nav-link" href="/login">{'Login'}</a></li>
                            <li><a className="nav-link" href="/register">{'Register'}</a></li>
                            </>
                          )}

                        <li className="d-sm-none"><a className="nav-link" href="/search">{'Search'}</a></li>
                    </ul>

                    <form className="form-inline pl-md-3 d-none d-sm-flex" action="/search" method="get">
                        <input className="form-control mr-sm-2" name="search" autoComplete="off" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"><Icon icon={faSearch} aria-label="Search Icon" /></button>
                    </form>
                </div>
            </div>
        </nav>
)


const AdminNav = props => (

  <Dropdown>
<Dropdown.Toggle id="navbarDropdown" className="nav-link dropdown-toggle" variant="link">
  <span className="caret">{props.user.role}</span>
</Dropdown.Toggle>
<Dropdown.Menu>
        <Dropdown.Item className="dropdown-item" href="{{ route('admin.dashboard') }}">
            <Icon icon={faColumns} /> {'Dashboard'}
        </Dropdown.Item>

    {props.user.level > JUNIOR && (
      <>
        <Link href="/items/new" passHref><Dropdown.Item className="dropdown-item">
            <Icon icon={faPlus} /> {'Add Item'}
        </Dropdown.Item></Link>
        <Dropdown.Item className="dropdown-item" href="{{ route('items.index') }}">
            <Icon icon={faBookmark} /> {'All Items'}
        </Dropdown.Item>
        </>
    )}

    {props.user.level > SENIOR && (
        <Dropdown.Item className="dropdown-item" href="{{ route('admin.items.queue') }}">
            <Icon icon={faPlus} />  {'Drafts Queue'}
        </Dropdown.Item>
    )}

    {props.user.level > ADMIN && (
        <Dropdown.Item className="dropdown-item" href="{{ route('admin.users') }}">
            <Icon icon={faPlus} /> {'All Users'}
        </Dropdown.Item>
    )}
    </Dropdown.Menu>
</Dropdown>)

const DropdownNav = props => (
<Dropdown>
<Dropdown.Toggle id="navbarDropdown" className="nav-link dropdown-toggle" variant="link">
  <span className="caret">{props.user.name}</span>
</Dropdown.Toggle>
<Dropdown.Menu>
        <Dropdown.Item href="{{ route('profile') }}">
            <Icon icon={faUser} /> {'Profile'}
        </Dropdown.Item>

        <Dropdown.Item href="{{ route('wishlist') }}">
            <Icon icon={faStar} /> {'Wishlist'}
        </Dropdown.Item>

        <Dropdown.Item href="{{ route('closet') }}">
            <Icon icon={faTags} /> {'Closet'}
        </Dropdown.Item>

        <Dropdown.Item href="{{ route('logout') }}"
            onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
            <Icon icon={faSignOutAlt} /> {'Logout'}
        </Dropdown.Item>

        <form id="logout-form" action="{{ route('logout') }}" method="POST" style={{display: "none"}}>
            @csrf
        </form>
</Dropdown.Menu>
</Dropdown>)

export default Nav


 