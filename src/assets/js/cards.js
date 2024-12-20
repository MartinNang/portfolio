import $ from 'jquery';
const imgFolder = '../img';
const audioFolder = '../audio';


const createCard = function (image, name, loop, audio, date, description, link, linkText, tags) {
    console.log("creating card");
    console.log("image", image, "name", name, "loop", loop, "audio", audio, "date", date, "description", description, "link", link, "linktext", linkText, "tags", tags);
    
    let newCard = $(`
        <div class="card m-2 p-2 bg-dark text-white"></div>
    `);

    let newCardImg;
    if (image) {
        newCardImg = createCardImg(image, name);
    } 

    let newAudio;
    if (audio) {
        newAudio = createAudio(loop, audio);
    }

    let formattedDescription = description.join("<br><br>");
    let newCardBody = createCardBody(name, date, formattedDescription);

    let newCardButton;
    if (link) {
        if (linkText) {
            newCardButton = $(`
                <a href="${link}" target="_blank" class="btn btn-primary">${linkText}</a>
            `);
        } else {
            console.error("LinkText is invalid: " + linkText);
        }
    }

    let newCardFooter;
    if (tags) {
        let formattedTags = tags.join(", ");
        newCardFooter = createCardFooter(formattedTags);
    }

    if (newCardImg) {
        newCard.append(newCardImg);
    }

    else if (newAudio) {
        newCard.append(newAudio);
    }

    if (newCardButton) {
        newCardBody.append(newCardButton);
    }

    newCard.append(newCardBody);
    if (newCardFooter) newCard.append(newCardFooter);

    return newCard;
}

export default createCard;

export function createCardImg(image, name) {
    return $(`
        <img class="card-img-top" src="${imgFolder}/${image}" alt="${name}">
    `);
}

export function createAudio(loop, audio) {
    return $(`
        <audio controls ${loop ? "loop" : ""} class="project-cover col">
            <source src="${audioFolder}/${audio}" type="audio/mp3">
            Your browser does not support the audio element.
        </audio> 
    `);
}

export function createCardBody(name, date, description) {
    return $(`
        <div class="card-body">
            <h2 class="card-title">${name}</h2>
            <p class="project-date">Date: ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}</p>
            <p class="card-text project-description">${description}</p>
        </div>
    `);
}

export function createCardFooter(tags) {
    return $(`
        <div class="card-footer row">
            <small class="text-light">Tags: ${tags}</small>
        </div>
    `);
}