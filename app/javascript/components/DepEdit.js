import React from 'react';

const DepEdit = (props) => {
    return (
        <div>
            <h1>Edit Department</h1>
            <a href="/">Back to All Departments</a>
            <form action={`/departments/${props.dep.id}`} method="post">
                <input type="hidden" name="_method" value="patch" />
                <h2>Edit Department Name</h2>
                <input defaultValue={`${props.dep.name}`} name="department[name]" />
                <button type="submit">Update Department</button>
            </form>
        </div>
    );
};

export default DepEdit;