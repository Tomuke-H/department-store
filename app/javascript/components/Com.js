import React from 'react';

const Com = (props) => {
    const {item, com} = props;
    return (
        <div>
            <h1>{`Comment on ${item.name}`}</h1>
            <h2>{`${com.body}`}</h2>
            <a href={`items/${item.id}/comments/${com.id}/edit`}>Edit Comment</a>
            <a href={`/items/${item.id}/comments`}>{`Back to all ${item.name} comments`}</a>
            <a href="/">Back to all departments</a>
        </div>
    );
};

export default Com;