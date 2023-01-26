/* eslint-disable no-undef */
/**
 * DestinationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: function(req, res) {
    Localisation.find().exec((err, list) => {
      if (err) {return Error('Error');}
      // sails.log(list)
      return res.view( 'destination/index' , {
        destination: list
      });
    });
  },

  create: (req, res) => {
    Localisation.create({
      ville: req.param('ville'),
      lot: req.param('lot'),
      code: req.param('code'),
    }, (err, resp) => {
      console.log(resp);
      if (err) {
        return res.serverError(resp);
      }
      return res.redirect('/destination');
    });
  },

  new: async function(req, res) {
    return res.view( 'destination/create');
  },

  show: function(req, res, next) {
    let id = req.param('id');
    Localisation.findOne( {id : id})
    .exec(function Founded(err, value) {
      if (err) {
        return next(err);
      }
      res.view( 'destination/show', {
        element: value
      });
    });
  },

  edit: async function(req, res, next) {
    Localisation.findOne(req.param('id')).exec(async function Founded(err, value) {
      if (err) {return next(err);}
      return res.view( 'destination/edit', {
        element: value
      });

    });
  },

  update: function(req, res, next) {
    let id = req.param('id');
    let valeur = {
      ville: req.param('ville'),
      lot: req.param('lot'),
      code: req.param('code'),
    };
    Localisation.updateOne({ id : id }).set(valeur).exec((err, value) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/destination');
    });
  },

  delete: function(req, res, next) {
    let id = req.param('id');
    Localisation.destroy({id : id} , function Update(err, value) {
      if (err) {
        return next(err);
      }
      return res.redirect('/destination');
    });
  },


};

