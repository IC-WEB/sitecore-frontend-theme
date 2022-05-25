window.addEventListener("load", () => {
    //========================= Position START ===========================
    if ($(".position-swiper").length > 0) {
        const positionSwiper = new Swiper(".position-swiper", {
            spaceBetween: 25,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                1024: {
                    spaceBetween: 30,
                },
            },
        });
    }
    const positionList = [
        {
            position: "Business Analyst",
            location: "Ploenchit · BKK",
            linkForm: "business-analyst_form",
            summary:
                "The Business Analyst will be responsible for identifying, gathering, defining and validating detailed business requirements, ensuring that the solution meets the defined requirements.",
            qualification:
                "<ul><li>Fresh graduates with a degree in any field, or experienced hires with up to 3 years experience in a BA role</li><li>Experience in writing user stories that meet all business needs and functional requirements</li><li>Ability to prioritize workload and meet tight deadlines</li><li>Highly analytical and motivated to solve problems</li><li>Basic understanding of latest software engineering principles and practices</li>",
        },
        {
            position: "UI/UX Designer",
            location: "Ploenchit · BKK",
            linkForm: "uxui-designer_form",
            summary:
                "The UI/UX Designer will be responsible for the design and implementation of all the experiences a user has when interacting with a digital tool. In addition, the UI/UX Designer will ensure that all elements of the online user experience are optimized for improved usability, usefulness, and exceptional visual design.",
            qualification:
                "<ul><li>Fresh graduates with a bachelor's degree in Design, Arts or related field, or experienced hires with up to 3 years experience in UI/UX design in digital products</li><li>Prior experience in UI/UX design work for both web/mobile products</li><li>Ability to discuss and explain design options clearly to key stakeholders</li><li>Experience with UI/UX and design tools such as Figma, Sketch, Adobe XD, Illustrator and photoshop</li></ul>",
        },
        {
            position: "Full Stack Engineer",
            location: "Ploenchit · BKK",
            linkForm: "fullstack-engineer_form",
            summary:
                "The Full Stack Engineer is highly skilled in web, mobile and backend development, responsible for designing, developing and maintaining applications across the platform.",
            qualification:
                "<ul><li>Fresh graduates with a degree in computer science, software engineering or related field, or experienced hires with up to 3 years experience as a full stack engineer</li><li>Good understanding of both front-end and back-end languages such as HTML, CSS, Ruby, PHP and Python</li><li>Knows a wide range of technologies and highly skilled in multiple programming languages</li><li>Able to perform development, testing and debugging work</li><li>Proven technical aptitude in one or more application programming domains, or “T-shaped” skills</li><li>Ability to work in an agile development environment</li></ul>",
        },
        {
            position: "Front-End Engineer",
            location: "Ploenchit · BKK",
            linkForm: "front-end-engineer_form",
            summary:
                "The Front-End Engineer is responsible for designing, developing and maintaining user experience features for the platforms/applications, contributing new ideas for website and mobile app development.",
            qualification:
                "<ul><li>Fresh graduates with a degree in computer science, software engineering or related field, or experienced hires with up to 3 years experience in front-end development</li><li>Good understanding of front-end development languages such as HTML5, CSS3 and Javascript</li><li>Able to perform development, testing and debugging work</li><li>Proven technical aptitude in one or more application programming domains, or “T-shaped” skills</li><li>Ability to work in an agile development environment</li></ul>",
        },
        {
            position: "Back-End Engineer",
            location: "Ploenchit · BKK",
            linkForm: "back-end-engineer_form",
            summary:
                "The Back-End Engineer is responsible for designing, developing and maintaining server-side components to ensure optimal performance and responsiveness of backend infrastructure to front-end requests.",
            qualification:
                "<ul><li>Fresh graduates with a degree in computer science, software engineering or related field, or experienced hires with up to 3 years experience in backend development</li><li>Good understanding of back-end development languages such as Ruby, PHP, Java, C, C++ and Python</li><li>Able to perform development, testing and debugging work</li><li>Proven technical aptitude in one or more application programming domains, or “T-shaped” skills</li><li>Ability to work in an agile development environment</li></ul>",
        },
        {
            position: "Tester",
            location: "Ploenchit · BKK",
            linkForm: "tester_form",
            summary:
                "The Tester will be responsible for analyzing the business requirements and establishing test design, inputting test data and executing the test cases.",
            qualification:
                "<ul><li>Fresh graduates with a degree in any field, or experienced hires with up to 3 years experience in a testing role</li><li>Meticulous and detailed oriented, strong attention to detail</li><li>Strong team player and ability to communicate with other team members</li></ul>",
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
                        <a href="./career/${positionList[idx].linkForm}.html" class="join-link">Join our team</a>
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

    //========================= Benefit START ===========================
    if ($(".benefit-swiper").length > 0) {
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
    }
    //========================= Benefit END ===========================
});
