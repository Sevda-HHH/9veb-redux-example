export const Card = ({ item }) => {

    return (<div className="card" >
        <div className="card_image">
            <img src={item.image} alt={item.title} />
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
    </div>)
}