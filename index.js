console.log("io game yes yes");

window.onload = function() {
    console.log("the document has loadednated");

    const connect_button = document.getElementById("connectbutton");
    const username_input = document.getElementById("usernameinput");
    const gameselect = document.getElementById("gameselect");

    connect_button.onclick = function() {
        const username = username_input.value;
        const game = gameselect.options[gameselect.selectedIndex].text;

        window.location.href = "/IO/" + game + ".html";

        console.log("Joining game: " + game + " with username: " + username);
    }
}