const map_radius = 2500;;
const other_snakes = [];
const player_snake = {

};
const orbs = [

];
const camera_position = 0;

window.onload = function() {
    console.log("Slither window has loaded. Loading game...");

    const url = new URL(window.location.href);
    const username = url.searchParams.get("u");

    console.log("Slither game loaded. Username: " + username);
}