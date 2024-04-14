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
