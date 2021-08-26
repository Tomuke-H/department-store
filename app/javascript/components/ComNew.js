import React from 'react';

const ComNew = (props) => {
    const { dep, item } = props
    return (
        <div>
            <h1>{`New Comment for ${item.name}`}</h1>
            <a href={`/departments/${dep.id}/items/${item.id}/comments`}>{`Back to ${item.name}`}</a>
            <form action={`/departments/${dep.id}/items/${item.id}/comments`} method="post">
                <h2>New Comment</h2>
                <textarea name="comment[body]" />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
};

export default ComNew;