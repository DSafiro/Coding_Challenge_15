// Task 1: Base Structure Setup
const riskDashboard = document.getElementById("riskDashboard"); // Selects risk dashboard container using getElementById
console.log("Risk Dashboard Loaded"); // Outputs risk dashboard loaded

// Task 2: Adding Risk Items
function addRiskItem (riskName, riskLevel, department) {
    const riskCard = document.createElement("div"); // Creates new div class for risk card
    riskCard.setAttribute("class", "risk-card"); // Sets attribute to card

    const nameHeading = document.createElement("h3"); // Creates new heading for risk name
    nameHeading.textContent = riskName; // Adds risk name

    const levelLabel = document.createElement("label"); // Creates label for risk level
    levelLabel.textContent = riskLevel; // Adds risk level

    const departmentParagraph = document.createElement("p"); // Creates paragraph for department
    departmentParagraph.textContent = department; // Adds department

    riskCard.appendChild(nameHeading); // Appends name heading to risk card
    riskCard.appendChild(levelLabel); // Appends level label to risk card
    riskCard.appendChild(departmentParagraph); // Appends department paragraph to risk card

    // Task 3: Removing Risk Items
    const resolveButton = document.createElement("button"); // Creates button for resolving risk card
    resolveButton.textContent = "Resolve"; // Adds resolve text to button

    resolveButton.addEventListener("click", (event) => { // When resolve button is clicked => removes card from risk dashboard
        riskDashboard.removeChild(riskCard);
        event.stopPropagation(); // Prevents bubbling from parent container
    });

    riskCard.appendChild(resolveButton); // Appends resolve button to risk card

    riskDashboard.appendChild(riskCard); // Appends risk card to dashboard
}; // Function to add risk item

const riskForm = document.getElementById("riskForm"); // Selects risk form using getElementById
riskForm.addEventListener("submit", (event) => { // When submit is clicked -> creates new risk card with inputted information
    event.preventDefault();

    const riskName = document.getElementById("riskNameInput").value; // Grabs risk name from input
    const department = document.getElementById("departmentInput").value; // Grabs department from input
    const riskLevel = document.getElementById("riskLevelSelect").value; // Grabs risk level from selected choice

    addRiskItem(riskName, riskLevel, department); // Calls function to add new risk item
    riskForm.reset(); // Resets input fields to blank
}); // Creates new risk card when submitted

// Test Cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Market Fluctuations", "High", "Finance");