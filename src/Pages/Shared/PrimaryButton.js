import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary h-12">{children}</button>
    );
};

export default PrimaryButton;