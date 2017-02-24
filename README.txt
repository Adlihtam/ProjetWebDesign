README
Informations

Constructeurs : FAVIER Lucie et THOMAS Mathilda
Cadre : Projet Web Design



Sujet

Le site web a pour sujet le jeu League of Legend. On peut y trouver des informations 
concernant les champions du jeu, les objets, les différentes cartes du jeu ainsi que les tournois mondiaux les plus connus.



Usage actuel

Sur toutes les pages du site, il est possible de choisir l’onglet dans lequel vous souhaitez vous rendre par le biais d’un menu horizontal avec “Champ”, “Item”, “Carte”, “Tournoi”. Il est possible de revenir à la page d’accueil en cliquant sur le logo du site internet (image en haut de la page).



Page d’accueil:

Elle est constituée d’un brève description du jeu, une image et deux tableaux avec les 5 champions les plus joués et les 5 champions les plus bannis.



Page “Champ” :

Le logo et le menu sont encore disponible.
Cette page-ci concerne les informations relatives aux champions. Il est possible de choisir le champion dont on veut les informations par le biais d’un menu déroulant horizontal en haut de page. Chaque champion est représenté par l’image de son visage dans le menu déroulant. 
Lorsque le champion est sélectionné, on peut voir s’afficher sur la page:
* dans un premier cadre : l’image du champion, son nom, son type, un graphique représentant ses statistiques ainsi que ses sorts. En passant sur l’image d’un sort, on peut voir un cadre avec une explication de ce sort.
* dans un deuxième cadre : l’histoire associé au champion sélectionner. Si l’histoire est trop longue, le cadre comportera un défilement.



Page “Item”:

Le logo et le menu sont encore disponible.
Cette page est constituée d’un tableau avec tous les objets disponibles en jeu. Chaque ligne de ce tableau est composée de l’image de l’objet (cette image est récupérée sur internet, le lien est bloqué lorsque l’on est connecté au réseau de l’école, ce qui ne la rend pas trouvable dans l’enceinte de l’école), le nom de l’objet, sa description, son prix d’achat et son de revente. Il est possible de rechercher le nom d’un objet ou bien un critère (par exemple: “magic resist”) dans une barre de recherche en haut de page. 
N’ayant trouvé une base de donnée qu’en anglais, toutes ces informations sont en anglais.



Page “Carte”:

Le logo et le menu sont encore disponible.
Cette page permet de voir les 4 cartes disponibles dans le jeu. On peut accéder aux informations de chaque carte grâce à 4 boutons en haut de page. 
Les informations sont alors disposées dans un cadre contenant le nom de la carte, une petite description avec les différents types de jeu disponibles, une image de la carte puis une plus grosse description de cette carte.
Page “Tournoi”:
Le logo et le menu sont encore disponible.
Cette page permet de visualiser plusieurs tournois mondiaux sur le jeu. Il est possible de sélectionner un tournoi dans la liste. La carte google nous montre les différentes localisations de ces tournois. En dessous, il est possible de voir des informations concernant le tournois sélectionné : le nom, le nombre d’équipe participantes, les périodes où ils commencent et une description du tournois.



Fichiers lié au site:



Les fichiers datas : 
* champions.json
* item.json
* map.json
* tournois.json

Les pages html : 
* champion.html
* item.html
* maps.html
* tournament.html
* welcome.html

Fichier js : 
* app.js



Amélioration du Projet: 

Dans un premier temps, il serait judicieux de mettre le site dans la même langue. Il mélange actuellement l’anglais et le français. En effet, les fichiers json trouvé non pas été de la même forme.  


Dans ce projet, l’API google map a été utilisée dans l’onglet “Tournoi”. En effet, les localisations de ces-derniers ont été affiché avec des marqueurs sur la carte. Elle peut être améliorée en affichant que les tournois cochés. Ou par la suite, si l’on zoom sur cette carte, la liste des tournois pourrait se mettre à jour en fonction des marqueurs présents sur la carte.


Dans l’onglet “Item”, tous les éléments du fichier json sont affichés. Pour améliorer cette affiche, on pourrait faire un affichage de 20-30 objets et faire un système de page en bas de page. 


Dans l’onglet “Champ”, des boutons de filtres peuvent être ajoutés afin de faciliter la recherche d’un élément. De plus, dans cet onglet, lors d’un click sur un élément, la page se recharge en fonction des données demandées. Une amélioration possible serait d’éviter ce rechargement.