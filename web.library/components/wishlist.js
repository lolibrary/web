import React from 'react'
import Link from 'next/link'
import Button from 'react-bootstrap/ Button';
import { FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/pro-light-svg-icons'

const Wishlist = props => (
{props.user.isLoggedIn && (
    @if (! Auth::user()->owns($item))
        <Button variant="primary-outline" href="{{ route('items.wishlist', $item) }}"
            onclick="event.preventDefault(); document.getElementById('wishlist-form').submit();">
            <Icon icon={faStar} /> Add to Wishlist
        </Button>
    @else
        <Button variant="danger-outline" href="{{ route('items.wishlist', $item) }}"
            onclick="event.preventDefault(); document.getElementById('wishlist-form').submit();">
            <Icon icon={faStar} /> Remove from Wishlist
        </Button>
    @endif

    <form id="wishlist-form" action="{{ route('items.wishlist', $item) }}" method="POST" style="display: none;">
        @csrf
        <input type="hidden" name="_method" value="put">
    </form>
)}
)

export default Wishlist