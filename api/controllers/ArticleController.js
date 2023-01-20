/* eslint-disable no-undef */
/**
 * ArticleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: function(req, res) {
    const _LIMIT_   = 10;
    let page        = (req.param('p')) ? parseInt(req.param('p'),10) : 1;
    let total       = 0;
    let pagination   = '';

    Produit.find().limit(_LIMIT_).skip(page-1).exec((err, list) => {
      if (err) {return Error('Error');}
      Produit.count().exec((err1, totalRecords) => {
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
        return res.view( 'article/index' , {
          responsable: list,
          page: page, pagination: pagination, total: total
        });
      });
    });
  },

  create: (req, res) => {
    Produit.create({
      // Matricule : generateMatricule(),
      nomArticle: req.param('nomArticle'),
      reference: req.param('reference'),
      designation: req.param('designation'),
    }, (err, resp) => {
      console.log(resp);
      if (err) {
        return res.serverError(resp);
      }
      return res.redirect('/article');
    });
  },

  new: async function(req, res) {
    return res.view( 'article/create');
  },

  show: function(req, res, next) {
    let id = req.param('id');
    Produit.findOne( {id : id})
    .exec(function Founded(err, value) {
      if (err) {
        return next(err);
      }
      res.view( 'article/show', {
        element: value
      });
    });
  },

  edit: async function(req, res, next) {
    Produit.findOne(req.param('id')).exec(async function Founded(err, value) {
      if (err) {return next(err);}
      return res.view( 'article/edit', {
        element: value
      });

    });
  },

  update: function(req, res, next) {
    let id = req.param('id');
    let valeur = {
      nomArticle: req.param('nomArticle'),
      reference: req.param('reference'),
      designation: req.param('designation'),
    };
    Produit.updateOne({ id : id }).set(valeur).exec((err, value) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/article');
    });
  },

  delete: function(req, res, next) {
    let id = req.param('id');
    Produit.destroy({id : id} , function Update(err, value) {
      if (err) {
        return next(err);
      }
      return res.redirect('/article');
    });
  },


};

