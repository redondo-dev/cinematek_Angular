const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//register
const register = async (req, res) => {
  const { nom, prenom, email, password } = req.body;

  // Vérifier que tous les champs sont présents
  if (!nom || !prenom || !email || !password) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Mot de passe hashé :", hashedPassword);

  userModel.createUser({ nom, prenom, email, password:hashedPassword }, (err, result) => {
    if (err) {
      console.error("Erreur SQL :", err);
      return res.status(500).json({ error: "Erreur lors de l'inscription" });
    }

    res.status(201).json({ message: "Inscription réussie" });
  });
}catch (err) {
    console.error("Erreur de hash :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};


const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }

  userModel.findUserByEmail(email, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erreur du serveur" });
    }

    if (!user) {
      return res.status(401).json({ error: "Utilisateur non trouvé" });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Erreur du serveur" });
      }

      if (isMatch) {
        // Sécurisation avec JWT
        const token = jwt.sign(
          { id: user.id, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        // Stocker le token dans un cookie httpOnly
        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 60 * 60 * 1000, // 1 heure
        });

        return res.status(200).json({
          message: "Connexion réussie",
          user: { id: user.id, email: user.email },
        });
      } else {
        return res.status(401).json({ error: "Mot de passe incorrect" });
      }
    });
  });
};



const logout=(req,res)=>{
  res.cookie("token","",{
    httpOnly:true,
    secure:false,
    sameSite:"strict",
    maxAge:0

  });
  res.status( 200).json({
    message :'deconexion reussie'
  })

}




const getUsers = (req, res) => {
  userModel.getAllUsers((err, users) => {
    if (err) {
      return res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs" });
    }
    res.json(users);
  });
};

module.exports = {
  register,
  getUsers,
  login,
  logout
// findUserByEmail
};
