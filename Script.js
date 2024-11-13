const names = [
    "NELMA", "BATIT", "JAMES", "ALLAN ", "BAIN",
    "NANO", "KING", "ATE KIM", "DADDY NI ARS", "INDA",
    "TE ARS", "DADDY NI KIM", "UYAB NELMA", "BONGS", "KODY SABAAN", "TE GISANE"
];

let selectedShapeId = null;
let selectedName = null;
let chosenShapes = []; // To track which shapes have been chosen

function chooseShape(shapeId) {
    if (chosenShapes.includes(shapeId)) {
        // If shape has already been chosen, show it as "chosen"
        alert("This shape has already been chosen.");
        return;
    }

    // If shape is already selected by the user, deselect it
    if (selectedShapeId === shapeId) {
        resetSelection();
        return;
    }

    // If no shape has been selected yet, select this shape
    if (selectedShapeId === null) {
        const shape = document.getElementById(`shape${shapeId}`);
        shape.classList.add('selected');
        selectedShapeId = shapeId;
        selectedName = names[shapeId - 1];  // Set the corresponding name
        document.getElementById("submitBtn").disabled = false;  // Enable the submit button
    }
}

function resetSelection() {
    // Reset the currently selected shape
    const shape = document.getElementById(`shape${selectedShapeId}`);
    shape.classList.remove('selected');
    selectedShapeId = null;
    selectedName = null;
    document.getElementById("submitBtn").disabled = true;  // Disable the submit button
}

function submitSelection() {
    if (selectedShapeId !== null) {
        // Mark this shape as chosen and disable further selection
        chosenShapes.push(selectedShapeId);
        document.getElementById("name").textContent = `You have selected: ${selectedName}`;

        // Disable the chosen shape visually
        const shape = document.getElementById(`shape${selectedShapeId}`);
        shape.classList.add('chosen');

        // Reset selection state
        resetSelection();
    }
}
