import React from 'react';

const skillProgress = (skillName : string,percentage : number , color:string) => {
    return (
        <li>
            <h6 className="font-weight-600 font-size-14 text-uppercase text-zinc-800 dark:text-zinc-200">
                {skillName}
            </h6>
            <div className="progress mb-3">
                <div style={{
                    width: '100%',
                    backgroundColor: '#e0e0e0',
                    height: '20px',
                    overflow: 'hidden' // Ensures the inner bar doesn't overflow rounded corners
                }}>
                    <div style={{
                        width: `${percentage}%`,
                        backgroundColor: `${color}`, // Green color for the filled part
                        height: '100%',
                        transition: 'width 0.5s ease-in-out', // Smooth transition for percentage changes
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                    }}>
                    </div>
                </div>
            </div>

        </li>

    );
};

export default skillProgress;