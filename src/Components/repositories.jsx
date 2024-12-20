import React from 'react';
import $ from 'jquery';

import createCard from '../assets/js/cards.js';

const Repositories = ({ name }) => {
    return (
        // Github page
    <article class="content-wrapper">
        <h1>Repositories</h1>

        <section id="github-repos" class="container">

        </section>    
    </article>
    );
};

$(document).ready(function() {
    $.ajax({ 
        type : "GET", 
        url : "https://api.github.com/users/MartinNang/repos", 
        beforeSend: function(xhr){
          xhr.setRequestHeader('Authorization', 'token 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')
        },
        success : function(repos) { 
          //set your variable to the result 

          let container = $("#github-repos");
          
          for (let repo of repos) {
            console.log("repo", repo);
            let newCard = createCard(null, repo.name, false, null, new Date(repo.created_at), [repo.description], repo.clone_url, "Go to project", null);
            container.append(newCard);
          }
        }, 
        error : function(repos) { 
          //handle the error 
          console.log("error");
        } 
      });
})

export default Repositories;