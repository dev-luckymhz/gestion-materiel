/* eslint-disable no-undef */
/**
 * Mouvement
 *
 * @description :: Server-side logic for managing Mouvement
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const moment = require('moment')

generateReference =  function () {
  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let passwordLenght = 12;
  let password = '';
  for (let index = 0; index < passwordLenght; index++) {
    const randomNumber = Math.floor( Math.random() * chars.length );
    password += chars.substring(randomNumber, randomNumber + 1 );
  }
  return password;
};

module.exports = {
  index: function(req, res, next) {
    Mouvement.find().populate('produit')
    .populate('Responsable').populate('Destination').exec((err, list) => {
      if (err) {return Error('Error');}
      // sails.log(list)
      return res.view( 'mouvement/index' , {
        result: list
      });
    });
  },

  create: (req, res) => {
    let reference = generateReference();
    let date = req.param('Date');
    moment(date).format('DD/MM/YYYY');
    Mouvement.create({
      reference: reference,
      produit: req.param('Article'),
      TypeMouvement: req.param('TypeMouvement'),
      Quantite: req.param('Quantite'),
      Date: date,
      Destination: req.param('Destination'),
      Responsable: req.param('Responsable')
    }, (err, user) => {
      console.log(user);
      if (err) {
        return res.serverError(err);
      }
      // res.flash('message created');
      return res.redirect('back');
      // return res.send({ message: 'task created' });
    });
  },

  new: async function(req, res) {
    try {
      let prod = await Produit.find();
      let loc = await Localisation.find();
      let resp = await Responsable.find();
      return res.view( 'mouvement/create', {prod: prod , loc : loc, resp: resp});
    } catch (error) {
      return res.serverError(error);
    }
  },

  show: function(req, res, next) {
    let id = req.param('id');
    Mouvement.findOne( {id : id})
    .populate('produit')
    .populate('Responsable')
    .populate('Destination')
    .exec(function Founded(err, value) {
      if (err) {
        return next(err);
      }
      res.view( 'mouvement/show', {
        element: value
      });
    });
  },

  edit: async function(req, res, next) {
    Mouvement.findOne(req.param('id')).populate('produit').exec(async function Founded(err, value) {
      if (err) {return next(err);}
      try {
        let prod = await Produit.find();
        let loc = await Localisation.find();
        let resp = await Responsable.find();
        moment(value.produit).format('DD-MM-YYYY');
        return res.view( 'mouvement/edit', {
          element: value,
          prod: prod,
          loc : loc,
          resp: resp
        });
      } catch (error) {
        return res.serverError(error);
      }
    });
  },

  update: function(req, res, next) {
    let id = req.param('id');
    let valeur = {
      Article: req.param('article'),
      TypeMouvement: req.param('TypeMouvement'),
      Quantite: req.param('Quantite'),
      Date: req.param('Date'),
      Destination: req.param('Destination'),
      Responsable: req.param('Responsable')
    };
    Mouvement.update({ id : id }, valeur, function Update(err, value) {
      if (err) {
        return next(err);
      }
      return res.redirect('Mouvement/show/' + req.param('id'));
    });
  },

  delete: function(req, res, next) {
    let id = req.param('id');
    Mouvement.destroy({id : id} , function Update(err, value) {
      if (err) {
        return next(err);
      }
      return res.redirect('/Mouvement');
    });
  },

};
