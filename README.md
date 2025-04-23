CUISINE DU MONDE – APPLICATION WEB
Projet réalisé dans le cadre de la formation : Titre Professionnel Développeur Web et Web Mobile (DWWM)

---

📁 CONTENU DU PROJET :
- /frontend : Fichiers HTML, CSS et JavaScript du site (partie visible par le client)
- /backend : Scripts PHP (traitement des réservations, espace admin, accès base de données)
- /db : Fichier SQL pour créer la base de données
- /docs : Dossier projet (Word ou PDF), annexes éventuelles

---

🧪 PRÉREQUIS POUR EXÉCUTER LE PROJET :
- Un serveur local (ex : XAMPP, WAMP, MAMP…)
- Un navigateur web (Chrome, Firefox…)
- MySQL (via phpMyAdmin)

---

🚀 ÉTAPES POUR LANCER LE PROJET EN LOCAL :

1. **Installation serveur local**
   - Ouvrir XAMPP (ou équivalent) 
   - Lancer les services `Apache` et `MySQL`

2. **Mise en place du projet**
   - Copier le dossier `cuisine-du-monde` dans le dossier `htdocs` de XAMPP :
     Exemple : `C:\xampp\htdocs\cuisine-du-monde`

3. **Création de la base de données**
   - Ouvrir phpMyAdmin dans le navigateur : `http://localhost/phpmyadmin`
   - Créer une nouvelle base de données : `cuisine_du_monde`
   - Importer le fichier `/db/schema.sql` pour générer les tables

4. **Accéder à l’application**
   - Page d’accueil (client) :  
     `http://localhost/cuisine-du-monde/frontend/index.html`

   - Interface administrateur :  
     `http://localhost/cuisine-du-monde/backend/admin.php`

---

🔐 IDENTIFIANTS ADMIN :
- Email : admin@cdm.test
- Mot de passe : admin 

---

🧠 AUTEUR DU PROJET :
Marzouk Salma
Formation DWWM – STUDI
Année : 2024–2025

