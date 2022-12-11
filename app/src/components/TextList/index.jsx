import './style.css';
import {useSelector} from 'react-redux';
export const TextList = () => {

    const count = useSelector(state => state.counter.count);
    let arr = []
    for (let i = 0; i < count; i++) {
        arr[i] = i
    }

    return (
        <section className='textList'>
            <ul>
                {arr.map(item => {
                    return <li key={item}>Hello</li>
                })} 
            </ul>
        </section>
    )
}