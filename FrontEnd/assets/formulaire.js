const main = document.querySelector("main");
function generateContactForm() {

    const contactSection = document.createElement("section");
    contactSection.id = 'contact';

    const contactHeader = document.createElement("h2");
    contactHeader.innerText = "Contact";

    const para = document.createElement("p");
    para.innerText = "Vous avez un projet ? Discutons-en !";

//         //Creation des forms

    const form = document.createElement("form");
    form.action = "#";
    form.method = "post";
    form.innerHTML = ` 
            <label for="name">Nom</label>
            <input type="text" name="name" id="name">
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <input type="submit" value="Envoyer"> `;

    contactSection.appendChild(contactHeader);
    contactSection.appendChild(para);
    contactSection.appendChild(form);
    main.appendChild(contactSection);

}
generateContactForm();