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

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect' },



  'GET /mouvement': 'MouvementController/index' ,
  'GET /mouvement/new': 'MouvementController/new' ,
  'POST /mouvement/create': 'MouvementController/create' ,
  'POST /mouvement/search': 'MouvementController/search' ,
  'POST /mouvement/update': 'MouvementController/update' ,
  'GET /mouvement/show/:id': 'MouvementController/show' ,
  'GET /mouvement/edit/:id': 'MouvementController/edit' ,
  'GET /mouvement/delete/:id': 'MouvementController/delete' ,


  'GET /responsable': 'ResponsableController/index' ,
  'GET /responsable/new': 'ResponsableController/new' ,
  'POST /responsable/create': 'ResponsableController/create' ,
  'POST /responsable/update': 'ResponsableController/update' ,
  'GET /responsable/show/:id': 'ResponsableController/show' ,
  'GET /responsable/edit/:id': 'ResponsableController/edit' ,
  'GET /responsable/delete/:id': 'ResponsableController/delete' ,


  'GET /article': 'ArticleController/index' ,
  'GET /article/new': 'ArticleController/new' ,
  'POST /article/create': 'ArticleController/create' ,
  'POST /article/update': 'ArticleController/update' ,
  'GET /article/show/:id': 'ArticleController/show' ,
  'GET /article/edit/:id': 'ArticleController/edit' ,
  'GET /article/delete/:id': 'ArticleController/delete' ,


  'GET /destination': 'DestinationController/index' ,
  'GET /destination/new': 'DestinationController/new' ,
  'POST /destination/create': 'DestinationController/create' ,
  'POST /destination/update': 'DestinationController/update' ,
  'GET /destination/show/:id': 'DestinationController/show' ,
  'GET /destination/edit/:id': 'DestinationController/edit' ,
  'GET /destination/delete/:id': 'DestinationController/delete' ,


  //   'GET /Entretient': 'EntretientController/index' ,
  //   'GET/Entreient':'Entretientcontroller/new',
  // 'POST / Entretient': {view: 'Entretient/create'},
  // 'GET / Entretient': {action: 'Entretient/edit'},
  // 'GET/ Entretient':   {action: 'Entretient/delete'},
  'GET /welcome/:unused?':   'MouvementController/index',

  'GET /historique': { action: 'view-historique' },

  'GET /faq':                { action:   'view-faq' },
  'GET /legal/terms':        { action:   'legal/view-terms' },
  'GET /legal/privacy':      { action:   'legal/view-privacy' },
  'GET /contact':            { action:   'view-contact' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { action: 'entrance/view-confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout':                           { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':            { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':        { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },
  'POST  /api/v1/observe-my-session':                 { action: 'observe-my-session', hasSocketFeatures: true },

};
