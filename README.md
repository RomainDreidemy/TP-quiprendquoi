# Qui prend quoi

## Installation

_À modifier si votre travail le nécessite_

`npm install`

`npm run start`

## Améliorations apportées

_Pour chaque amélioration, un message type "message de commit" et si pertinent le nom des fichiers principalement concernés_

_Quelques exemples (voir le TP)_

- Affichage de la liste des items sur la page événément (`app.js`, `party.pug`)
- Possibilité de supprimer un item (`app.js`, `party.pug`)
- Meilleure présentation visuelle des items (`party.scss`)
- Responsive
- Ajouté l'événement au calendrier

## Article personnel

### Sujet : Web API PUSH

Le sujet peut être :

- une web api explorée (même en partie)
- un outil ou technique lié à la performance, l'amélioration progressive, l'accessibilité
- une technique liée aux PWA ou aux service workers
- un outil de développement (package npm, devtool...)

Ce n'est pas une liste exhaustive, demandez en cas de doute.

Plan en cas de panne d'inspiration :

- Description du sujet choisi (sa définition, son but...)
- Exemple d'utitlisation ou d'implémentation (bout de code si pertinent, capture d'écran...)
- Conclusion : avantages, inconvénients et cas d'usage

___

L'API Push permet aux applications web (PWA) la possibilité de recevoir des notifications envoyé depuis un server, que l'application soit au premier plan ou non. Elle permet aux développeur de créer des notifications en asynchrone.

On peut utiliser cette API lorsqu'un utilisateur ajoute un item dans un événement.

- L'avantage de cette API c'est que ça permet une relation continu avec l'utilisateur et le faire revenir sur l'application si il l'avait quitté.
- L'inconvénient c'est quelle n'est pas facile à mettre en place et n'est pas compatible avec beaucoup de navigateur.