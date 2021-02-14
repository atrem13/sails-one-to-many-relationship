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
      }).fetch();
      return res.json(results);
    }catch(err){
      return res.serverError(err);
    }
  },

  async findOne(req, res){
    try {
      let pet = await Pet.findOne({
        id: params.id,
      });
      return res.json(pet);
    }catch(err){
      return res.serverError(err);
    }
  },

  async find(req, res){
    try {
      let pets = await Pet.find();
      return res.json(pets);
    }catch(err){
      return res.serverError(err);
    }
  },

  async update(req, res){
    try {
      let params = req.allParams();
      let attributes = {};
      if(params.name){
        attributes.name = params.name;
      }
      if(params.race){
        attributes.race = params.race;
      }
      let result = await Pet.update(
        {
          id: params.id,
        },
        attributes,
        {updatedAt: Date.now()}
      );
      return res.json(result);
    }catch(err){
      return res.serverError(err);
    }
  },

  async create(req, res){
    try {
      let result = await Pet.destroy(
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

