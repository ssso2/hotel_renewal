// 드롭다운리스트
$(function () {
    $(".sortbox").click(function () {
        $(".dropdown.sort").toggleClass("on");
    });
    $(".dropdown-item-sort li").click(function () {
        let selectedSort = $(this).text();
        $(".sortbox").text(selectedSort);
        $(".dropdown.sort").removeClass("on");
    });
    $(".typebox").click(function () {
        $(".dropdown.type").toggleClass("on");
    });
    $(".dropdown-item-type li").click(function () {
        let selectedType = $(this).text();
        $(".typebox").text(selectedType);
        $(".dropdown.type").removeClass("on");
    });
    //데이트피커
    $(function () {
        $("#datepicker").datepicker({
            maxDate: "+2Y",
            dayNames: [
                "일요일",
                "월요일",
                "화요일",
                "수요일",
                "목요일",
                "금요일",
                "토요일",
            ],
            dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
            monthNames: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
            ],
            monthNamesShort: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
            ],
            showMonthAfterYear: true,
            showOtherMonths: false,
            yearSuffix: ".",
            dateFormat: "yy-mm-dd",
            showOn: "both",
            buttonImage: "../../img/icon/icon-plan.png",
            buttonImageOnly: true,
        });
    });
    $("#datepicker").datepicker("setDate", "today");
});

// 초기화
$(".pkg-filter-resetbtn").click(function () {
    $(".pkg-datepicker input[type='text']").val("");
    $(".typebox").text("전체");
    $(".pkg-filter-keyword input[type='checkbox']").prop("checked", false);
});
//상품개수 출력 기존꺼
// let pkgCount = $(".pkg-list-box > ul > li").length;
// $(".totalnum").text(pkgCount);

