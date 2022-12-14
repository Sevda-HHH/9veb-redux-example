import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './style.css';

export const Header = () => {
    const count = useSelector(state => state.counter.count);
    const basketCount = useSelector(state => state.basket.products.length);
 
    return (
        <header>
            <ul>
                <li> <Link to='/'> Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li>Contact us </li>
            </ul>

            <div className='basket'>BASKET: {basketCount}</div>
            <div className='count'>count: {count}</div>
        </header>
    )
}