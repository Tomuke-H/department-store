import React from 'react';
import Items from './Items';

const Coms = (props) => {
    const { item, coms } = props;

    const renderComs = () => {
        return coms.map((com) => (
            <div className="comment">
                <h2>{`${com.body}`}</h2>
                <a href={`/items/${item.id}/comments/${com.id}`}>View Comment</a>
                <a href={`/items/${item.id}/comments/${com.id}/edit`}>Edit Comment</a>
                <a href={`/items/${item.id}/comments/${com.id}`} data-method="delete">Delete Item</a>
            </div>
        ))
    }
    return (
        <div>
            <h1>{`${item.name}`}</h1>
            <a href={`/items/${item.id}/comments/new`}>Add Comment</a>
            <a href={`/departments/${item.department_id}`}>Back to all department items</a>
            <h3>Comments:</h3>
            {renderComs()}
        </div>
    )
}

export default Coms;