//필터타입+페이지네이션최종
$(document).ready(function () {
    const productItems = $(".product-item"); // 모든 상품 리스트 항목들
    const searchButton = $(".pkg-filter-searchbtn"); // 검색 버튼
    let selectedType = "전체"; // 기본값은 '전체'
    let selectedKeywords = "";
    let currentPage = 1; // 현재 페이지 번호
    const pagesPerGroup = 5; // 한 그룹에 표시할 페이지 수
    const itemsPerPage = 10; // 한 페이지에 표시할 상품 수
    let filteredItems = productItems; // 필터링된 아이템을 저장할 변수

    // 필터 선택 시 선택된 값을 저장하고 필터링 적용
    $(".filter-type").on("click", function () {
        selectedType = $(this).data("type"); // 선택된 필터 유형 저장
    });
    //키워드 선택시 값 저장 원본
    // $(".keword-wrap input[type='checkbox']").on("change", function () {
    //     selectedKeywords = $(".keword-wrap input[type='checkbox']:checked")
    //         .map(function () {
    //             return $(this).next("label").text(); // 체크된 키워드 가져오기
    //         })
    //         .get(); // 배열로 변환
    // });

    //다시 최종일까
    $(".keword-wrap input[type='checkbox']").on("change", function () {
        selectedKeywords = ""; // 선택된 키워드를 저장할 변수를 초기화

        // 체크된 체크박스에 대해 each 메서드로 반복 처리
        $(".keword-wrap input[type='checkbox']:checked").each(function () {
            selectedKeywords += $(this).next("label").text() + ","; // 체크된 키워드를 쉼표로 구분하여 문자열로 추가
        });

        // 마지막 쉼표 제거
        if (selectedKeywords !== "") {
            selectedKeywords = selectedKeywords.slice(0, -1); // 마지막 쉼표 제거
        }
    });

    // 검색 버튼 클릭 시 필터링 적용
    searchButton.on("click", function () {
        applyFilter(); // 검색 버튼 클릭 시 필터 적용
    });

    // 필터링 로직 통합
    function applyFilter() {
        // "전체" 선택 시, 모든 상품을 표시
        if (
            selectedType === "전체" ||
            selectedType === "all" ||
            selectedKeywords === "" ||
            productItems.filter(function () {
                return $(this).data("keyword") === "all"; // 키워드가 "all"인 상품 포함
            }).length > 0
        ) {
            filteredItems = productItems;
        } else {
            // 필터링된 상품들 가져오기
            filteredItems = productItems.filter(function () {
                const productType = $(this).data("type").split(" "); // 각 상품의 유형 가져오기
                const productKeywords = $(this).data("keyword") || "";
                const typeMatch = productType.includes(selectedType);
                const keywordMatch = selectedKeywords
                    .split(",")
                    .every(keyword => productKeywords.includes(keyword));
                return typeMatch && keywordMatch; // 필터 조건
            });
        }

        // 필터링된 항목 개수 출력
        $(".totalnum").text(filteredItems.length);

        // 필터링된 항목 표시 및 페이지네이션 생성
        currentPage = 1; // 필터 선택 또는 검색 시 첫 페이지로 돌아감
        paginateItems(filteredItems); // 필터링된 상품들을 페이지에 맞게 표시
    }
    // 필터링된 항목을 페이지에 맞게 나누어 출력하는 함수
    function paginateItems(items) {
        const totalPages = Math.ceil(items.length / itemsPerPage); // 총 페이지 수 계산
        if (currentPage > totalPages) currentPage = 1; // 현재 페이지가 전체 페이지를 넘지 않도록 설정
        createPagination(totalPages); // 페이지네이션 생성
        displayPage(items); // 현재 페이지에 맞는 상품 표시
        updateControlButtons(totalPages); // 이전/다음 버튼 상태 업데이트
    }

    // 페이지네이션 생성 함수
    function createPagination(totalPages) {
        const paginationContainer = $("#pagination"); // 페이지 번호 버튼들을 동적으로 생성하여 paginationContainer에 추가
        paginationContainer.empty(); // 기존의 버튼들을 모두 제거

        const currentGroup = Math.ceil(currentPage / pagesPerGroup); // 현재 페이지 그룹 계산
        const firstPageOfGroup = (currentGroup - 1) * pagesPerGroup + 1; // 그룹의 첫 페이지
        const lastPageOfGroup = Math.min(
            currentGroup * pagesPerGroup,
            totalPages
        ); // 그룹의 마지막 페이지

        // 이전 그룹 버튼 생성
        // if (currentGroup > 1) {
        //     const prevGroupButton = $("<button></button>");
        //     prevGroupButton.on("click", function () {
        //         currentPage = firstPageOfGroup - 1; // 이전 그룹으로 이동
        //         paginateItems(filteredItems); // 페이지네이션 갱신
        //     });
        //     paginationContainer.append(prevGroupButton);
        // }

        // 그룹 내 페이지 버튼 생성
        for (let i = firstPageOfGroup; i <= lastPageOfGroup; i++) {
            const pageButton = $("<button></button>"); // 새로운 버튼 생성
            pageButton.text(i);
            pageButton.addClass(i === currentPage ? "active" : "");
            pageButton.on("click", function () {
                currentPage = i;
                displayPage(filteredItems);
                createPagination(totalPages); // 페이지 버튼 갱신
            });
            paginationContainer.append(pageButton);
        }

        // 다음 그룹 버튼 생성
        // if (currentGroup < Math.ceil(totalPages / pagesPerGroup)) {
        //     const nextGroupButton = $("<button></button>");
        //     nextGroupButton.on("click", function () {
        //         currentPage = lastPageOfGroup + 1; // 다음 그룹으로 이동
        //         paginateItems(filteredItems); // 페이지네이션 갱신
        //     });
        //     paginationContainer.append(nextGroupButton);
        // }
    }

    // 현재 페이지에 맞는 항목들만 표시하는 함수
    function displayPage(items) {
        productItems.hide(); // 모든 항목 숨기기
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        // 현재 페이지에 맞는 항목만 표시
        items.slice(start, end).each(function () {
            $(this).show(); // DOM에 다시 추가
        });
    }

    // 이전, 다음, 첫 페이지, 마지막 페이지 버튼 상태 제어 함수
    function updateControlButtons(totalPages) {
        $("#prev-page").prop("disabled", currentPage === 1);
        $("#next-page").prop("disabled", currentPage === totalPages);
        $("#first-page").prop("disabled", currentPage === 1);
        $("#last-page").prop("disabled", currentPage === totalPages);
    }

    // 이전/다음/첫/마지막 페이지 클릭 핸들러
    $("#prev-page").on("click", function () {
        if (currentPage > 1) {
            currentPage--;
            displayPage(filteredItems);
            paginateItems(filteredItems);
        }
    });

    $("#next-page").on("click", function () {
        const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayPage(filteredItems);
            paginateItems(filteredItems);
        }
    });

    $("#first-page").on("click", function () {
        currentPage = 1;
        displayPage(filteredItems);
        paginateItems(filteredItems);
    });

    $("#last-page").on("click", function () {
        currentPage = Math.ceil(filteredItems.length / itemsPerPage);
        displayPage(filteredItems);
        paginateItems(filteredItems);
    });

    // 페이지 로드 시 전체 상품 개수 출력 및 초기 상태 설정
    const pkgCount = productItems.length;
    $(".totalnum").text(pkgCount); // 초기 상품 개수 출력
    paginateItems(productItems); // 전체 상품을 페이지네이션에 맞춰 출력
});

