import React from 'react';

const Deps = (props) => {
    const renderDeps = () => {
        return props.deps.map((dep) => (
            <div>
                <h2>{`Department: ${dep.name}`}</h2>
                <a href={`departments/${dep.id}`}>View Department</a>
            </div>
        ))
    }

    return (
        <div>
            <h1>Departments</h1>
            {renderDeps()}
        </div>
    );
};

export default Deps;