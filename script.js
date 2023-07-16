// Initialize and display the map
function initMap() {
    // Set map options (customize as needed)
    var options = {
        center: { lat: 37.7749, lng: -122.4194 }, // San Francisco, CA as default center
        zoom: 12
    };

    // Create the map object
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Initialize the event array
    var events = [];

    // Function to add an event marker
    function addEvent() {
        var eventName = document.getElementById('event-input').value;

        // Create a marker for the event
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            title: eventName
        });

        // Add the event to the array
        events.push(eventName);

        // Clear the input field
        document.getElementById('event-input').value = '';
    }

    // Display existing events on the map
    function displayEvents() {
        events.forEach(function (eventName) {
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                map: map,
                title: eventName
            });
        });
    }

    // Call the displayEvents function to show any existing events on the map
    displayEvents();
}
