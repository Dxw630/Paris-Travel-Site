function searchDestinations() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let destinations = document.querySelectorAll(".destination");

    destinations.forEach(destination => {
        let name = destination.querySelector("h3").innerText.toLowerCase();
        if (name.includes(input)) {
            destination.style.display = "block";
        } else {
            destination.style.display = "none";
        }
    });
}
