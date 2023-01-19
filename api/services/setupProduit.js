const setup = async () => {
    
  await produit.createEach([
    { nomArticle: 'Adaptateur de voyage', reference: 'A00001',designation:'AV' },
    { nomArticle: 'Amortisseur', reference: 'A00002',designation:'Amortisseur' },
    { nomArticle: 'Ampoule à vis', reference: 'A00003',designation:'AmpouleVis' },
    { nomArticle: 'Antivol', reference: 'A00004',designation:'Antivol' },   
  ]);
  await User.createEach([
    { emailAddress: 'admin@admin.com', fullName: 'alphonsia Best', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('admin123') },
    { emailAddress: 'abc@admin.com', fullName: 'alphonsia Best', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('abc123') },
  ]);


  await Mouvement.createEach([
    { reference: 'abc123', article: 'smartphone de alphonsia Best', typeMv: true, quantity: 3, date:  moment(new Date()).format('MM Do YYYY') , responsable: 'Alphonsia', destination: 'toliara'},
    { reference: 'abc123', article: 'tablette de alphonsia Best', typeMv: false, quantity: 2, date:  moment(new Date()).format('MM Do YYYY') , responsable: 'Alphonsia', destination: 'fianarantsoa'},
  ]);
}


module.exports.setup;