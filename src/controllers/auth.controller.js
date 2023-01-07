import User from '../models/User';
import  jwt from "jsonwebtoken";
import config from "../config";
import Role from '../models/Role';

//* Register
export const signUp = async (req, res) => {
    
     const {username, email, password, roles} = req.body;
  
     //    const userFound = User.find({ email });

   
     const newUser = new User({
       username,
       email,
       password: await User.encriptPassword(password)
         });  

if(roles){
  const foundRoles = await Role.find({name: {$in: roles}})
  newUser.roles = foundRoles.map(role => role._id)

}else{
  const role = await Role.findOne({name: 'user'})
  newUser.roles = [role._id];
};

try {
  const savedUser = await newUser.save();
  console.log(savedUser);

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400, // <- 24h
  });

  res.status(200).json({ token });
} catch (error) {
  res.status(400).json({ error: error.message });
}; 

}; 
 
//* Login
export const signIn = async (req, res) => {
  
  const userFound = await User.findOne({email: req.body.email}).populate('roles');
  console.log(userFound);

  if(!userFound) {
    return res.status(400).json({message: 'User not found'})
  };

   const matchPassword = await User.comparePassword(req.body.password, userFound.password);

   const token = jwt.sign({id: userFound._id}, config.SECRET, {
    expiresIn: 86400 
   })

  if(!matchPassword) {
    return res.status(401).json({token: null, message: "Invalid password"});
  }

  console.log(userFound);

  res.json({token: token});

};

