/* =====================================================
   EXERCISE 1
   JavaScript Basics & Setup
===================================================== */

console.log("Welcome to the Community Portal");

window.onload = function () {

    alert("Welcome to the Community Portal!");

};


/* =====================================================
   DISPLAY CURRENT DATE
===================================================== */

document.getElementById("currentDate").innerText =
new Date().toDateString();


/* =====================================================
   EXERCISE 2
   Syntax, Data Types & Operators
===================================================== */

const portalName = "Community Portal";

const launchYear = 2026;

let totalSeats = 75;

console.log(
    `${portalName} launched in ${launchYear}`
);

totalSeats++;

console.log(
    "Updated Seat Count:",
    totalSeats
);


/* =====================================================
   EXERCISE 5
   Objects & Prototypes
===================================================== */

class Event {

    constructor(
        id,
        name,
        category,
        date,
        seats
    ) {

        this.id = id;
        this.name = name;
        this.category = category;
        this.date = date;
        this.seats = seats;
    }
}


/* Prototype Method */

Event.prototype.checkAvailability =
function () {

    return this.seats > 0;

};


/* =====================================================
   EXERCISE 6
   Arrays & Methods
===================================================== */

let events = [

    new Event(
        1,
        "Music Fest",
        "Music",
        "2026-12-01",
        20
    ),

    new Event(
        2,
        "Baking Workshop",
        "Workshop",
        "2026-10-15",
        10
    ),

    new Event(
        3,
        "Football Match",
        "Sports",
        "2026-11-20",
        5
    )

];


/* push() */

events.push(

    new Event(
        4,
        "Rock Concert",
        "Music",
        "2026-09-10",
        30
    )

);


/* filter() */

const musicEvents =
events.filter(

    event =>
    event.category === "Music"

);

console.log(
    "Music Events:",
    musicEvents
);


/* map() */

const formattedEvents =
events.map(

    event =>
    `Workshop on ${event.name}`

);

console.log(
    formattedEvents
);


/* =====================================================
   EXERCISE 4
   Functions, Scope, Closures,
   Higher Order Functions
===================================================== */

function addEvent(event) {

    events.push(event);

}


function registerUser(id) {

    const event =
    events.find(

        e => e.id === id

    );

    if (
        event &&
        event.seats > 0
    ) {

        event.seats--;

    }

}


/* Closure */

function registrationCounter() {

    let count = 0;

    return function () {

        count++;

        return count;

    };

}

const countRegistration =
registrationCounter();


/* Higher Order Function */

function filterEventsByCategory(
    category,
    callback
) {

    const result =
    events.filter(

        event =>
        event.category === category

    );

    callback(result);

}


/* =====================================================
   EXERCISE 3
   Conditionals, Loops,
   Error Handling
===================================================== */

function validateEvents() {

    events.forEach(

        event => {

            if (
                event.seats <= 0
            ) {

                console.log(
                    `${event.name} Full`
                );

            }

            else {

                console.log(
                    `${event.name} Available`
                );

            }

        }

    );

}


try {

    registerUser(1);

}

catch (error) {

    console.log(error);

}


/* =====================================================
   EXERCISE 5
   Object.entries()
===================================================== */

Object.entries(
    events[0]
).forEach(

    ([key, value]) => {

        console.log(
            key,
            value
        );

    }

);


/* =====================================================
   EXERCISE 7
   DOM Manipulation
===================================================== */

const container =
document.querySelector(
    "#eventContainer"
);


function displayEvents(
    data
) {

    container.innerHTML = "";

    data.forEach(

        event => {

            const card =
            document.createElement(
                "div"
            );

            card.className =
            "card";

            card.innerHTML = `

                <h3>
                    🎉 ${event.name}
                </h3>

                <div class="badge">
                    ${event.category}
                </div>

                <p>
                    <strong>Date:</strong>
                    ${event.date}
                </p>

                <p>
                    <strong>Seats:</strong>

                    <span class="${
                        event.seats > 5
                        ? "available"
                        : "low"
                    }">

                    ${event.seats}

                    </span>

                </p>

                <button
                onclick=
                "registerEvent(${event.id})">

                    Register

                </button>

            `;

            container.appendChild(
                card
            );

        }

    );

}


displayEvents(events);


/* =====================================================
   EXERCISE 8
   Event Handling
===================================================== */

