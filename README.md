# Kata Trip Service - Typescript

## Exigences fonctionnelles

Vous avez un réseau social pour voyageurs :

- Vous devez être logué pour voir le contenu
- Vous devez être amis pour voir les voyages de quelqu’un d’autre

## Règles

- Vous ne pouvez pas changer le code de production si il n’est pas couvert par des tests
- Seul le refactoring « automatisé » depuis l’IDE est autorisé si vous en avez besoin pour écrire un test

## Etapes

1. Ecrire un premier test unitaire sur trip service, pour couvrir le chemin le plus court
2. Ecrire un second test unitaire sur trip service, pour couvrir le second chemin le plus court
3. Ecrire un dernier test unitaire pour couvrir l'ensemble du trip service
4. Injecter trip dao pour simplifier le dernier test unitaire
5. Refactorer le code pour améliorer sa lisibilité

## Démarrage du projet

- Prérequis : Node 14+.
- Installer les dépendances : `npm install`
- Exécuter tous les tests : `npm test`
- Exécuter les tests automatiquement à chaque modification : `npm run test:watch`
