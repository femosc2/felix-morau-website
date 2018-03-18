function btn() {
  //
}
btn();


document.querySelector(".inProgress").addEventListener("click", function() {
  document.getElementById("tabsContainer").style.display = "none";
  document.getElementById("inProgressTabsContainer").style.display = "block";
});

document.querySelector(".completed").addEventListener("click", function() {
  document.getElementById("tabsContainer").style.display = "block";
  document.getElementById("inProgressTabsContainer").style.display = "none";
});

GitHubActivity.feed({
	username: "femosc2",
	selector: "#feed",
	limit: 20 // optional
});
