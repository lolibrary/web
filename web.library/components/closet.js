import React from 'react'
import Link from 'next/link'
import Button from 'react-bootstrap/ Button';
import { FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/pro-light-svg-icons'

const Closet = props => (
{props.user.isLoggedIn && (
    @if (! Auth::user()->owns($item))
        <Button variant="primary-outline" href="{{ route('items.closet', $item) }}"
            onclick="event.preventDefault(); document.getElementById('closet-form').submit();">
            <Icon icon={faShoppingBag} /> Add to Closet
        </Button>
    @else
        <Button variant="danger-outline" href="{{ route('items.closet', $item) }}"
            onclick="event.preventDefault(); document.getElementById('closet-form').submit();">
            <Icon icon={faShoppingBag} /> Remove from Closet
        </Button>
    @endif

    <form id="closet-form" action="{{ route('items.closet', $item) }}" method="POST" style="display: none;">
        @csrf
        <input type="hidden" name="_method" value="put">
    </form>
)}
)

export default Closet