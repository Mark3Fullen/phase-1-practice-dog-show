document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

function fetchData() {
    fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(json => renderData(json))
}

function renderData(dogList) {
    for (const dog of dogList) {
        const dogRow = document.createElement('tr');
        const dogNameRow = document.createElement('td');
        const dogBreedRow = document.createElement('td');
        const dogSexRow = document.createElement('td');
        const dogButtonRow = document.createElement('td');
        const dogButton = document.createElement('button');


        dogNameRow.textContent = dog.name;
        dogBreedRow.textContent = dog.breed;
        dogSexRow.textContent = dog.sex;
        dogButton.textContent = "Edit Dog";


        dogButtonRow.append(dogButton);
        dogRow.append(dogNameRow, dogBreedRow, dogSexRow, dogButtonRow);
        document.querySelector('#table-body').append(dogRow);


        dogButton.addEventListener('click', () => {
            document.querySelector("form input[name='name']").placeholder = dog.name;
            document.querySelector("form input[name='breed']").placeholder = dog.breed;
            document.querySelector("form input[name='sex']").placeholder = dog.sex;
        })
    }
}