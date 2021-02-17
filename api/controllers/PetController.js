/**
 * PetController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  async create(req, res){
    try {
      let params = req.allParams();
      let results = await Pet.create({
        name: params.name,
        race: params.race,
        owner: params.owner,
      }).fetch();
      return res.json(results);
    }catch(err){
      return res.serverError(err);
    }
  },

  async findOne(req, res){
    try {
      let params = req.allParams();
      let pet = await Pet.findOne({
        id: params.id,
      }).populate('owner');
      return res.json(pet);
    }catch(err){
      return res.serverError(err);
    }
  },

  async find(req, res){
    try {
      let pets = await Pet.find().populate('owner');
      return res.json(pets);
    }catch(err){
      return res.serverError(err);
    }
  },

  async update(req, res){
    try {
      let params = req.allParams();
      let attributes = {updatedAt: Date.now(),};
      if(params.name){
        attributes.name = params.name;
      }
      if(params.race){
        attributes.race = params.race;
      }
      if(params.owner){
        attributes.owner = params.owner;
      }

      let result = await Pet.update(
        {
          id: params.id,
        },
      ).set(attributes).fetch();

      return res.json(result);
    }catch(err){
      return res.serverError(err);
    }
  },

  async delete(req, res){
    try {
      let params = req.allParams();
      let result = await Pet.destroyOne(
        {
          id: req.params.id
        }
      );
      return res.json(result);
    }catch(err){
      return res.serverError(err);
    }
  },

};

