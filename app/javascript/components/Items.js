import React from 'react';

const Items = (props) => {
    const { dep, items } = props;

    const renderItems = () => {
        return items.map((item) => (
            <div>
                <h2>{`${item.name}`}</h2>
                <a href={`/departments/${dep.id}/items/${item.id}`}>Show Item</a>
                <a href={`/departments/${dep.id}/items/${item.id}`} data-method="delete">Delete Item</a>
            </div>
        ))
    }
    return (
        <div>
            <h1>{`${dep.name} items`}</h1>
            <a href={`/departments/${dep.id}`}>Back to Department</a>
            <a href={`/departments/${dep.id}/items/new`}>Add Item</a>
            {renderItems()}
        </div>
    )
}

export default Items;