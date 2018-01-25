//Write a JS function that calculates the total
// accumulated value for a monetary deposit by
// given principal sum,interest rate,
// compounding frequency and overall length.

function compoundInterest([principal, interestRate, compoundingPeriod, timespan]) {
    [principal, interestRate, compoundingPeriod, timespan] =
        [principal, interestRate, compoundingPeriod, timespan].map(Number);

    let compoundInterest = principal *
        Math.pow(1 + interestRate/(100*( 12/compoundingPeriod)), 12/compoundingPeriod * timespan);

    console.log(compoundInterest.toFixed(2));
}