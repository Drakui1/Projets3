// déclaration de fonction 
function remplirTableau(nombre) { 
	for (let idx=0; idx < nombre; idx++) { 
		tableau[idx] = "N°"+idx
	} 
} 

// création d'un tableau de 5.000.000 cellules 
document.write("<H1>Déclaration Table</H1>") 
let nbre = 500000

// commentez cette ligne ou la suivante (pas les deux en même temps)
let tableau = [nbre] 
// let tableau = new Array(nbre)

let t0=0 
let t1=0
let moyenne=0 
let max=10
for (let t=0; t < max; t++) { 
	t0 = performance.now() 
	remplirTableau(nbre) 
	t1 = performance.now() 
	moyenne=moyenne+(t1-t0) 
	document.write("Durée = "+(t1-t0)+" ms<br>") 
} 
document.write("Moyenne = "+(moyenne/max)+" ms<br>") 