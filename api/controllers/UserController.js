/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  async create(req, res){
    try{
      let params = req.allParams();
      const results = await User.create({
        name: params.name,
        gender: params.gender
      });
      return res.json(results);
    }catch(err){
      return res.serverError(err);
    }
  },

  async findOne(req, res){
    try{
      const user = await User.findOne(
        {
          id: req.params.id
        }
      );
      return  res.json(user);
    }catch(err){
      return res.serverError(err);
    }
  },

  async find(req, res){
    try{
      const users = await User.find();
      return res.json(users);
    }catch(err){
      return res.serverError(err);
    }
  },

  async update(req, res){
    try{
      let params = req.allParams();
      let attributes = {};
      if(params.name){
        attributes.name = params.name;
      }
      if(params.gender){
        attributes.gender = params.gender;
      }
      const results = await User.update(
        {
          id: params.id
        },
        attributes,
        {updatedAt: Date.now()}

      );
      return res.json(results);
    }catch(err){
      return res.serverError(err);
    }
  },

  async delete(req, res){
    try{
      const result = await User.destroy(
        {
          id: params.id
        }
      );
      return res.json(result);
    }catch(err){
      return res.serverError(err);
    }
  },

};