function registerEvent(id) {

    registerUser(id);

    displayEvents(events);

    const total =
    countRegistration();

    document
    .getElementById(
        "registrationCount"
    )
    .innerText = total;

    alert(
        "Registration Successful!"
    );

}


/* onchange */

document
.getElementById(
    "categoryFilter"
)
.onchange = function () {

    const value =
    this.value;

    if (
        value === "All"
    ) {

        displayEvents(
            events
        );

    }

    else {

        displayEvents(

            events.filter(

                event =>
                event.category === value

            )

        );

    }

};


/* keydown */

document
.getElementById(
    "searchBox"
)
.addEventListener(

    "keyup",

    function () {

        const searchText =
        this.value
        .toLowerCase();

        const filtered =
        events.filter(

            event =>

            event.name
            .toLowerCase()
            .includes(
                searchText
            )

        );

        displayEvents(
            filtered
        );

    }

);


/* =====================================================
   EXERCISE 9
   Async JS, Promises,
   Async/Await
===================================================== */

fetch("events.json")

.then(

    response =>
    response.json()

)

.then(

    data => {

        console.log(
            "Fetched Events",
            data
        );

    }

)

.catch(

    error => {

        console.log(
            error
        );

    }

);


async function loadEvents() {

    document
    .getElementById(
        "loader"
    )
    .style.display =
    "block";

    try {

        const response =
        await fetch(
            "events.json"
        );

        const data =
        await response.json();

        console.log(
            data
        );

    }

    catch (error) {

        console.log(
            error
        );

    }

    finally {

        document
        .getElementById(
            "loader"
        )
        .style.display =
        "none";

    }

}

loadEvents();


/* =====================================================
   EXERCISE 10
   Modern JavaScript Features
===================================================== */

function welcomeUser(
    user = "Guest"
) {

    console.log(
        `Welcome ${user}`
    );

}


const sampleEvent =
events[0];


/* Destructuring */

const {

    name,
    category,
    seats

} = sampleEvent;


console.log(
    name,
    category,
    seats
);


/* Spread Operator */

const clonedEvents =

[
    ...events
];

console.log(
    clonedEvents
);


/* =====================================================
   EXERCISE 11
   Working with Forms
===================================================== */

document
.getElementById(
    "registrationForm"
)
.addEventListener(

    "submit",

    function (event) {

        event.preventDefault();

        const name =
        this.elements
        .name.value;

        const email =
        this.elements
        .email.value;

        let valid =
        true;

        document
        .getElementById(
            "nameError"
        )
        .innerText = "";

        document
        .getElementById(
            "emailError"
        )
        .innerText = "";


        if (
            name.trim() === ""
        ) {

            document
            .getElementById(
                "nameError"
            )
            .innerText =
            "Name is required";

            valid =
            false;

        }


        if (
            !email.includes("@")
        ) {

            document
            .getElementById(
                "emailError"
            )
            .innerText =
            "Enter valid email";

            valid =
            false;

        }


        if (valid) {

            sendRegistration(
                name,
                email
            );

        }

    }

);


/* =====================================================
   EXERCISE 12
   AJAX & Fetch API
===================================================== */

function sendRegistration(
    name,
    email
) {

    document
    .getElementById(
        "message"
    )
    .innerText =
    "Sending Registration...";


    setTimeout(

        () => {

            fetch(

                "https://jsonplaceholder.typicode.com/posts",

                {

                    method:
                    "POST",

                    headers: {

                        "Content-Type":
                        "application/json"

                    },

                    body:

                    JSON.stringify({

                        name,
                        email

                    })

                }

            )

            .then(

                response =>
                response.json()

            )

            .then(

                data => {

                    console.log(
                        data
                    );

                    document
                    .getElementById(
                        "message"
                    )
                    .innerText =

                    "Registration Successful ✅";

                }

            )

            .catch(

                () => {

                    document
                    .getElementById(
                        "message"
                    )
                    .innerText =

                    "Registration Failed ❌";

                }

            );

        },

        2000

    );

}


/* =====================================================
   EXERCISE 13
   Debugging & Testing
===================================================== */

console.log(
    "Debugging Started"
);

console.log(
    events
);

console.log(
    "Form Ready"
);


/* =====================================================
   EXERCISE 14
   jQuery
===================================================== */

$("#registerBtn").click(

    function () {

        $(".card")
        .fadeOut(300)
        .fadeIn(300);

    }

);