import React from 'react';

const Dep = (props) => {
    const {dep, item} = props;
    return (
        <div>
            <h1>Item</h1>
            <h2>{`${item.name}`}</h2>
            <a href={`/departments/${dep.id}/items/${item.id}/edit`}>Edit Item</a>
            <a href={`/departments/${dep.id}/items`}>{`Back to all ${dep.name} items`}</a>
            <a href={`/items/${item.id}/comments`}>View all comments</a>
            <a href="/">Back to all departments</a>
        </div>
    );
};

export default Dep;