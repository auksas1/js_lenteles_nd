"use strict"

function pridetiIrasa() {
var vardas = document.querySelector('input[placeholder="Vardas"]').value
var pavarde = document.querySelector('input[placeholder="Pavardė"]').value
var amzius = parseInt(document.querySelector('input[placeholder="Amžius"]').value)

if (vardas && pavarde && amzius && !isNaN(amzius) && amzius > 0 && /^[a-zA-Z]+$/.test(vardas) && /^[a-zA-Z]+$/.test(pavarde)) {
    var table = document.querySelector('table tbody')
    var newRow = document.createElement('tr')
    newRow.innerHTML = '<td>' + vardas + '</td>' + '<td>' + pavarde + '</td>' + '<td>' + amzius + '</td>'
    table.appendChild(newRow)

    document.querySelector('input[placeholder="Vardas"]').value = ''
    document.querySelector('input[placeholder="Pavardė"]').value = ''
    document.querySelector('input[placeholder="Amžius"]').value = ''
} else {
    if (!vardas || !pavarde || !amzius) {
    alert('Įveskite visus duomenis!')
    } else if (isNaN(amzius) || amzius <= 0) {
    alert('Amžius turi būti teigiamas skaičius!')
    } else {
    alert('Vardas ir pavardė turi būti įvesti raidėmis!')
    }
}
}

function istrintiPirmaEilute() {
var table = document.querySelector('table tbody')
if (table.rows.length > 0) {
    table.deleteRow(0)
}
}

function istrintiPaskutineEilute() {
var table = document.querySelector('table tbody')
var lastRowIndex = table.rows.length - 1
if (lastRowIndex >= 0) {
    table.deleteRow(lastRowIndex)
}
}

document.querySelector('button').addEventListener('click', pridetiIrasa)
document.querySelector('button:nth-of-type(2)').addEventListener('click', istrintiPirmaEilute)
document.querySelector('button:nth-of-type(3)').addEventListener('click', istrintiPaskutineEilute)