import React from 'react';

const ComNew = (props) => {
    const { item } = props
    return (
        <div>
            <h1>{`New Comment for ${item.name}`}</h1>
            <a href={`/items/${item.id}/comments`}>{`Back to ${item.name}`}</a>
            <div className="centerMe">
                <form className="form" action={`/items/${item.id}/comments`} method="post">
                    <h2>New Comment</h2>
                    <textarea name="comment[body]" />
                    <button type="submit">Add Comment</button>
                </form>
            </div>
        </div>
    );
};

export default ComNew;