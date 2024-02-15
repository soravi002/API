import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Fonction composant principal
function UserList() {
  // Déclaration des états
  const [listOfUsers, setListOfUsers] = useState([]); // État pour stocker la liste des utilisateurs

  // Effet de montage : exécuté une fois au montage du composant
  useEffect(() => {
    // Fonction asynchrone pour récupérer les données de l'API
    const fetchData = async () => {
      try {
        // Appel de l'API avec Axios pour récupérer la liste des utilisateurs
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // Mise à jour de l'état listOfUsers avec les données récupérées
        setListOfUsers(response.data);
      } catch (error) {
        // Gestion des erreurs en cas de problème lors de la récupération des données
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    // Appel de la fonction fetchData pour récupérer les données au montage du composant
    fetchData();

    // Nettoyage de l'effet : aucune action à effectuer ici car il n'y a pas d'abonnement ou de souscription
  }, []); // Le tableau vide indique que cet effet s'exécute uniquement une fois au montage du composant

  // Rendu du composant
  return (
    <div>
      {/* Titre de la liste des utilisateurs */}
      <h1>Liste des utilisateurs</h1>
      <div className='user-list'>
        {/* Mapping de la liste des utilisateurs pour afficher chaque utilisateur */}
      {listOfUsers.map(user => (
        <div key={user.id} style={{ marginBottom: '20px' }} className='user-card'>
          {/* Affichage des détails de l'utilisateur */}
          <h2>{user.name}</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Adresse: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          <p>Téléphone: {user.phone}</p>
          <p>Site Web: {user.website}</p>
          <p>Entreprise: {user.company.name}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default UserList;
