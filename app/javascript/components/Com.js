import React from 'react';

const Com = (props) => {
    const {item, com} = props;
    return (
        <div>
            <h1>{`Comment on ${item.name}`}</h1>
            <a href={`/items/${item.id}/comments`}>Back to all comments</a>
            <div className="centerMe">
                <div className="comment">
                    <h2>{`"${com.body}"`}</h2>
                    <h2>{`${com.author}`}</h2>
                    <a href={`/items/${item.id}/comments/${com.id}/edit`}>Edit Comment</a>
                </div>
            </div>
        </div>
    );
};

export default Com;