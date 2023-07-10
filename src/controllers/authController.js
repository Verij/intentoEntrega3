import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';

export const signUp = async (req, res) => {
  const{username, email, password} = req.body;

  const usuarioNuevo = new User ({
    username,
    email,
    password: await User.encryptPassword(password)
  })


  const usuarioGuardado = await usuarioNuevo.save();
  
  const token = jwt.sign({id: usuarioGuardado._id}, config.SECRET, {
    expiresIn: 15000
  })

  res.json({token})
};

export const signIn = async (req, res) => {
  
  const usuarioEncontrado = await User.findOne({email: req.body.email})
  if (!usuarioEncontrado) return res.json({message: "usuario no encontrado"})

  const compararPassword = await User.comparePassword(req.body.password, usuarioEncontrado.password)


  if (!compararPassword) return res.json({token: null, message: 'contraseña invalida'})

  const token = jwt.sign({id: usuarioEncontrado._id}, config.SECRET,{
    expiresIn: 15000
  })
  res.json({token})

};