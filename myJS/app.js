myAPI = [
    'Abhishek Majumdar',
    'Deepmalya Sarkar',
    'Reeva Roy',
    'Bithika Pal',
    'Rabindranath Thakur',
    'Indranil Choudhury',
    'Srijita Dutta',
    'Koushiki Kar',
    'Sneha Dutta',
    'Bandita Mukherjee',
    'Raju Kayal',
    'Asmita Dutta Mukherjee',
    'Aparajita Sen',
    'Rupam Reeva Roy',
    'Arnirban Dey',
    'Abhishikta Majumdar',
    'Mamata Modi',
    'Narendra Banerjee',
    'Pappu Gandhi',
    'Himadri Chatterjee',
    'Hridita Chatterjee',
    'Rinku Mondol',
    'Debdutta Pattanayak',
    'Mahendra Singh Dhoni',
    'Arijit Singh',
    'Shreya Majumdar',
    'Rupam Islam',
    'Badsha Moitro',
    'Kumkum Shaw',
    'Amit Mitra Majumdar'
];

const searchBar = document.querySelector("#searchBar");
const resultArea = document.querySelector(".resultArea");

searchBar.addEventListener('input', function(event) {
    if (event.target.value) {
        const searchString = event.target.value.toLowerCase();
        const filteredCharacters = myAPI.filter(character => {
            return (
                character.toLowerCase().includes(searchString)
            );
        });
        console.log(filteredCharacters);
        displayResults(filteredCharacters, event.target.value);
    } else {
        resultArea.classList.add('invisible');
    }
});

const displayResults = (res, char) => {
    if (res.length !== 0) {
        const htmlString = res.map((res) => {
            //return `<p>${res.replace(char,`<span>${char}</span>`)}</p><hr>`;
            return `<p>${res}</p><hr>`;

        }).join('');
        resultArea.classList.remove('invisible');
        resultArea.innerHTML = htmlString;
    } else {
        resultArea.classList.add('invisible');
    }
}