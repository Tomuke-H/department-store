import React from 'react';

const Deps = (props) => {
    return (
        <div>
            <h1>Department</h1>
            <h2>{`${JSON.stringify(props.dep)}`}</h2>
        </div>
    );
};

export default Deps;