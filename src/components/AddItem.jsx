import { useState } from "react"
import List from './List'
import './AddItem.css'

function AddItem() {
    const [addItem, setAddItem] = useState({
        input: '',
        items: []
    })

    function handleChange(event) {
        setAddItem({
            input: event.target.value,
            items: [...addItem.items]
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        setAddItem({
            items: [...addItem.items, addItem.input],
            input: ''
        })
    }

    function handleClick(event) {
        setAddItem({
            items: addItem.items.filter((item) => {
            if (item !== event.target.firstChild.data) return item
            }),
            input: ''
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} id="addItem-form" className="container">
                <h2 className="grid-item">Add item: </h2>  
                <input 
                    value={addItem.input}
                    onChange={handleChange} 
                    className="grid-item"
                    id="addItem-input"
                />
                <button type='submit' className="grid-item" id="addItem-button">Add!</button>
            </form>
            <List items={addItem.items} handleClick={handleClick}/>
        </>
        )
}

export default AddItem