// Swatchomatic v. 0.1 du 2012-08-16
// Un module pour interagir avec une palette de couleurs prédéfinies
//
// Pré-requis : créer une liste de couleurs -> swatches.js
// Propriétés : .colors
// Methodes   : .getColor("name",alpha)
// 							.getRandom(alpha)
// 							.setRandom(alpha)
//


var util      = require("util");
var myPalette = require("./tools/palette");

console.log("Color names ===> "+ myPalette.colors.toString());
