import React from 'react';
import $ from 'jquery';
import createCard from '../assets/js/cards.js';
import data from '../assets/data/projects.json';

const Projects = ({ name }) => {
    return (
        <div>
    {/* Projects page content */}
    <div class="container">
        <article id="projects-content" class="row">
                {/* Games panel */}
                <a class="project-panel panel-1 col-12 col-lg-5 mt-3 mt-lg-0 m-lg-3" href="games.html">
                  <div class="panel-header">
                      <p>Games</p>
                  </div>
                </a>
                {/* Music panel */}
                <a class="project-panel panel-2 col-12 col-lg-5 mt-3 mt-lg-0 m-lg-3" href="music.html">
                  <div class="panel-header">
                      <p>Music</p>
                  </div>
                </a>
                {/* Github panel
                <a class="project-panel col-12 col-lg-5 mt-3 mt-lg-0 m-lg-3" href="github.html">
                  <div class="panel-header">
                      <p>Github</p>
                  </div>
                </a> */}
        </article>

        <article class="content-wrapper row">
          <h1 class="panel-3">Projects</h1>
            <div class="container">
                <div class="row">
                  <div id="filters" class="col ms-auto">

                  </div>
                  <div class="col-3 col-md-1">
                    <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="sort-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort by
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li class="mt-0"><a id="sort-by-name" class="dropdown-item" href="#">Name</a></li>
                        <li><a id="sort-by-name-desc" class="dropdown-item" href="#">Name (desc.)</a></li>
                        {/* <li><a id="sort-by-date" class="dropdown-item" href="#">Date</a></li> */}
                        {/* <li><a id="sort-by-date-desc" class="dropdown-item" href="#">Date (desc.)</a></li> */}
                      </ul>
                    </div>         
                  </div>
                </div>
                <div id="projects" class="row mt-2">
            
                </div>
            </div>                   
        </article>
    </div>
    {/* Background rectangle */}
    <div class="bg-rect" style={{height: "450px"}}>
    </div>
    </div>
    );
};
document.addEventListener('DOMContentLoaded', function () {

    //project data is read from json and unique tags contains a list of all tags in all projects with repetitions removed
    let projectData, uniqueTags, currentProjects;

            console.log(data)
            projectData = data.projects;
            console.log(projectData);
            
            uniqueTags = generateUniqueTags();
            console.log(uniqueTags);

            createButtons(uniqueTags);

            currentProjects = projectData;
            displayAllProjects(projectData);
            
            $("#sort-by-name").click(() => sortProjects(SortProperty.NAME), false);
            $("#sort-by-name-desc").click(() => sortProjects(SortProperty.NAME, true));
            $("#sort-by-date").click(() => sortProjects(SortProperty.DATE), false);
            $("#sort-by-date-desc").click(() => sortProjects(SortProperty.DATE, true));



    // find all the unique tags in our data
    function generateUniqueTags() { 
        let uniqueTags = new Set(); // use Set for collecting unique tags
        // Iterate over project data to collect tags
        projectData.forEach(element => {
            if (element["Tags"]) { // Check if "Tags" exists
                element["Tags"].forEach(tag => {
                    uniqueTags.add(tag);
                });
            }
        });

        return uniqueTags;
    }


    // create buttons in our html based on a list of names
    function createButtons(list) {
        list.forEach(item => {
            console.log(item);
            let newButton = $(`<button id="filter-button-${item}" class="button btn btn-primary col-4 m-1">${item}</button>`);
            // Add click event listener
            newButton.on('click', function() {
                console.log(item);
                filterProjects(item);
            });
            console.log(newButton);
            $('#filters').append(newButton);
        });
    }


    // when a button is clicked filter by that 'tag'
    function filterProjects(tag) {  
        // Filter projects by selected tag
        let filteredProjects = projectData.filter(project =>
            project["Tags"] && project["Tags"].includes(tag));

            console.log("success ran filterfunction");
        currentProjects = filteredProjects;
        displayAllProjects(currentProjects);
    }

    const SortProperty = {
        DATE: "Date", 
        NAME: "Name"
    }

    function sortProjects(prop, sortBackwards) {
        console.log("sorting projects");
        let sortedProjects;
        switch (prop) {
            case SortProperty.DATE:
                // TODO                              
                break;
            case SortProperty.NAME:
                if (sortBackwards) {
                    console.log("sorting descending");
                    sortedProjects = currentProjects.sort((a, b) =>
                        b["Name"].localeCompare(a["Name"])
                    );  
                } else {
                    console.log("name: ", currentProjects[0]["Name"].localeCompare(currentProjects[1]["Name"]));
                    console.log("sorting ascending");
                    sortedProjects = currentProjects.sort((a, b) =>
                        a["Name"].localeCompare(b["Name"])
                    );  
                }     
                break;
        }
        if (sortedProjects) {
            console.log("sorted projects", sortedProjects);
            displayAllProjects(sortedProjects);
        }
    }


    //display the projects in the variable 'projects'
    function displayAllProjects(projects) {   
        $('#projects').empty(); // Clear existing projects before displaying
        projects.forEach(item => {
            let newCard = createCard(item['Image'], item['Name'], item['Loop'], item['Audio'], new Date(item['Date']), item['Description'], item['Link'], item['LinkText'], item['Tags']);
            $('#projects').append(newCard);
        });
    }
});

export default Projects;