import User from "../models/User";


export const createUser = (req, res) => {
  res.json("creating user");
};


export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};


export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.userId);
  res.status(200).json(user);
};


export const updateUserById = async (req, res) => {
  const { userId } = req.params;
  const { body } = req;
    try {
          const user = await User.findById(req.params.userId);
          if (!user) {
            return res.status(404).json({
              msg: "No existe un usuario con el id " + userId,
            }); 
          }

          const existeEmail = await User.findOne({
            where: {
              email: body.email,
              _id: body._id,
            },
          });

          if (
            existeEmail &&
            existeEmail.email === body.email &&
            existeEmail._id != _id
          ) {
            return res.status(400).json({
              msg: "Ya existe un usuario con el email " + body.email,
            });
          };

             await user.update(body);
             res.json(user);
        
    } catch (error) {
        
  res.status(400).json({ error: error.message });
    };


};

export const deleteUsuario = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findById(req.params.userId);
  if (!user) {
    return res.status(404).json({
      msg: "Does not exist a user with id " + userId,
    });
  }

   await user.update({ active: false });
  res.json({ user, msg: "User deactivated" });
}; 


export const destroyUser = async (req, res) => {
      const deleteUser = await User.findByIdAndDelete(req.params.userId);
  // with status 204 don't see the answer, status 200 yes
  res.status(200).json(deleteUser);
}
