import React from 'react';

const Dep = (props) => {
    const { items, dep } = props;

    const renderItems = () => {
        return items.map((item) => (
            <div className="item">
                <h2>{`${item.name}`}</h2>
                <a href={`/departments/${dep.id}/items/${item.id}`}>Show Item</a>
                <a href={`/departments/${dep.id}/items/${item.id}/edit`}>Edit Item</a>
                <a href={`/departments/${dep.id}/items/${item.id}`} data-method="delete">Delete Item</a>
            </div>
        ))
    }

    return (
        <div>
            <div className="department">
                <h2>{`${props.dep.name}`}</h2>
                <a href={`/departments/${props.dep.id}/edit`}>Edit Department</a>
                <a href="/">All departments</a>
            </div>
            <a href={`/departments/${dep.id}/items/new`}>Add Item</a>
            <h2>All Items:</h2>
            <div className="tile">
                {renderItems()}
            </div>
        </div>
    );
};

export default Dep;