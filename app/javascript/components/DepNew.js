import React from 'react';

const DepNew = () => {
    return (
        <div>
            <h1>New Department</h1>
            <a href="/">Back to All Departments</a>
            <div className="centerMe">
                <form className="form" action="/departments" method="post">
                    <h2>New Department Name</h2>
                    <input name="department[name]" />
                    <button type="submit">Add Department</button>
                </form>
            </div>
        </div>
    );
};

export default DepNew;