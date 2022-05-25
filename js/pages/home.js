window.addEventListener("load", () => {
    if ($('.highlight-swiper').length > 0) {
        const highlight = new Swiper(".highlight-swiper", {
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

    //========================= Job search START ===========================
    let options = {
        valueNames: ["job_title"],
        item: '<li><h3 class="job_title"></h3></li>',
    };

    let jobList = [
        { job_title: "Front-End Engineer" },
        { job_title: "Back-End Engineer" },
        { job_title: "Business Analyst" },
        { job_title: "UI/UX Designer" },
        { job_title: "Full Stack Engineer" },
        { job_title: "Tester" },
    ];

    const positionSearchList = {
        "Front-End Engineer": {
            job_title: "Front-End Engineer",
            location: "Ploenchit · BKK",
            hrefForm: "frontend-engineers",
            linkForm: "front-end-engineer_form",
            summary:
                "The Front-End Engineer is responsible for designing, developing and maintaining user experience features for the platforms/applications, contributing new ideas for website and mobile app development.",
            qualification:
                "<ul><li>Fresh graduates with a degree in computer science, software engineering or related field, or experienced hires with up to 3 years experience in front-end development</li><li>Good understanding of front-end development languages such as HTML5, CSS3 and Javascript</li><li>Able to perform development, testing and debugging work</li><li>Proven technical aptitude in one or more application programming domains, or “T-shaped” skills</li><li>Ability to work in an agile development environment</li></ul>",
        },
        "Back-End Engineer": {
            job_title: "Back-End Engineer",
            location: "Ploenchit · BKK",
            hrefForm: "backend-engineers",
            linkForm: "back-end-engineer_form",
            summary:
                "The Front-End Engineer is responsible for designing, developing and maintaining user experience features for the platforms/applications, contributing new ideas for website and mobile app development.",
            qualification:
                "<ul><li>Fresh graduates with a degree in computer science, software engineering or related field, or experienced hires with up to 3 years experience in front-end development</li><li>Good understanding of front-end development languages such as HTML5, CSS3 and Javascript</li><li>Able to perform development, testing and debugging work</li><li>Proven technical aptitude in one or more application programming domains, or “T-shaped” skills</li><li>Ability to work in an agile development environment</li></ul>",
        },
        "Business Analyst": {
            job_title: "Business Analyst",
            location: "Ploenchit · BKK",
            hrefForm: "business-analysts",
            linkForm: "business-analyst_form",
            summary:
                "The Business Analyst will be responsible for identifying, gathering, defining and validating detailed business requirements, ensuring that the solution meets the defined requirements.",
            qualification:
                "<ul><li>Fresh graduates with a degree in any field, or experienced hires with up to 3 years experience in a BA role</li><li>Experience in writing user stories that meet all business needs and functional requirements</li><li>Ability to prioritize workload and meet tight deadlines</li><li>Highly analytical and motivated to solve problems</li><li>Basic understanding of latest software engineering principles and practices</li>",
        },
        "UI/UX Designer": {
            job_title: "UI/UX Designer",
            location: "Ploenchit · BKK",
            hrefForm: "uxui-designer",
            linkForm: "uxui-designer_form",
            summary:
                "The UI/UX Designer will be responsible for identifying, gathering, defining and validating detailed business requirements, ensuring that the solution meets the defined requirements.",
            qualification:
                "<ul><li>Fresh graduates with a degree in any field, or experienced hires with up to 3 years experience in a BA role</li><li>Experience in writing user stories that meet all business needs and functional requirements</li><li>Ability to prioritize workload and meet tight deadlines</li><li>Highly analytical and motivated to solve problems</li><li>Basic understanding of latest software engineering principles and practices</li>",
        },
        "Full Stack Engineer": {
            job_title: "Full Stack Engineer",
            location: "Ploenchit · BKK",
            hrefForm: "fullstack-engineers",
            linkForm: "fullstack-engineer_form",
            summary:
                "The Full Stack Engineer will be responsible for identifying, gathering, defining and validating detailed business requirements, ensuring that the solution meets the defined requirements.",
            qualification:
                "<ul><li>Fresh graduates with a degree in any field, or experienced hires with up to 3 years experience in a BA role</li><li>Experience in writing user stories that meet all business needs and functional requirements</li><li>Ability to prioritize workload and meet tight deadlines</li><li>Highly analytical and motivated to solve problems</li><li>Basic understanding of latest software engineering principles and practices</li>",
        },
        Tester: {
            job_title: "Tester",
            location: "Ploenchit · BKK",
            hrefForm: "tester",
            linkForm: "tester_form",
            summary:
                "The Tester will be responsible for identifying, gathering, defining and validating detailed business requirements, ensuring that the solution meets the defined requirements.",
            qualification:
                "<ul><li>Fresh graduates with a degree in any field, or experienced hires with up to 3 years experience in a BA role</li><li>Experience in writing user stories that meet all business needs and functional requirements</li><li>Ability to prioritize workload and meet tight deadlines</li><li>Highly analytical and motivated to solve problems</li><li>Basic understanding of latest software engineering principles and practices</li>",
        },
    };

    let searchJobList = new List("findJob", options, jobList);

    let noItems = $(
        '<li class="item" id="no-items-found">no results found</li>'
    );

    // Hide result first
    searchJobList.visibleItems.forEach((i) => i.hide());

    searchJobList.on("searchComplete", function (values) {
        if ($("#search").val() == "") {
            searchJobList.visibleItems.forEach((i) => i.hide());
        }

        $("#findjob-list li").on("click", function () {
            const positionItem = $(this).text();
            if (positionItem) {
                $("#search").val(positionItem);
                const positionModalTemplate = `
                <div class="position-modal">
                    <div class="position-card">
                        <div class="row mb-4 px-4">
                            <div class="col-9">
                                <h3 class="position-title">${positionSearchList[positionItem].job_title}
                                </h3>
                                <p class="location">
                                    <img class="location-icon" src="/images/icon/location-icon.png" alt="Location">
                                    ${positionSearchList[positionItem].location}
                                </p>
                            </div>
                            <div class="col-3">
                                <img class="close-position-modal" src="/images/icon/minus-circle.png" alt="Close modal">
                            </div>
                        </div>
                        <div class="max-qualify px-4">
                            <h4>Job Summary</h4>
                            <p>${positionSearchList[positionItem].summary}</p>
                            <h4>Qualifications</h4>
                            ${positionSearchList[positionItem].qualification}
                        </div>
                        <div class="join-wrapper px-4">
                            <a href="./pages/career/${positionSearchList[positionItem].linkForm}.html?position=${positionSearchList[positionItem].hrefForm}" class="join-link">Join our team</a>
                        </div>
                    </div>
                </div>`;

                $("body").append(positionModalTemplate);
                $("body").addClass("overflow-hidden");

                $(".close-position-modal").on("click", () => {
                    $(".position-modal").remove();
                    $("body").removeClass("overflow-hidden");
                });
            }
        });
    });

    searchJobList.on("updated", function (list) {
        if (list.matchingItems.length == 0) {
            $(list.list).append(noItems);
        } else {
            noItems.detach();
        }
    });

    $("#search").on("keyup", function () {
        if ($(this).val() != "") {
            $(".search-group").css({
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
            });
            $(".search-icon").css({
                backgroundImage: "url('./assets/img/icon/close.png')",
            });
        } else {
            $(".search-group").css({
                borderBottomLeftRadius: "",
                borderBottomRightRadius: "",
            });
            $(".search-icon").css({
                backgroundImage: "",
            });
        }

        $(".search-icon").on("click", function () {
            $("#search").val("");
            $(".search-group").css({
                borderBottomLeftRadius: "",
                borderBottomRightRadius: "",
            });
            $(".search-icon").css({
                backgroundImage: "",
            });
            noItems.detach();
            searchJobList.visibleItems.forEach((i) => i.hide());
        });
    });

    //========================= Job search END ===========================

    //========================= Benefit START ===========================
    const benefitSwiper = new Swiper(".benefit-swiper", {
        spaceBetween: 25,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3.1,
                spaceBetween: 30,
            },
        },
    });

    //========================= Benefit END ===========================

    //========================= News and Activities START ===========================
    if ($('.na-swiper').length > 0) {
        const naSwiper = new Swiper(".na-swiper", {
            spaceBetween: 25,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3.1,
                    spaceBetween: 30,
                },
            },
        });
    }
    //========================= News and Activities END ===========================

    //========================= Position START ===========================
    const positionList = [
        {
            position: "Front-End Engineer",
            location: "Ploenchit · BKK",
            hrefForm: "frontend-engineers",
            linkForm: "front-end-engineer_form",
            summary:
                "The Front-End Engineer is responsible for designing, developing and maintaining user experience features for the platforms/applications, contributing new ideas for website and mobile app development.",
            qualification:
                "<ul><li>Fresh graduates with a degree in computer science, software engineering or related field, or experienced hires with up to 3 years experience in front-end development</li><li>Good understanding of front-end development languages such as HTML5, CSS3 and Javascript</li><li>Able to perform development, testing and debugging work</li><li>Proven technical aptitude in one or more application programming domains, or “T-shaped” skills</li><li>Ability to work in an agile development environment</li></ul>",
        },
        {
            position: "Back-End Engineer",
            location: "Ploenchit · BKK",
            hrefForm: "backend-engineers",
            linkForm: "back-end-engineer_form",
            summary:
                "The Back-End Engineer is responsible for designing, developing and maintaining server-side components to ensure optimal performance and responsiveness of backend infrastructure to front-end requests.",
            qualification:
                "<ul><li>Fresh graduates with a degree in computer science, software engineering or related field, or experienced hires with up to 3 years experience in backend development</li><li>Good understanding of back-end development languages such as Ruby, PHP, Java, C, C++ and Python</li><li>Able to perform development, testing and debugging work</li><li>Proven technical aptitude in one or more application programming domains, or “T-shaped” skills</li><li>Ability to work in an agile development environment</li></ul>",
        },
        {
            position: "Business Analyst",
            location: "Ploenchit · BKK",
            hrefForm: "business-analysts",
            linkForm: "business-analyst_form",
            summary:
                "The Business Analyst will be responsible for identifying, gathering, defining and validating detailed business requirements, ensuring that the solution meets the defined requirements.",
            qualification:
                "<ul><li>Fresh graduates with a degree in any field, or experienced hires with up to 3 years experience in a BA role</li><li>Experience in writing user stories that meet all business needs and functional requirements</li><li>Ability to prioritize workload and meet tight deadlines</li><li>Highly analytical and motivated to solve problems</li><li>Basic understanding of latest software engineering principles and practices</li>",
        },
    ];

    $(".position-card").each((idx, el) => {
        $(el).on("click", () => {
            const positionModalTemplate = `
            <div class="position-modal">
                <div class="position-card">
                    <div class="row mb-4 px-4">
                        <div class="col-9">
                            <h3 class="position-title">${positionList[idx].position}
                            </h3>
                            <p class="location">
                                <img class="location-icon" src="/images/icon/location-icon.png" alt="Location">
                                ${positionList[idx].location}
                            </p>
                        </div>
                        <div class="col-3">
                            <img class="close-position-modal" src="/images/icon/minus-circle.png" alt="Close modal">
                        </div>
                    </div>
                    <div class="max-qualify px-4">
                        <h4>Job Summary</h4>
                        <p>${positionList[idx].summary}</p>
                        <h4>Qualifications</h4>
                        ${positionList[idx].qualification}
                    </div>
                    <div class="join-wrapper px-4">
                        <a href="./pages/career/${positionList[idx].linkForm}.html?position=${positionList[idx].hrefForm}" class="join-link">Join our team</a>
                    </div>
                </div>
            </div>`;

            $("body").append(positionModalTemplate);
            $("body").addClass("overflow-hidden");

            $(".close-position-modal").on("click", () => {
                $(".position-modal").remove();
                $("body").removeClass("overflow-hidden");
            });
        });
    });

    //========================= Position END ===========================
});
