 const reservationSearchBtn = document.querySelector(".reservation-search-btn");
const noSelect = document.querySelector(".no-select");
const searchResults = document.querySelector(".search-results-wrap");
const searchResultsTab = document.querySelectorAll(".search-results-wrap .tab > li");
const searchResultsTabCont = document.querySelectorAll(".search-results-wrap .tab-cont");

// 예약 페이지 검색 버튼 놀렀을 때 아래 검색 내용 보이게 하기
reservationSearchBtn.addEventListener("click",function(){
    noSelect.classList.remove("on");
    searchResults.classList.add("on");
});

// 예약페이지 검색 결과 탭 이동
for(let i = 0; i < searchResultsTab.length; i++){
    searchResultsTab[i].addEventListener("click",function(){
        for(let j = 0; j < searchResultsTab.length; j++){
            searchResultsTab[j].classList.remove("on");
            searchResultsTabCont[j].classList.remove("on");
        }
        searchResultsTab[i].classList.add("on");
        searchResultsTabCont[i].classList.add("on");
    });
}


