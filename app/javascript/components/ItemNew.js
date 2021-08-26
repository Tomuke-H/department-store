import React from 'react';

const ItemNew = (props) => {
    const { dep } = props
    return (
        <div>
            <h1>{`New Item for ${dep.name}`}</h1>
            <a href={`/departments/${dep.id}/items`}>{`Back to ${dep.name} items`}</a>
            <div className="centerMe">
                <form className="form" action={`/departments/${dep.id}/items`} method="post">
                    <h2>New Item Name</h2>
                    <input name="item[name]" />
                    <button type="submit">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default ItemNew;