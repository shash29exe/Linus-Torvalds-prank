var titles = ["L", "LI", "LIN", "LINU", "LINUS", "LINUS ", "LINUS T", "LINUS TO", "LINUS TOR", "LINUS TORV", "LINUS TORVA", "LINUS TORVAL", "LINUS TORVALD", "LINUS TORVALDS"];
var currentTitleIndex = 0;
function changeTitle() {
    document.title = titles[currentTitleIndex];
    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
}
setInterval(changeTitle, 300);
