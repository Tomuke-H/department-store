import React from 'react';

const ComNew = (props) => {
    const { item, com } = props
    return (
        <div>
            <h1>{`Edit Comment for ${item.name}`}</h1>
            <a href={`/items/${item.id}/comments`}>{`Back to ${item.name}`}</a>
            <div className="centerMe">
                <form className="form" action={`/items/${item.id}/comments/${com.id}`} method="post">
                    <input type="hidden" name="_method" value="patch" />
                    <h2>Update Comment</h2>
                    <textarea defaultValue={`${com.body}`} name="comment[body]" />
                    <h2>Update Author</h2>
                    <input defaultValue={`${com.author}`} name="comment[author]" />
                    <button type="submit">Update Comment</button>
                </form>
            </div>
        </div>
    );
};

export default ComNew;