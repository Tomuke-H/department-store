import React from 'react';

const Dep = (props) => {
    return (
        <div className="department">
            <h1>Department</h1>
            <h2>{`${props.dep.name}`}</h2>
            <a href={`/departments/${props.dep.id}/edit`}>Edit Department</a>
            <a href={`/departments/${props.dep.id}/items`}>View all items</a>
            <a href="/">Back to all departments</a>
        </div>
    );
};

export default Dep;