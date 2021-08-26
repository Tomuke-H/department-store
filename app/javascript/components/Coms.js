import React from 'react';

const Coms = (props) => {
    const { dep, item, coms } = props;

    const renderComs = () => {
        return coms.map((com) => (
            <div>
                <h2>{`${com.body}`}</h2>
                <a href={`/departments/${dep.id}/items/${item.id}/comments/${com.id}`}>View Comment</a>
                <a href={`/departments/${dep.id}/items/${item.id}/comments/${com.id}/edit`}>Edit Comment</a>
                <a href={`/departments/${dep.id}/items/${item.id}/comments/${com.id}`} data-method="delete">Delete Item</a>
            </div>
        ))
    }
    return (
        <div>
            <h1>{`Comments for ${item.name}`}</h1>
            <a href={`/departments/${dep.id}`}>Back to Department</a>
            <a href={`/departments/${dep.id}/items/${item.id}/comments/new`}>Add Comment</a>
            {renderComs()}
        </div>
    )
}

export default Coms;