function calculateRequirements() {
    // Get user inputs
    const challengeType = document.getElementById('challenge-type').value;
    const duration = parseInt(document.getElementById('duration').value);
    const tradingInstrument = document.getElementById('trading-instrument').value;
    const positionSize = parseFloat(document.getElementById('position-size').value);

    // Define required lots for each challenge type
    const requiredLots = {
        bronze: 15,
        silver: 30,
        gold: 90
    };

    // Calculate the number of trades required
    const totalLots = requiredLots[challengeType];
    const numberOfTrades = totalLots / positionSize;
    const dailyTrades = numberOfTrades / duration;

    // Display user inputs
    document.getElementById('input-challenge-type').innerText = `Challenge Type: ${challengeType.charAt(0).toUpperCase() + challengeType.slice(1)} Challenge`;
    document.getElementById('input-duration').innerText = `Duration: ${duration} days`;
    document.getElementById('input-trading-instrument').innerText = `Trading Instrument: ${tradingInstrument}`;
    document.getElementById('input-position-size').innerText = `Position Size per Trade: ${positionSize} lots`;

    // Display results
    document.getElementById('result-total-lots').innerText = `Total Lots Required: ${totalLots} lots`;
    document.getElementById('result-number-of-trades').innerText = `Number of Trades Required: ${numberOfTrades.toFixed(0)} trades`;
    document.getElementById('result-daily-trades').innerText = `Daily Trades Required: ${dailyTrades.toFixed(0)} trades/day`;

    // Display recommendations
    document.getElementById('recommendation').innerText = `To complete the ${challengeType.charAt(0).toUpperCase() + challengeType.slice(1)} Challenge in ${duration} days, aim for approximately ${dailyTrades.toFixed(0)} trades per day with a position size of ${positionSize} lots per trade. Ensure consistent trading activity throughout the duration to meet the required volume.`;
}

function saveResults() {
    // Function to save results as a PDF or prompt for screenshot
    alert('Please take a screenshot or save the results for future reference.');
}