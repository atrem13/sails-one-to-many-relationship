/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  // User
  'POST /user': 'UserController.create',
  'GET /user' : 'UserController.find',
  'GET /user/:id' : 'UserController.findOne',
  'PATCH /user/:id' : 'UserController.update',
  'DELETE /user/:id' : 'UserController.delete',

  // Pet
  'Post /pet' : 'PetController.create',
  'GET /pet' : 'PetController.find',
  'GET /pet/:id' : 'PetController.findOne',
  'PATCH /pet/:id' : 'PetController.update',
  'DELETE /pet/:id' : 'PetController.delete',


};
