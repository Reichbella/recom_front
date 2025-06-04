Ce projet est le frontend d'une application web de recommandations de films, construite avec React, Vite, et Tailwind CSS. Il permet aux utilisateurs de sélectionner un genre de film (Action, Comédie, etc.) et d'afficher des recommandations générées par un backend Flask utilisant le dataset MovieLens 100K.

Fonctionnalités

Sélection d'un genre de film via une liste déroulante.
Affichage des recommandations avec titres et scores prédits.
Interface moderne avec dégradé bleu-violet et animations Tailwind.
Message de chargement et spinner animé pour indiquer les délais de traitement.
Communication avec une API backend Flask via requêtes POST.

Prérequis

Node.js (v18 ou supérieur) : Télécharger.
npm (inclus avec Node.js).
Un backend Flask opérationnel (voir recom_back).

Installation

Cloner le repository :
git clone https://github.com/votre-utilisateur/recom-stream-front.git
cd recom_front

Installer les dépendances :
npm install

Exécution locale

Démarrer le serveur de développement :
npm run dev
