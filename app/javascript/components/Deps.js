import React from 'react';

const Deps = (props) => {
    const renderDeps = () => {
        return props.deps.map((dep) => (
            <div className="department">
                <h2>{`${dep.name}`}</h2>
                <a href={`/departments/${dep.id}`}>View Department</a>
                <a href={`/departments/${dep.id}/edit`}>Edit Department</a>
                <a href={`/departments/${dep.id}`} data-method="delete">Delete Department</a>
            </div>
        ))
    }

    return (
        <div>
            <div className="titlebar">
                <h1>Departments</h1>
                <a href="/departments/new">New Department</a>
            </div>
            <div className="tile">
                {renderDeps()}
            </div>
        </div>
    );
};

export default Deps;