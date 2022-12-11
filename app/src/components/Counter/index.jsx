import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from '../../redux/actions';

export const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.count);

    const handleClick = (num) => {
        dispatch(counterAction(num))
    }

    return (
        <section className='counter'>
            <button onClick={() => handleClick(count + 1)}>Count +1</button>
        </section>
    )
}