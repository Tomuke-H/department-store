import React from 'react';
import Items from './Items';

const Coms = (props) => {
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
                <a href={`/items/${item.id}/comments/new`}>Add Comment</a>
                <a href={`/departments/${item.department_id}`}>Back to all department items</a>
            </div>
            <h3>Comments:</h3>
            <div className="tile">
                {renderComs()}
            </div>
        </div>
    )
}

export default Coms;