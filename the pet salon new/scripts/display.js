function displayPetCards(){
    const div = document.getElementById("pets");
    let card="";
    //travel the array
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
    //create the HTML template
    card += `
    <tr id="${pet.id}">
        <td> ${pet.name}</td>
        <td> ${pet.age}</td>
        <td> ${pet.gender}</td>
        <td> ${pet.service}</td>
        <td> ${pet.breed}</td>
        <td> ${pet.origin}</td>
        <td> ${pet.price}</td>
        <td> <button onclick="deletePet(${pet.id})">🗑️</button></td>
    </tr>
    `
    }
    div.innerHTML=card;
    //insert the HTML template into the register
}