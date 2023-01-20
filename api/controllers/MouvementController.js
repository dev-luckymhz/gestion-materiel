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

    const _LIMIT_   = 10;
    let page        = (req.param('p')) ? parseInt(req.param('p'),10) : 1;
    let total       = 0;
    let pagination   = '';

    Mouvement.find().populate('produit')
    .populate('Responsable').populate('Destination').limit(_LIMIT_).skip(page-1).exec((err, list) => {
      if (err) {return Error('Error');}
      Mouvement.count().exec((err1, totalRecords) => {
        if (err1) {return Error('Error');}
        // sails.log(list)
        total = totalRecords;
        /* BEGIN: pagination bar */
        if( total > _LIMIT_ ) {
          if( page > 1 ) {
            let previou = parseInt( page, 10 ) - 1;
            pagination = '<li class="page-item mr-1"><a href="/article/?p=' + previou + '">«</a></li>';
          }

          totalPages = Math.ceil(parseInt( total, 10 ) / _LIMIT_);

          for( var i = 1; i <= totalPages; i++ ) {
            if( i === page ) {
              pagination += '<li class="active page-item  mr-1"><a href="#">' + i + '</a></li>';
            } else {
              pagination += '<li><a href="/article/?p='+ i +'" class="page-item mr-1" >'+ i +'</a></li>';
            }
          }

          let next = parseInt(page, 10) + 1;
          if( next < total ) {
            pagination += '<li><a href="/article/?p=' + next + '" class="page-item mr-1">»</a></li>';
          }
        }
        /* END: pagination bar */
        return res.view( 'mouvement/index' , {
          result: list,
          page: page, pagination: pagination, total: total
        });
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
      return res.redirect('/mouvement');
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
    Mouvement.findOne(req.param('id')).exec(async function Founded(err, value) {
      if (err) {return next(err);}
      try {
        let prod = await Produit.find();
        let loc = await Localisation.find();
        let resp = await Responsable.find();
        // sails.log(value);
        moment(value.Date).format('DD-MM-YYYY');
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
    Mouvement.updateOne({ id : id }).set(valeur).exec((err, value) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/mouvement');
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