$(function () {
    var targetOffset = $(".pkg-section").offset().top - 90;
    $(".pkg-paging button").on("click", function () {
        $("html, body").animate({ scrollTop: targetOffset }, "fast");
    });
    $("#pagination").on("click", function () {
        $("html, body").animate({ scrollTop: targetOffset }, "fast");
    });
});
//최최종
// $(document).ready(function () {
//     const productItems = $(".product-item"); // 모든 상품 리스트 항목들
//     const searchButton = $(".pkg-filter-searchbtn"); // 검색 버튼
//     let selectedType = "전체"; // 기본값은 '전체'
//     let currentPage = 1; // 현재 페이지 번호
//     const itemsPerPage = 10; // 한 페이지에 표시할 상품 수
//     let filteredItems = productItems; // 필터링된 아이템을 저장할 변수

//     // 필터 선택 시 선택된 값을 저장하고 필터링 적용
//     $(".filter-type").on("click", function () {
//         selectedType = $(this).data("type"); // 선택된 필터 유형 저장
//     });

//     // 검색 버튼 클릭 시 필터링 적용
//     searchButton.on("click", function () {
//         applyFilter(); // 검색 버튼 클릭 시 필터 적용
//     });

//     // 필터링 로직 통합
//     function applyFilter() {
//         // "전체" 선택 시, 모든 상품을 표시
//         if (selectedType === "전체" || selectedType === "all") {
//             filteredItems = productItems;
//         } else {
//             // 필터링된 상품들 가져오기
//             filteredItems = productItems.filter(function () {
//                 const productType = $(this).data("type").split(" "); // 각 상품의 유형 가져오기
//                 return productType.includes(selectedType); // 필터 조건
//             });
//         }

//         // 필터링된 항목 개수 출력
//         $(".totalnum").text(filteredItems.length);

//         // 필터링된 항목 표시 및 페이지네이션 생성
//         currentPage = 1; // 필터 선택 또는 검색 시 첫 페이지로 돌아감
//         paginateItems(filteredItems); // 필터링된 상품들을 페이지에 맞게 표시
//     }

//     // 필터링된 항목을 페이지에 맞게 나누어 출력하는 함수
//     function paginateItems(items) {
//         const totalPages = Math.ceil(items.length / itemsPerPage); // 총 페이지 수 계산
//         if (currentPage > totalPages) currentPage = 1; // 현재 페이지가 전체 페이지를 넘지 않도록 설정

