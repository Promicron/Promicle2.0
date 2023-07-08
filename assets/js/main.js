AOS.init({
  duration: 800,
  easing: "slide",
  once: false,
});

function search_cat() {
  let input = document.getElementById("searchbar").value;
  let keywordContainer = document.getElementsByClassName("col").innerHTML;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("col");
  // console.log(x[2].innerText);
  // console.log(x[1]);
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}


// var trendingContent = document.getElementById("trendingCat");
// var pscienceContent = document.getElementById("pScienceCat");
// var socialContent = document.getElementById("socialCat");
// var animeContent = document.getElementById("animeCat");
// var mScienceContent = document.getElementById("mScienceCat");
// var moviesContent = document.getElementById("moviesCat");
// var tvShowsContent = document.getElementById("tvShowsCat");
// var extrasContent = document.getElementById("extrasCat");

// const openScience = () => {
//   trendingContent.style.display =
//     socialContent.style.display =
//     mScienceContent.style.display =
//     extrasContent.style.display =
//     tvShowsContent.style.display =
//     moviesContent.style.display =
//     animeContent.style.display =
//       "none";
//   pscienceContent.style.display = "block";
// };
// const openTrend = () => {
//   pscienceContent.style.display =
//     socialContent.style.display =
//     mScienceContent.style.display =
//     extrasContent.style.display =
//     tvShowsContent.style.display =
//     moviesContent.style.display =
//     animeContent.style.display = 
//       "none";
//   trendingContent.style.display = "flex";
// };
// const openMScience = () => {
//   pscienceContent.style.display =
//     socialContent.style.display =
//     trendingContent.style.display =
//     extrasContent.style.display =
//     tvShowsContent.style.display =
//     moviesContent.style.display =
//     animeContent.style.display =
//       "none";
//   mScienceContent.style.display = "flex";
// };
// const openSocial = () => {
//   pscienceContent.style.display =
//     trendingContent.style.display =
//     mScienceContent.style.display =
//     extrasContent.style.display =
//     tvShowsContent.style.display =
//     moviesContent.style.display =
//     animeContent.style.display =
//       "none";
//   socialContent.style.display = "flex";
// };
// const openExtras = () => {
//   pscienceContent.style.display =
//     trendingContent.style.display =
//     mScienceContent.style.display =
//     trendingContent.style.display =
//     tvShowsContent.style.display =
//     moviesContent.style.display =
//     animeContent.style.display =
//       "none";
//   extrasContent.style.display = "flex";
// };
// const openTvshows = () => {
//   pscienceContent.style.display =
//     trendingContent.style.display =
//     mScienceContent.style.display =
//     extrasContent.style.display =
//     trendingContent.style.display =
//     moviesContent.style.display =
//     animeContent.style.display =
//       "none";
//   tvShowsContent.style.display = "flex";
// };
// const openAnime = () => {
//   pscienceContent.style.display =
//     trendingContent.style.display =
//     mScienceContent.style.display =
//     extrasContent.style.display =
//     trendingContent.style.display =
//     tvShowsContent.style.display = 
//     moviesContent.style.display = 
//       "none";
//    animeContent.style.display = "flex";
// };
// const openMovies = () => {
//   pscienceContent.style.display =
//     trendingContent.style.display =
//     mScienceContent.style.display =
//     extrasContent.style.display =
//     trendingContent.style.display =
//     tvShowsContent.style.display = 
//     animeContent.style.display =
//     "none";
//     moviesContent.style.display = "flex";
// };
