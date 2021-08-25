import React from 'react';

const Deps = (props) => {
    const renderDeps = () => {
        return props.deps.map((dep) => (
            <div>
                <h2>{`${dep.name}`}</h2>
                <a href={`/departments/${dep.id}`}>View Department</a>
                <a href={`/departments/${dep.id}/edit`}>Edit Department</a>
                <a href={`/departments/${dep.id}`} data-method="delete">Delete Department</a>
            </div>
        ))
    }

    return (
        <div>
            <h1>Departments</h1>
            <a href="/departments/new">New Department</a>
            {renderDeps()}
        </div>
    );
};

export default Deps;