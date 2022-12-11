import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { productsAction } from "../../redux/actions"
import { Card } from "./Card"

import './style.css'

export const Products = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productsAction())
    }, [])

    return (<section className="cards">

        {products.status == "PENDING" ?
            <p>Loading...</p>
            : !!products.data.length
            && products.data.map(item => {
                return <Card key={item.id} item={item} />
            })}

    </section>)
}