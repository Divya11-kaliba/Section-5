import React, { useState } from 'react';

const UserInput = ({onchange , userInput}) => {
  
    

    return (
        <div>
            <section id="user-input">
                <div className="input-group">
                    <p>
                        <label>Initial Investment</label>
                        <input
                            type="number"
                            required
                            value={userInput.initialInvestment}  
                            onChange={(event) => onchange('initialInvestment', event.target.value)} 
                        />
                    </p>

                    <p>
                        <label>Annual Investment</label>
                        <input
                            type="number"
                            required
                            value={userInput.annualInvestment}
                            onChange={(event) => onchange('annualInvestment', event.target.value)} 
                        />
                    </p>
                </div>

                <div id="user-group">
                    <p>
                        <label>Expected Return</label>
                        <input
                            type="number"
                            required
                            value={userInput.expectedReturn}
                            onChange={(event) => onchange('expectedReturn', event.target.value)}  
                        />
                    </p>

                    <p>
                        <label>Duration</label>
                        <input
                            type="number"
                            required
                            value={userInput.durationn}
                            onChange={(event) => onchange('durationn', event.target.value)} 
                        />
                    </p>
                </div>
            </section>
        </div>
    );
};

export default UserInput;
