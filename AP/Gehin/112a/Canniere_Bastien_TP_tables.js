"use strict"	// force les déclarations de variables

// déclaration de fonction 
function afficherTableau() {
	let res=""
	for (let idx=0; idx<listeHeros.length; idx++) {
		res = res + "Etudiant N°" + (idx+1) + " : " + listeHeros[idx] +
"<br>"
	}
	return res
}
// création d'un tableau de 10 cellules 
document.write("<H1>Déclaration Table</H1>") 
let listeHeros =
["BATMAN","SUPERMAN","","","","CATWOMAN","","","","","AQUAMAN"]

document.write("Longueur table = "+listeHeros.length)

document.write("<H1>Liste des Héros étudiants</H1>") 
document.write(afficherTableau())
listeHeros[12] = "PUSHMAN" 
document.write("<H1>Table finale</H1>")
document.write("Longueur table = "+listeHeros.length)

function remplirTableau(nombre) { 
for (let idx=0; idx < nombre; idx++) { 
Tableau[idx] = "N°"+idx
	} 
} 
let max=10
for (let t=0; t < max; t++) { 
	remplirTableau(nbre) 
}