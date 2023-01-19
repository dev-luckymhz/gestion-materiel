/* eslint-disable no-undef */
/**
 * ResponsableController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
generateMatricule =  function () {
  let chars = '0123456789';
  let passwordLenght = 8;
  let password = '';
  for (let index = 0; index < passwordLenght; index++) {
    const randomNumber = Math.floor( Math.random() * chars.length );
    password += chars.substring(randomNumber, randomNumber + 1 );
  }
  return password;
};
module.exports = {
  index: function(req, res) {
    Responsable.find().exec((err, list) => {
      if (err) {return Error('Error');}
      // sails.log(list)
      return res.view( 'responsable/index' , {
        result: list
      });
    });
  },

  create: (req, res) => {
    Responsable.create({
      Matricule : generateMatricule(),
      fisrtName: req.param('fisrtName'),
      lastName: req.param('lastName'),
      cin: req.param('cin'),
    }, (err, resp) => {
      console.log(resp);
      if (err) {
        return res.serverError(resp);
      }
      return res.redirect('/responsable');
    });
  },

  new: async function(req, res) {
    return res.view( 'responsable/create');
  },

  show: function(req, res, next) {
    let id = req.param('id');
    Responsable.findOne( {id : id})
    .exec(function Founded(err, value) {
      if (err) {
        return next(err);
      }
      res.view( 'responsable/show', {
        element: value
      });
    });
  },

  edit: async function(req, res, next) {
    Responsable.findOne(req.param('id')).exec(async function Founded(err, value) {
      if (err) {return next(err);}
      return res.view( '/responsable/edit', {
        element: value
      });

    });
  },

  update: function(req, res, next) {
    let id = req.param('id');
    let valeur = {
      fisrtName: req.param('fisrtName'),
      lastName: req.param('lastName'),
      cin: req.param('cin'),
    };
    Responsable.updateOne({ id : id }).set(valeur).exec((err, value) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/responsable');
    });
  },

  delete: function(req, res, next) {
    let id = req.param('id');
    Responsable.destroy({id : id} , function Update(err, value) {
      if (err) {
        return next(err);
      }
      return res.redirect('/responsable');
    });
  },


};

