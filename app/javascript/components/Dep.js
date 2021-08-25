import React from 'react';

const Dep = (props) => {
    return (
        <div>
            <h1>Department</h1>
            <h2>{`${JSON.stringify(props.dep)}`}</h2>
            <a href={`/departments/${props.dep.id}/edit`}>Edit Department</a>
            <a href={`/departments/${props.dep.id}/items`}>View all items</a>
            <a href="/">Back to all departments</a>
        </div>
    );
};

export default Dep;