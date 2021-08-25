import React from 'react';

const Deps = (props) => {
    return (
        <div>
            <h1>Departments</h1>
            <h2>{`${JSON.stringify(props.deps)}`}</h2>
        </div>
    );
};

export default Deps;