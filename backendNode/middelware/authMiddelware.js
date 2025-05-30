const authMiddelware  = (req,res,next)=>{

  const token = req.cookies.token;

  if (!token ){
    return res.status(401).json({error: "non autorisé"});
  }
   try {

    const decoded = jwt.verify(token,process.env.JWT_secret);
    req.user=decoded;;
    next()

   } catch (error) {
    return res.status(401).json({error:"token invalide ou expiré"})

   }
  };

module.exports=authMiddelware;
