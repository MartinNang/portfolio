import {
    createCard
} from './cards.js';

$(document).ready(function() {

    //project data is read from json and unique tags contains a list of all tags in all projects with repetitions removed
    let projectData, uniqueTags, currentProjects;
    $.ajax({
        url: "assets/data/projects.json",
        success: function(data) {
            projectData = data.projects;
            console.log(projectData);
            
            let uniqueTags = generateUniqueTags();
            console.log(uniqueTags);

            createButtons(uniqueTags);

            currentProjects = projectData;
            displayAllProjects(projectData);
            
            $("#sort-by-name").click(() => sortProjects(SortProperty.NAME));
            $("#sort-by-name-desc").click(() => sortProjects(SortProperty.NAME, true));
            $("#sort-by-date").click(() => sortProjects(SortProperty.DATE));
            $("#sort-by-date-desc").click(() => sortProjects(SortProperty.DATE, true));
        }
    });

    // $.ajax({
    //     url: "https://itch.io/api/1/WGPQOmoQkaHGFSzT5hTSeALi5cyx86M3qDIbB4wJ/my-games",
    //     type: 'GET',
    //     success: function(data) {
    //         console.log("itch response");
    //         console.log(data);
    //     },
    //     error: function (request, status, error) {
    //         alert(request.responseText);
    //     }
    // });


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

    // TODO: add github live data feed

    function sortProjects(prop) {
        sortProjects(prop, false);
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

   
}); // end document ready
