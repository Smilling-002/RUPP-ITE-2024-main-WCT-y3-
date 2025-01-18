function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating data fetching
        setTimeout(() => {
            const data = { studentName: "Oeurn soknai" }; // Simulated data
            resolve(data); // Resolving the promise with data
        }, 1000);
    });
}

async function fetchAndProcessData() {
    try {
        console.log('Fetching data...');
        const data = await fetchData(); // Awaiting the resolution of fetchData()
        console.log(`Data fetched! Student Name: ${data.studentName}`);
        
        // Processing data
        console.log('Processing data...');
        // Further data processing can go here...
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

// Call the function to execute
fetchAndProcessData();