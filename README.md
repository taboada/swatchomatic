La palette
==========

## Quoi ?

Une petite application, sous forme d'un module Javascript qui permet d'utiliser une palette de couleurs prédéterminée, qu'on définit dans un fichier .js et dotée de diverses possibilités :

* voir le nom des couleurs présentes dans une palette
* afficher les valeurs d'une couleur nommée
* afficher les valeurs d'une couleur au hasard

Optionnellement, l'outil permet(tra) de générer une feuille de style à partir des valeurs de couleurs de la liste, avec des classes de type `.couleur` et `.bg-couleur`, pour l'utilisation dans un site.

## Comment ?

Pour déclarer une nouvelle palette :

	var myPalette = new Swatches;
	
Pour lister les couleurs :

	myPalette.colors ; // ["rouge", "vert", "bleu"]
	
Afficher une couleur (si on ne passe qu'un paramètre, la valeur `alpha` est fixée à `1`):

	myPalette.getColor("rouge"); // rgba(255,0,0,1)
	myPalette.getColor("bleu", 0.5); // rgba(0,0,255,0.5)
	
Afficher une couleur au hasard issue de la palette (si on ne passe qu'un paramètre, la valeur `alpha` est générée au hasard) :

	myPalette.getRandom(); // rgba(0,0,255,0.78)
	myPalette.getRandom(0.4); // rgba(0,255,0,0.4)
	
Générer une couleur au hasard :

	myPalette.setRandom(); // rgba(23,47,219,0.39)
	myPalette.setRandom(0.75); // rgba(41,58,12,0.75)

Les trois fonctions précédentes servent à générer une chaîne de caractères qui représente la couleur une fois ajoutée à une feuille de style. Le principe consiste à l'utiliser ensuite directement dans un script Javascript (par exemple avec jQuery ou Zepto) comme ci-dessous :

	$('#myelement').css("backgroundColor", myPalette.getColor('rouge'));
