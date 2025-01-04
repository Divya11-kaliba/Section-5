import React from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment';

const Results = ({ input }) => {

    const resultData = calculateInvestmentResults(input);




    if (!resultData || resultData.length === 0) {
        return <p>No data available. Please provide valid input.</p>;
    }


    const initialInvestment =
        resultData[0].valueEndOfYear -
        resultData[0].annualInvestment -
        resultData[0].interest;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest Year</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((yearData) => {

                    const totalInterest =
                        yearData.valueEndOfYear -
                        yearData.annualInvestment * yearData.year -
                        initialInvestment;


                    const investedCapital =
                        yearData.valueEndOfYear - totalInterest;

                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Results;
