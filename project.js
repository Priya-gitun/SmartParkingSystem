
// Store multiple bookings
let myBookings = [];

// Slots booked by other users
let occupiedSlots = [];

// Update parking availability
function updateSlots() {

    let availableCount = 0;
    let occupiedCount = 0;

    for (let i = 1; i <= 6; i++) {

        let box = document.getElementById("s" + i);

        let option = document.querySelector(
            "#slot option[value='" + i + "']"
        );

        let myBooking = myBookings.find(
            booking => booking.slot === i
        );

        if (myBooking) {

            box.className = "slot my-slot";

            box.querySelector("p").innerHTML = "Your Space";

            box.querySelector("small").innerHTML =
                "Successfully Reserved";

            occupiedCount++;
            option.disabled = true;

        }

        else if (occupiedSlots.includes(i)) {

            box.className = "slot occupied";

            box.querySelector("p").innerHTML = "Booked";

            box.querySelector("small").innerHTML =
                "Not Available";

            occupiedCount++;
            option.disabled = true;

        }

        else {

            box.className = "slot available";

            box.querySelector("p").innerHTML = "Available";

            box.querySelector("small").innerHTML =
                "Click Book Now to reserve";

            availableCount++;
            option.disabled = false;

        }
    }

    // Update dashboard
    document.getElementById("available").innerHTML =
        availableCount;

    document.getElementById("occupied").innerHTML =
        occupiedCount;

    document.getElementById("total").innerHTML = 6;

}


// Booking Process
document.getElementById("bookingForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;

    let vehicle = document.getElementById("vehicle").value;

    let slot = Number(document.getElementById("slot").value);


     // booked slots
     if(myBookings==booking.vehicle)
        {
    alert("This parking space is already booked!");

        }

    // Check whether slot is already booked
    if (occupiedSlots.includes(slot)) {

        alert("This parking space is already booked!");

    }

    // Check whether the same user already booked this slot
    else if (myBookings.some(booking => booking.slot === slot)) {

        alert("You have already booked this parking space!");

    }

    else if (!slot || slot < 1 || slot > 6) {

        alert("Please select a valid parking space!");

    }

    else {

        // Add new booking
        myBookings.push({
            name: name,
            vehicle: vehicle,
            slot: slot
        });

        // Display all bookings
        displayBookings();

        // Enable cancel button
        document.getElementById("cancelButton").disabled = false;

        // Reset form
        document.getElementById("bookingForm").reset();

        // Update parking slots
        updateSlots();

        alert("Parking slot booked successfully!");

    }

});


// Display all bookings
function displayBookings() {

    let result = document.getElementById("result");

    result.innerHTML = "";

    myBookings.forEach((booking, index) => {

        result.innerHTML +=
            "Booking " + (index + 1) + "<br>" +
            "Customer: " + booking.name + "<br>" +
            "Vehicle: " + booking.vehicle + "<br>" +
            "Parking Space: " + booking.slot +
            "<hr>";

    });

}


// Cancel all bookings
function cancelBooking() {

    if (myBookings.length > 0) {

        myBookings = [];

        document.getElementById("result").innerHTML =
            "All your parking reservations have been cancelled!";

        document.getElementById("cancelButton").disabled = true;

        updateSlots();

    }

    else {

        alert("No active booking found!");

    }

}


// Initial display
updateSlots();
