import React from 'react';

const ComNew = (props) => {
    const { dep, item, com } = props
    return (
        <div>
            <h1>{`Edit Comment for ${item.name}`}</h1>
            <a href={`/departments/${dep.id}/items/${item.id}/comments`}>{`Back to all comments for ${item.name}`}</a>
            <form action={`/departments/${dep.id}/items/${item.id}/comments/${com.id}`} method="post">
                <input type="hidden" name="_method" value="patch" />
                <h2>Update Comment</h2>
                <textarea defaultValue={`${com.body}`} name="comment[body]" />
                <button type="submit">Update Comment</button>
            </form>
        </div>
    );
};

export default ComNew;