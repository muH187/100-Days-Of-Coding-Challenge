// Question 40:
function make_album(artist:string, title:string, tracks?:number) {
    let album = {artist, title}
    if(tracks) {
        album["tracks"] = tracks
    }
    return album
}
console.log(make_album("Artist One", "The Frist Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Third", "The Third Album", 15));

// Question 41:
let magicians:string[] = ["The Black Rock", "Thomas Haunted", "Chris Killer"]
function display_name(magicians:string[]) {
    magicians.forEach(magician => {
        console.log(`He is ${magician}`);
    })
}
display_name(magicians)

// Question 42:
function make_greet(magicians:string []) {
    for ( let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Greet"
    }
}
make_greet(magicians)
display_name(magicians)