let myBooking = null;


// Initially all six slots are available

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

        if (myBooking == i) {

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

    document.getElementById("heroAvailable").innerHTML =
        availableCount + " / 6";

}


// Booking Process

document.getElementById("bookingForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;

    let vehicle = document.getElementById("vehicle").value;

    let slot = Number(document.getElementById("slot").value);


    if (occupiedSlots.includes(slot)) {

        alert("This parking space is already booked!");

    }

    else if (myBooking != null) {

        alert("You already have a booking!");

    }

    else if (myBooking = myBooking.slot) {

     alert("You already have a booking!");

     }

    else {

        myBooking = slot;

        document.getElementById("result").innerHTML =

            "Booking Successful!<br>" +
            "Customer: " + name + "<br>" +
            "Vehicle: " + vehicle + "<br>" +
            "Parking Space: " + slot;

        document.getElementById("cancelButton").disabled = false;

        document.getElementById("bookingForm").reset();

        updateSlots();

    }

});


// Cancel Booking

function cancelBooking() {

    if (myBooking != null) {

        myBooking = null;

        document.getElementById("result").innerHTML =
            "Your parking reservation has been cancelled!";

        document.getElementById("cancelButton").disabled = true;

        updateSlots();

    }

    else {

        alert("No active booking found!");

    }

}


// Initial display

updateSlots();