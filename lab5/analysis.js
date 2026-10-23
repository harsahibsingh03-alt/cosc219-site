/*
  COSC 219 — Lab 5
  Arrays, loops and iterators.

  Write the fourteen functions below. Each is tested independently —
  open check.html to see which pass.

  Every function must return a NEW value. None of them may change the
  array they were given: the tests check that TRAILS is untouched
  afterwards, and one of them will catch you if it isn't.
*/

function revealWord(word, guessedLetters) {
    return word.toLowerCase()
        .split("")
        .map(letter => guessedLetters.toLowerCase().includes(letter) ? letter : "_")
        .join("");
}
function hasWon(word, guessedLetters) {
    return word.toLowerCase()
        .split("")
        .every(letter => guessedLetters.toLowerCase().includes(letter));
}


function trailNames(trails) {
    return trails.map(trail => trail.name);
}
function openTrails(trails) {
    return trails.filter(trail => !trail.closed);
}
function findByName(trails, name) {
    return trails.find(trail =>
        trail.name.toLowerCase() === name.toLowerCase()
    );
}

function sortedByDistance(trails) {
    return [...trails].sort((a, b) => a.km - b.km);
}

function anyClosed(trails) {
    return trails.some(trail => trail.closed);
}

function allUnder(trails, limit) {
    return trails.every(trail => trail.km < limit);
}

function totalDistance(trails) {
    const total = trails.reduce((sum, trail) => sum + trail.km, 0);
    return Math.round(total * 10) / 10;
}

function longestTrail(trails) {
    return trails.reduce((longest, trail) => {
        if (longest === undefined || trail.km > longest.km) {
            return trail;
        }
        return longest;
    }, undefined);
}

function countByRating(trails) {
    return trails.reduce((counts, trail) => {
        counts[trail.rating] = (counts[trail.rating] ?? 0) + 1;
        return counts;
    }, {});
}

function openDistance(trails) {
    const total = trails
        .filter(trail => !trail.closed)
        .map(trail => trail.km)
        .reduce((sum, km) => sum + km, 0);

    return Math.round(total * 10) / 10;
}

function summaryLines(trails) {
    return trails.map(trail => {
        const closedText = trail.closed ? " (closed)" : "";
        return `${trail.name} — ${trail.km} km, ${trail.rating}${closedText}`;
    });
}

function report(trails) {
    const open = openTrails(trails);
    const longest = longestTrail(open);

    return {
        total: trails.length,
        open: open.length,
        closed: trails.length - open.length,
        openKm: openDistance(trails),
        longestOpen: longest ? longest.name : null,
        byRating: countByRating(trails)
    };
}