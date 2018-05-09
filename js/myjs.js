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

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});

M.AutoInit();