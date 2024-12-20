import React from 'react';

const Experience = ({ name }) => {
    return (
        <div>
    {/* Experience page */}
    <div class="content-wrapper">
        <article class="ac-container">
            <h1 id="work-experience">Work Experience</h1>
            <div>
                <input id="ac-work-1" name="accordion-work" type="radio" checked={true} />
                <label for="ac-work-1">Developer · <i>Infinica a Doxee Company, Vienna, Austria</i> · <span
                        class="experience-subsection-year">November 2022 - Present</span></label>
                <div class="ac-medium">
                    <div class="experience-panel">
                        <div class="panel-body">
                            <ul>
                                <li>
                                    Added SFTP client support to Resource Access Layer, including listing, moving,
                                    deleting and renaming
                                    resources as well as retrieving properties using Apache MINA SSHD.
                                </li>
                                <li>
                                    Used JAXB and XSD to specify and partially implement a font configuration XML
                                    file for configuring
                                    custom font files accross multiples projects for Doxee Business Designer and
                                    Template Designer using
                                    Apache FOP.
                                </li>
                                <li>
                                    Developed and maintained REST-API using Java, XML, and XPath for Design and
                                    Authoring tools Doxee
                                    Business Designer, Template Designer and Composer.
                                </li>
                                <li>
                                    Implemented PDF/A concatenation and validation modules in Doxee Process Engine
                                    using Apache PDFBox
                                    and veraPDF.
                                </li>
                                <li>
                                    Developed features for a conversion project migrating new customers.
                                </li>
                                <li>
                                    Working under agile project management with international colleagues and partner
                                    firms.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <input id="ac-work-2" name="accordion-work" type="radio" />
                <label for="ac-work-2">Quality Management Intern · <i>BAWAG P.S.K., Vienna, Austria</i> · <span>July
                        2019 - August 2019</span></label>
                <div class="ac-medium">
                    <div class="panel-body">
                        <ul>
                            <li>
                                Set up Appium test automation library for end-to-end testing of the BAWAG Banking
                                App on Android and
                                iOS using Java.
                            </li>
                            <li>
                                Tested software and identified bugs within a tightly controlled sandbox environment
                                before
                                production release
                            </li>
                            <li>
                                Developed courteous and effective working relationships with coworkers, senior
                                developers, and
                                marketing.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <input id="ac-work-3" name="accordion-work" type="radio" />
                <label for="ac-work-3">Digital Banking Intern · <i>BAWAG P.S.K., Vienna, Austria</i> · <span>July
                        2018 - August 2018</span></label>
                <div class="ac-medium">
                    <div class="panel-body">
                        <ul>
                            <li>
                                Contributed to test automation library for a web application by creating and
                                implementing test cases in Selenium, Cucumber, and Java.
                            </li>
                            <li>
                                Created spreadsheets using Microsoft Excel for daily and weekly manual testing and
                                reporting.
                            </li>
                            <li>
                                Regularly completed automated testing and analysis within SCRUM workflow.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </article>

        <article class="ac-container">
            <h1 id="education-experience">Education</h1>
            <div>
                <input id="ac-education-1" name="accordion-education" type="radio" checked={true} />
                <label for="ac-education-1">Interactive Digital Media MSc. · <i>Trinity College Dublin</i> ·
                    <span>September 2024 - September 2025 (expected)</span></label>
                <div class="ac-medium">
                    <div class="experience-panel">
                        <div class="panel-body">
                            <ul>
                                <li>
                                    Relevant coursework: Visual Computing and Design, Programming for Digital Media,
                                    Contextual Media, Interactive Narratives,
                                    Audio and Sensor Technologies.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <input id="ac-education-2" name="accordion-education" type="radio" />
                <label for="ac-education-2">Software and Information Engineering BSc. · <i>TU Wien</i> ·
                    <span>September 2017 - October 2022</span></label>
                <div class="ac-medium">
                    <div class="panel-body">
                        <ul>
                            <li>
                                Relevant coursework: Software Engineering and Project Management, Interface and
                                Interaction Design, Distributed Systems,
                                Introduction to Artificial Intelligence, Pilots in Mobile Interaction: User-centered
                                Interaction Research and Evaluation
                            </li>
                            <li>
                                Thesis: "Bias in Machine Learning Algorithms for Automotive Applications and Related
                                Ethical Concerns" (ECTS-Grade A).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    </div>

    <div class="bg-rect exp-rect">
    </div>
    </div>

    );
};

export default Experience;