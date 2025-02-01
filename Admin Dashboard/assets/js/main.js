// contribution js 

document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('minimized');
});



// Example: Download button functionality (placeholder for implementation)
document.getElementById('downloadButton').addEventListener('click', function() {
alert('Download feature to be implemented.');
});

// Example: Search bar functionality (placeholder for implementation)
document.getElementById('searchBar').addEventListener('input', function(event) {
const query = event.target.value.toLowerCase();
const tableRows = document.querySelectorAll('#listTable tr');
tableRows.forEach(row => {
    const itemName = row.cells[3]?.textContent.toLowerCase() || '';
    row.style.display = itemName.includes(query) ? '' : 'none';
});
});


document.getElementById('addContributionModal').addEventListener('hidden.bs.modal', function () {
// Clear the form fields after modal is closed
document.getElementById('eventName').value = '';
document.getElementById('amount').value = '';
document.getElementById('paymentMethod').value = 'gcash'; // Default option
});

document.querySelector('#addContributionModal form').addEventListener('submit', function(event) {
event.preventDefault();  // Prevent form submission

// Retrieve values from the form
const eventName = document.getElementById('eventName').value;
const amount = document.getElementById('amount').value;
const paymentMethod = document.getElementById('paymentMethod').value;
const paymentDate = document.getElementById('paymentDate').value;
const deadlineDate = document.getElementById('deadlineDate').value;

// Example action on form data, like submitting to server or saving locally
console.log(`Event: ${eventName}, Amount: ${amount}, Payment Method: ${paymentMethod}, Payment Date: ${paymentDate}, Deadline Date: ${deadlineDate}`);

// Optionally close the modal after submission
$('#addContributionModal').modal('hide');
});





//attendance system js


function displayImage(event) {
    var reader = new FileReader();
    reader.onload = function() {
        var output = document.getElementById('qr-code-img');
        output.src = reader.result;
        document.getElementById('qr-code-display').style.display = 'block';
    }
    reader.readAsDataURL(event.target.files[0]);
}




function displayRFID(event) {
// Retrieve the scanned RFID data from input
const rfidValue = event.target.value;

// Display the RFID ID if it has been scanned
if (rfidValue) {
    document.getElementById('rfid-id').textContent = rfidValue;
    document.getElementById('rfid-display').style.display = 'block';
} else {
    document.getElementById('rfid-display').style.display = 'none';
}
}





//event creator js



document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('minimized');
});


  // Open Add Event Tab
  function openAddEventTab() {
    document.getElementById('addEventTab').style.display = 'block';
}

// Close Add Event Tab
function closeAddEventTab() {
    document.getElementById('addEventTab').style.display = 'none';
}

// Open Update Event Tab
function openUpdateTab() {
    document.getElementById('updateTab').style.display = 'block';
}

// Close Update Event Tab
function closeUpdateTab() {
    document.getElementById('updateTab').style.display = 'none';
}

// Open View Details Tab
function openViewDetailsTab(image, title, description, dateTime) {
    document.getElementById('eventImage').src = image;
    document.getElementById('eventTitle').innerText = title;
    document.getElementById('eventDescription').innerText = description;
    document.getElementById('eventDateTime').innerText = dateTime;
    document.getElementById('viewDetailsTab').style.display = 'block';
}

// Close View Details Tab
function closeViewDetailsTab() {
    document.getElementById('viewDetailsTab').style.display = 'none';
}





//list borrowers js



document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('minimized');
});



function loadUserDetails(name, id) {
    // Update modal content with user details
    document.getElementById('userName').innerText = `Name: ${name}`;
    document.getElementById('userId').innerText = `Student ID: ${id}`;

    // Example data for borrowed items
    const borrowedItems = [
        { itemId: 'A001', quantity: 2, unit: 'pcs', itemName: 'Arduino' },
        { itemId: 'B005', quantity: 1, unit: 'pc', itemName: 'Ultrasonic' },
    ];

    // Populate the borrowed items table
    const tableBody = document.getElementById('borrowedItemsTable');
    tableBody.innerHTML = borrowedItems.map(item => `
        <tr>
            <td>${item.itemId}</td>
            <td>${item.quantity}</td>
            <td>${item.unit}</td>
            <td>${item.itemName}</td>
        </tr>
    `).join('');
}






//student officers js




document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('minimized');
});



// Example: Download button functionality (placeholder for implementation)
document.getElementById('downloadButton').addEventListener('click', function() {
alert('Download feature to be implemented.');
});

// Example: Search bar functionality (placeholder for implementation)
document.getElementById('searchBar').addEventListener('input', function(event) {
const query = event.target.value.toLowerCase();
const tableRows = document.querySelectorAll('#listTable tr');
tableRows.forEach(row => {
    const itemName = row.cells[3]?.textContent.toLowerCase() || '';
    row.style.display = itemName.includes(query) ? '' : 'none';
});
});


document.getElementById('student-officer-add-modal').addEventListener('hidden.bs.modal', function () {
// Clear the form fields after modal is closed
document.getElementById('eventName').value = '';
document.getElementById('amount').value = '';
document.getElementById('paymentMethod').value = 'gcash'; // Default option
});

document.querySelector('#student-officer-add-modal form').addEventListener('submit', function(event) {
event.preventDefault();  // Prevent form submission

// Retrieve values from the form
const eventName = document.getElementById('eventName').value;
const amount = document.getElementById('amount').value;
const paymentMethod = document.getElementById('paymentMethod').value;
const paymentDate = document.getElementById('paymentDate').value;
const deadlineDate = document.getElementById('deadlineDate').value;

// Example action on form data, like submitting to server or saving locally
console.log(`Event: ${eventName}, Amount: ${amount}, Payment Method: ${paymentMethod}, Payment Date: ${paymentDate}, Deadline Date: ${deadlineDate}`);

// Optionally close the modal after submission
$('#student-officer-add-modal').modal('hide');
});





// payment center js


document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('minimized');
});



// Example: Download button functionality (placeholder for implementation)
document.getElementById('downloadButton').addEventListener('click', function() {
alert('Download feature to be implemented.');
});

// Example: Search bar functionality (placeholder for implementation)
document.getElementById('searchBar').addEventListener('input', function(event) {
const query = event.target.value.toLowerCase();
const tableRows = document.querySelectorAll('#listTable tr');
tableRows.forEach(row => {
    const itemName = row.cells[3]?.textContent.toLowerCase() || '';
    row.style.display = itemName.includes(query) ? '' : 'none';
});
});


document.getElementById('addContributionModal').addEventListener('hidden.bs.modal', function () {
// Clear the form fields after modal is closed
document.getElementById('eventName').value = '';
document.getElementById('amount').value = '';
document.getElementById('paymentMethod').value = 'gcash'; // Default option
});

document.querySelector('#addContributionModal form').addEventListener('submit', function(event) {
event.preventDefault();  // Prevent form submission

// Retrieve values from the form
const eventName = document.getElementById('eventName').value;
const amount = document.getElementById('amount').value;
const paymentMethod = document.getElementById('paymentMethod').value;
const paymentDate = document.getElementById('paymentDate').value;
const deadlineDate = document.getElementById('deadlineDate').value;

// Example action on form data, like submitting to server or saving locally
console.log(`Event: ${eventName}, Amount: ${amount}, Payment Method: ${paymentMethod}, Payment Date: ${paymentDate}, Deadline Date: ${deadlineDate}`);

// Optionally close the modal after submission
$('#addContributionModal').modal('hide');
});
