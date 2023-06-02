import './List.css'

function List({items, handleClick}) {

    return (
        <>
            <h2>List of Items:</h2>
            <ul id='item-list'>
                {items.map((item) => {
                    return <li key={item} className="list-item"><button onClick={handleClick} className="list-button">{item}</button></li>
                })}
            </ul>
        </>
    )
}

export default List