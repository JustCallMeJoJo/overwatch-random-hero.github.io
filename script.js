const roles = document.querySelector('.roles'), all = document.querySelector('.all'), heroes = {
    tanks: ['d.va', 'doomfist', 'orisa', 'junker queen', 'reinhardt', 'roadhog', 'sigma', 'winston', 'wrecking ball', 'zarya'],
    dps: ['ashe', 'bastion', 'cassidy', 'echo', 'genji', 'hanzo', 'junkrat', 'mei', 'pharah', 'reaper', 'sojourn', 'soldier-76', 'sombra', 'symmetra', 'torbjorn', 'tracer', 'widowmaker'],
    support: ['ana', 'baptiste', 'brigitte', 'kiriko', 'lucio', 'mercy', 'moira', 'zenyatta']
};
for (const key in heroes) {
    roles.innerHTML += '<span>' + key + '<img src="./img/' + key + '.svg">';
    heroes[key].forEach(el => all.innerHTML += '<div class="hero" data-id="' + el + '"><img src="./img/' + el + '.png"><img src="./img/'+ key +'.svg"><h2>' + el + '</h2></div>');
}
document.querySelectorAll('.roles span').forEach(el1 => {
    el1.addEventListener('click', () => {
        let role = el1.innerText.toLowerCase();
        let random = heroes[role][Math.floor(Math.random() * heroes[role].length)];
        document.querySelectorAll('.hero').forEach(el2 => el2.style.display = el2.dataset.id !== random ? '' : 'block');
    });
});