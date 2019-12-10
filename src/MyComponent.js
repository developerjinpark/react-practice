import React from 'react';
import './MyComponent.scss';

const MyComponent = () => {
    return (
        <>
            <div className="MyComponent">
                <div className="inside">Using Sass</div>
            </div>
            <div className="box blue"/>
        </>
    );
}

export default MyComponent;