//         // 페이지네이션 버튼 갱신
//         $("#pagination").empty(); // 기존 페이지 버튼 초기화
//         for (let i = 1; i <= totalPages; i++) {
//             const pageButton = $("<button></button>").text(i);
//             pageButton.on("click", function () {
//                 currentPage = i; // 클릭한 페이지로 이동
//                 paginateItems(items); // 클릭한 페이지의 항목들만 표시
//             });
//             if (i === currentPage) {
//                 pageButton.addClass("active");
//             }
//             $("#pagination").append(pageButton);
//         }

//         // 첫 페이지의 항목 표시
//         displayPage(items);
//         updateControlButtons(totalPages); // 이전/다음 버튼 상태 업데이트
//     }

//     // 현재 페이지에 맞는 항목들만 표시하는 함수
//     function displayPage(items) {
//         productItems.hide(); // 모든 항목 숨기기
//         const start = (currentPage - 1) * itemsPerPage;
//         const end = start + itemsPerPage;

//         // 현재 페이지에 맞는 항목만 표시
//         items.slice(start, end).each(function () {
//             $(this).show(); // DOM에 다시 추가
//         });
//     }

//     // 이전, 다음, 첫 페이지, 마지막 페이지 버튼 상태 제어 함수
//     function updateControlButtons(totalPages) {
//         $("#prev-page").prop("disabled", currentPage === 1);
//         $("#next-page").prop("disabled", currentPage === totalPages);
//         $("#first-page").prop("disabled", currentPage === 1);
//         $("#last-page").prop("disabled", currentPage === totalPages);
//     }

//     // 이전/다음/첫/마지막 페이지 클릭 핸들러
//     $("#prev-page").on("click", function () {
//         if (currentPage > 1) {
//             currentPage--;
//             displayPage(filteredItems);
//             paginateItems(filteredItems);
//             // updateControlButtons(
//             // //     Math.ceil(filteredItems.length / itemsPerPage)
//             // );
//         }
//     });

//     $("#next-page").on("click", function () {
//         const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
//         if (currentPage < totalPages) {
//             currentPage++;
//             displayPage(filteredItems);
//             updateControlButtons(totalPages);
//         }
//     });

//     $("#first-page").on("click", function () {
//         currentPage = 1;
//         displayPage(filteredItems);
//         updateControlButtons(Math.ceil(filteredItems.length / itemsPerPage));
//     });

//     $("#last-page").on("click", function () {
//         currentPage = Math.ceil(filteredItems.length / itemsPerPage);
//         displayPage(filteredItems);
//         updateControlButtons(currentPage);
//     });

//     // 페이지 로드 시 전체 상품 개수 출력 및 초기 상태 설정
//     const pkgCount = productItems.length;
//     $(".totalnum").text(pkgCount); // 초기 상품 개수 출력
//     paginateItems(productItems); // 전체 상품을 페이지네이션에 맞춰 출력
// });

//검색
// $(document).ready(function () {
//     const filterTypeItems = $(".filter-type"); // 유형 필터 아이템들
//     const productItems = $(".product-item"); // 상품 리스트 항목들
//     const searchButton = $(".pkg-filter-searchbtn"); // 검색 버튼

//     let selectedType = "전체"; // 기본값은 '전체'

//     // 유형 필터 선택 시
//     filterTypeItems.on("click", function () {
//         selectedType = $(this).data("type"); // 선택된 유형을 저장
//     });

//     // 검색 버튼 클릭 시 필터링 동작
//     searchButton.on("click", function () {
//         productItems.detach();
//         productItems.each(function () {
//             const productType = $(this).data("type").split(" "); // 각 상품의 유형 가져오기

//             // 유형이 일치하거나 "전체"일 경우 표시
//             if (selectedType === "all" || productType.includes(selectedType)) {
//                 $(this).appendTo(".pkg-all");
//                 $(this).css("margin-right", "58.5px");
//             }
//         });
//     });
// });

