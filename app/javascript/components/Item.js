import React from 'react';
import Items from './Items';

const Item = (props) => {
    const { item, coms } = props;

    const renderComs = () => {
        return coms.map((com) => (
            <div className="comment">
                <h2>{`${com.body}`}</h2>
                <div className="links">
                    <a href={`/items/${item.id}/comments/${com.id}`}>View Comment</a>
                    <a href={`/items/${item.id}/comments/${com.id}/edit`}>Edit Comment</a>
                    <a href={`/items/${item.id}/comments/${com.id}`} data-method="delete">Delete Comment</a>
                </div>
            </div>
        ))
    }
    return (
        <div>
            <div className="item">
                <h1>{`${item.name}`}</h1>
                <a href={`/departments/${item.department_id}`}>All items</a>
            </div>
            <a href={`/items/${item.id}/comments/new`}>Add Comment</a>
            <h3>Comments:</h3>
            <div className="list">
                {renderComs()}
            </div>
        </div>
    )
}

export default Item;