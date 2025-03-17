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
        event.stopPropagation(); // Prevents bubbling from risk dashboard (Task 6)
    });

    riskCard.appendChild(resolveButton); // Appends resolve button to risk card

    // Task 4: Risk Categorization
    if (riskLevel === "Low") { // If risk level equals low -> sets risk card to green
        riskCard.classList.add("low-level");
    } else if (riskLevel === "Medium") { // If risk level equals medium -> sets risk card to yellow
        riskCard.classList.add("medium-level");
    } else if (riskLevel === "High") { // If risk level equals high -> sets risk card to red
        riskCard.classList.add("high-level");
    };

    // Task 6: Event Propagation Fix
    riskCard.addEventListener("click", (event) => { // When risk card is clicked -> console logs risk card has been clicked
        console.log("Risk card has been clicked.");
        event.stopPropagation(); // Prevents dashboard wide event from occurring
    });

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

// Task 5: Bulk Risk Updates
const increaseRiskLevelsButton = document.getElementById("increaseRiskLevelsButton");

increaseRiskLevelsButton.addEventListener("click", () => { // If increase risk levels button is clicked -> increases the risk level of every card by one level
    const riskCardsList = document.querySelectorAll(".risk-card"); // Selects all cards with risk card class
    const riskCardsArray = [...riskCardsList]; // Converts list of risk cards into an array

    riskCardsArray.forEach(riskCard => { 
        const riskLevelLabel = riskCard.querySelector("label"); // Identifies level label in risk card

        if (riskLevelLabel.textContent === "Low") { // If level equals low when pressed -> increases level to medium and applies medium level class
            riskLevelLabel.textContent = "Medium"; // Replaces text with medium
            riskCard.classList.remove("low-level"); // Removes low level class
            riskCard.classList.add("medium-level"); // Applies medium level class
        } else if (riskLevelLabel.textContent === "Medium") { // If level equals medium when pressed -> increases level to high and applies high level class
            riskLevelLabel.textContent = "High"; // Replaces text with high
            riskCard.classList.remove("medium-level"); // Removes medium level class
            riskCard.classList.add("high-level"); // Applies high level class
        };
    }); 
}); // Updates risk cards when button is clicked

// Test Cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Market Fluctuations", "High", "Finance");
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
addRiskItem("Employee Retention", "Low", "HR");