// //상품개수 출력
// let pkgCount = $(".pkg-list-box > ul > li").length;
// $(".totalnum").text(pkgCount);

// //페이지네이션
// $(function () {
//     const PerPage = 10; // 한 페이지에 보여줄 상품 수
//     let currentPage = 1;

//     // 모든 <li> 요소를 가져옴
//     const pkgItems = $(".pkg-list-box > ul > li");
//     const totalPkg = pkgItems.length; // 전체 상품 개수
//     const totalPages = Math.ceil(totalPkg / PerPage); // 총 페이지 수

//     // 상품 리스트를 페이지에 맞게 보여주는 함수
//     function displayPkglists(page) {
//         const startIndex = (page - 1) * PerPage;
//         const endIndex = startIndex + PerPage - 1;

//         // 모든 <li>를 숨김 처리
//         pkgItems.each(function (index) {
//             $(this).hide();
//             if (index >= startIndex && index <= endIndex) {
//                 // 현재 페이지에 해당하는 상품만 표시
//                 $(this).show();
//             }
//         });
//     }

//     // 페이지네이션 생성 및 갱신 함수
//     function createPagination() {
//         const paginationContainer = $("#pagination"); // 페이지 번호 버튼들을 동적으로 생성하여 paginationContainer에 추가
//         paginationContainer.empty(); // 기존의 버튼들을 모두 제거

//         const currentGroup = Math.ceil(currentPage / 5); // 현재 페이지 그룹 계산
//         const firstPageOfGroup = (currentGroup - 1) * 5 + 1; // 그룹의 첫 페이지
//         const lastPageOfGroup = Math.min(currentGroup * 5, totalPages); // 그룹의 마지막 페이지

//         for (let i = firstPageOfGroup; i <= lastPageOfGroup; i++) {
//             const pageButton = $("<button></button>"); // 새로운 버튼 생성
//             pageButton.text(i);
//             pageButton.addClass(i === currentPage ? "active" : "");
//             pageButton.on("click", function () {
//                 currentPage = i;
//                 displayPkglists(currentPage);
//                 createPagination(); // 없으면 페이지 버튼이 갱신되지 않음
//             });
//             paginationContainer.append(pageButton); // 버튼 추가
//         }

//         // 이전, 다음, 첫 페이지, 마지막 페이지 버튼 상태 제어
//         $("#prev-page").prop("disabled", currentPage === 1);
//         $("#next-page").prop("disabled", currentPage === totalPages);
//         $("#first-page").prop("disabled", currentPage === 1);
//         $("#last-page").prop("disabled", currentPage === totalPages);
//     }

//     // 이전 페이지로 이동
//     $("#prev-page").on("click", function () {
//         if (currentPage > 1) {
//             currentPage--;
//             displayPkglists(currentPage);
//             createPagination();
//         }
//     });

//     // 다음 페이지로 이동
//     $("#next-page").on("click", function () {
//         if (currentPage < totalPages) {
//             currentPage++;
//             displayPkglists(currentPage);
//             createPagination();
//         }
//     });

//     // 첫 번째 페이지로 이동
//     $("#first-page").on("click", function () {
//         currentPage = 1;
//         displayPkglists(currentPage);
//         createPagination();
//     });

//     // 마지막 페이지로 이동
//     $("#last-page").on("click", function () {
//         currentPage = totalPages;
//         displayPkglists(currentPage);
//         createPagination();
//     });
//     $(function () {
//         var targetOffset = $(".pkg-section").offset().top - 90;
//         $(".pkg-paging button").on("click", function () {
//             $("html, body").animate({ scrollTop: targetOffset }, "fast");
//         });
//         $("#pagination").on("click", function () {
//             $("html, body").animate({ scrollTop: targetOffset }, "fast");
//         });
//     });
//     // 페이지네이션 초기화
//     displayPkglists(currentPage);
//     createPagination();
// });
