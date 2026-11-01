// Function to update the ledger
function updateLedger() {
    const name = document.getElementById('studentName').value;
    const amount = document.getElementById('amount').value;
    
    // This is a basic simulation. 
    // To make this save permanently, you would connect this function 
    // to a free database like Firebase or use GitHub's JSON files.
    alert("Updating " + name + " with amount: " + amount);
    console.log("Saving to database...");
}

