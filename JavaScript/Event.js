
const open = (element, Link) => {
    let e = document.querySelector(element);
    return e.addEventListener('click' , () => {
        document.location.href = Link;
    })
}

open(".Twitter", "https://twitter.com/geshman1323");
open(".Instagram", "https://instagram.com/geshman1343");
open(".github", "https://github.com/geshman1323");
open(".Codepen", "https://codepen.io/geshman1343");
open(".O1", "https://geshman1323.github.io/Snake-Game");
open(".O2", "https://geshman1323.github.io/clock");
open(".O3", "https://geshman1323.github.io/Todo-list-app");
open(".O4", "https://geshman1323.github.io/Calculator");
open(".O5", "https://codepen.io/geshman1343");
open(".InstallBtn", "https://github.com/Geshman1323/Save-The-Ball/raw/main/P1033.apk ");