import React from 'react';

const DepNew = () => {
    return (
        <div>
            <h1>New Department</h1>
            <form>
                <h2>New Department Name</h2>
                <input name="department[name]" />
                <button type="submit">Add Department</button>
            </form>
        </div>
    );
};

export default DepNew;