import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Search } from "../../components/Search"

import { productsAction } from "../../redux/actions"
import { basketAction } from "../../redux/actions/products"
import { Card } from "./Card"

import './style.css'

export const Products = () => {
    const products = useSelector(state => state.products)
    const basket = useSelector(state => state.basket)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productsAction(""))

    }, [])

    console.log("basket", basket)
    const handleAddToBasket = (item) => { 
        dispatch(basketAction({
            title: item.title,
            id: item.id,
            description: item.description,
            image: item.image
        }))

    }

    return (<>
        <div>
            <Search />
        </div>
        <section className="cards">
            {products.status == "PENDING" ?
                <p>Loading...</p>
                : !!products.data.length
                && products.data.map(item => {
                    return <Card onClick={handleAddToBasket} key={item.id} item={item} />
                })}

        </section></>)
}