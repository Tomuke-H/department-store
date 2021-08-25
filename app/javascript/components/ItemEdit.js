import React from 'react';

const ItemNew = (props) => {
    const { dep, item } = props
    return (
        <div>
            <h1>{`Edit Item for ${dep.name}`}</h1>
            <a href={`/departments/${dep.id}/items`}>{`Back to ${dep.name} items`}</a>
            <form action={`/departments/${dep.id}/items/${item.id}`} method="post">
                <input type="hidden" name="_method" value="patch" />
                <h2>New Item Name</h2>
                <input defaultValue={`${item.name}`} name="item[name]" />
                <button type="submit">Update Item</button>
            </form>
        </div>
    );
};

export default ItemNew;