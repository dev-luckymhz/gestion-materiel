/* eslint-disable no-undef */
module.exports = {


  friendlyName: 'Setups',


  description: 'Setups something.',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    // TODO
    const moment = require('moment');
    // eslint-disable-next-line no-undef
    await Produit.createEach([
      { nomArticle: 'Adaptateur de voyage', reference: 'A00001',designation:'AV' },
      { nomArticle: 'Amortisseur', reference: 'A00002',designation:'Amortisseur' },
      { nomArticle: 'Ampoule à vis', reference: 'A00003',designation:'AmpouleVis' },
      { nomArticle: 'Antivol', reference: 'A00004',designation:'ntivo' },
      { nomArticle: 'Armoire 2 porte Chicago', reference: 'A00005',designation:'Armoire2porteChicago' },
      { nomArticle: 'Assemblage (paire)', reference: 'A00006',designation:'Assemblage' },
      { nomArticle: 'Assie pour pneus', reference: 'A00007',designation:'Assiepourpneus' },
      { nomArticle: 'Axe AR VTT', reference: 'A00008',designation:'AxeARVTT' },
      { nomArticle: 'Axe Avant', reference: 'A00009',designation:'AxeAvant' },
      { nomArticle: 'Axe Central', reference: 'A00010',designation:'Axe Central' },
      { nomArticle: 'Axe Central (Vélo)', reference: 'A00011',designation:'AxeCentraleVelo' },
      { nomArticle: 'Badge cuir UH00', reference: 'B10001',designation:'BadgecuirUH00' },
      { nomArticle: 'Baffle JVC XSMC210', reference: 'B20002',designation:'BaffleJVCXSMC210' },
      { nomArticle: 'Baguette lumineuse 20w', reference: 'B30003',designation:'Baguettelumineuse20w' },
      { nomArticle: 'Balai', reference: 'B40004',designation:'Balai' },
      { nomArticle: 'Balai serpillère', reference: 'B50005',designation:'Balaiserpillère' },
      { nomArticle: 'Balance électronique 50kgs', reference: 'B60006',designation:'BalanceElectronique50kgs' },
      { nomArticle: 'Bande reflêchissante 10m', reference: 'B70007',designation:'BandeReflêchissante10m' },
      { nomArticle: 'Batterie 9A (Baffle)', reference: 'B80008',designation:'Batterie9A(Baffle)' },
      { nomArticle: 'Batterie Cyclo Solaire', reference: 'B90009',designation:'BatterieCycloSolaire' },
      { nomArticle: 'Batterie Motorola XT535', reference: 'B00010',designation:'BatterieMotorolaXT535' },
      { nomArticle: 'Batterie Sony Experia Double puce', reference: 'B00011',designation:'BatterieSonyExperiaDoublepuce' },
      { nomArticle: 'Bequille cyclo', reference: 'B00012',designation:'Bequille cyclo' },
      { nomArticle: 'Big Bag', reference: 'B00013',designation:'BigBag' },
      { nomArticle: 'Billes roulement pour jeu de fourche', reference: 'B00014',designation:'Billesroulementpourjeudefourche' },
      { nomArticle: 'Billes vélo', reference: 'B00015',designation:'BillesVélo' },
      { nomArticle: 'Boîte alimentaire', reference: 'B00016',designation:'BoîteAlimentaire' },
      { nomArticle: 'Boîtier Roue Libre', reference: 'B00017',designation:'BoîtierRoueLibre' },
      { nomArticle: 'Boîtier roulement VTT', reference: 'B00018',designation:'BoîtierRoulementVTT' },
      { nomArticle: 'Bottes', reference: 'B00019',designation:'Bottes' },
      { nomArticle: 'Boudin', reference: 'B00020',designation:'Boudin' },
      { nomArticle: 'Bouilloire 1.7', reference: 'B00021',designation:'Bouilloire1.7' },
      { nomArticle: 'Boulon 10', reference: 'B00022',designation:'Boulon10' },
      { nomArticle: 'Boulon 13', reference: 'B00023',designation:'Boulon13' },
      { nomArticle: 'Boulon 14', reference: 'B00024',designation:'Boulon14' },
      { nomArticle: 'Boulon 17', reference: 'B00025',designation:'Boulon17' },
      { nomArticle: 'Boulon 20', reference: 'B00026',designation:'Boulon20' },
      { nomArticle: 'Boulon 4', reference: 'B00027',designation:'Boulon4' },
      { nomArticle: 'Boulon frein', reference: 'B00028',designation:'Boulonfrein' },
      { nomArticle: 'Brochure Produits Nickel', reference: 'B00029',designation:'BrochureProduitsNickel' },
      { nomArticle: 'Brosse à linge', reference: 'B00030',designation:'Brosselinge' },
      { nomArticle: 'Bulletin de paie (imprimé)', reference: 'B00031',designation:'BulletinPaie' },
      { nomArticle: 'Câble vélo', reference: 'C00001',designation:'Câblevélo' },
      { nomArticle: 'Câble VGA (Ecran)', reference: 'C00002',designation:'CâbleVGA' },
      { nomArticle: 'Cache Bouche Type 2', reference: 'C00003',designation:'CacheBoucheType2' },
      { nomArticle: 'Cache poussières RALAIVITA', reference: 'C00004',designation:'CachePoussièresRALAIVITA' },
      { nomArticle: 'Cachet Greentsika 60x30 (Aladin)', reference: 'C00005',designation:'CachetGreentsika60x30' },
      { nomArticle: 'Cadenas', reference: 'C00006',designation:'Cadenas' },
      { nomArticle: 'Cadenas cyclo', reference: 'C00007',designation:'CadenasCyclo' },
      { nomArticle: 'Combinaison Bleu Kids', reference: 'C00009',designation:'CombinaisonBleuKids' },
      { nomArticle: 'Cone VTT', reference: 'C00010',designation:'ConeVTT' },
      { nomArticle: 'Contre cadre Paire', reference: 'C00011',designation:'ContreCadrePaire' },
      { nomArticle: 'Corde badge', reference: 'C00012',designation:'CordeBadge' },
      { nomArticle: 'Corner Cyclo', reference: 'C00013',designation:'CornerCyclo' },
      { nomArticle: 'Cuvette grise', reference: 'C00014',designation:'CuvetteGrise' },
      { nomArticle: 'Cahier 200 pages (GM)', reference: 'C00015',designation:'Cahier200pages' },
      { nomArticle: 'Cahier 50 pages', reference: 'C00016',designation:'Cahier50pages' },
      { nomArticle: 'Caisse métal Rouge', reference: 'C00017',designation:'CaisseMétalRouge' },
      { nomArticle: 'Caissette à argent', reference: 'C00018',designation:'CaissetteArgent' },
      { nomArticle: 'Caoutchouc pompe', reference: 'C00019',designation:'CaoutchoucPompe' },
      { nomArticle: 'Capitonnage de selle', reference: 'C00020',designation:'CapitonnageSelle' },
      { nomArticle: 'Carnet', reference: 'C00021',designation:'arnet' },
      { nomArticle: 'Carte de Membre (v2.0)', reference: 'C00022',designation:'CarteMembreV2 ' },
      { nomArticle: 'Carte Membres PVC', reference: 'C00023',designation:'CarteMembresPVC' },
      { nomArticle: ' Carte mémoire', reference: 'C00024',designation:'CarteMémoire' },
      { nomArticle: 'Case VTT', reference: 'C00025',designation:'CaseVTT' },
      { nomArticle: 'Casquette', reference: 'C00026',designation:'asquette' },
      { nomArticle: 'Chaîne Cyclo', reference: 'C00027',designation:'ChaîneCyclo' },
      { nomArticle: ' Chaîne métallique', reference: 'C00028',designation:'ChaîneMétallique' },
      { nomArticle: 'Chaîne vélo', reference: 'C00029',designation:'Chaînevélo' },
      { nomArticle: 'Chaise bureau à coussin (Bleu)', reference: 'C00030',designation:'ChaiseBureauCoussin' },
      { nomArticle: 'Chaise de bureau tournante noi', reference: 'C00031',designation:'ChaiseBureauTournanteNoi' },
      { nomArticle: 'Chambre à air (AV)', reference: 'C00032',designation:'ChambreAirAV' },
      { nomArticle: ' Chambre à air cyclo (AR', reference: 'C00033',designation:'ChambreAirCyclo' },
      { nomArticle: 'Chambre à air Vaovao', reference: 'C00034',designation:'ChambreAirVa' },
      { nomArticle: 'Chambre à air vélo', reference: 'C000035',designation:'ChambreAirVélo' },
      { nomArticle: 'Changement VTT', reference: 'C00036',designation:'ChangemenTVTT' },
      { nomArticle: 'Chargeur PC (Asus)', reference: 'C00037',designation:'ChargeurPCAsus' },
      { nomArticle: 'Chargeur PC (Compaq)', reference: 'C00038',designation:'ChargeurPCCompaq' },
      { nomArticle: ' Chaussettes de protection', reference: 'C00039',designation:'ChaussettesProtection' },
      { nomArticle: 'Chaussures de sécurité (Hautes', reference: 'C00040',designation:'ChaussureSécurité ' },
      { nomArticle: 'Chemise cartonnée Beige', reference: 'C00041',designation:'ChemiseCartonnéeBeige' },
      { nomArticle: 'Chemise cartonnée Bleu', reference: 'C00042',designation:'ChemiseCartonnéeBleu' },
      { nomArticle: 'Chemise cartonnée Jaune', reference: 'C00043',designation:'ChemisCcartonnéJaune' },
      { nomArticle: 'Chemise cartonnée Rose', reference: 'C00044',designation:'ChemiseCartonnéeRose' },
      { nomArticle: 'Chemise cartonnée Vert', reference: 'C00045',designation:'' },
      { nomArticle: 'Cheville cyclo', reference: 'C00046',designation:'ChevilleCyclo' },
      { nomArticle: 'Chiffon vert microfibre', reference: 'C00047',designation:'ChiffonVertMicrofibre' },
      { nomArticle: 'cidre 750mlVitesse VTT', reference: 'V0005',designation:'cidre750mlVitesseVTT' },
      { nomArticle: 'Ciseaux', reference: 'C00048',designation:'Ciseaux' },
      { nomArticle: 'Classeur 200 feuillets plastique', reference: 'C00049',designation:'Classeur200FeuilletsPlastique' },
      { nomArticle: 'Classeur Archive perforé', reference: 'C00050',designation:'ClasseurArchivePerforé' },
      { nomArticle: 'Classeur Bleu Clear Book', reference: 'C00051',designation:'ClasseurBleuClearBook' },
      { nomArticle: 'Clavette', reference: 'C00052',designation:'Clavette' },
      { nomArticle: 'Clavier PC (Meetion)', reference: 'C00053',designation:'ClavierPCMeetion' },
      { nomArticle: 'Clé alleme étoile', reference: 'C00054',designation:'CléAllemeEtoile' },
      { nomArticle: 'Clé de 15 (VTT)', reference: 'C00055',designation:'Clé15VTT' },
      { nomArticle: 'Clé Griffe', reference: 'C00056',designation:'CléGriffe' },
      { nomArticle: 'Clé Molette', reference: 'C00057',designation:'CléMolette' },
      { nomArticle: 'Clé pipe 14', reference: 'C00058',designation:'CléPipe14' },
      { nomArticle: 'Clé Pipe 17', reference: 'C00059',designation:'CléPipe17' },
      { nomArticle: 'Clé pipe chrome', reference: 'C00060',designation:'CléPipeChrome' },
      { nomArticle: 'Clé rayon', reference: 'C00061',designation:'CléRayon' },
      { nomArticle: 'Colle à vélo (1/4 l) Caoutchouc', reference: 'C00062',designation:'ColleVélo(1/4 l)Caoutchouc' },
      { nomArticle: 'Colle Movilith 270 0.5kgs', reference: 'C00063',designation:'ColleMovilith270 0.5kgs' },
      { nomArticle: 'Collier tige selle', reference: 'C00064',designation:'CollierTigeSelle' },

      { nomArticle: 'Dérailleur Vtt', reference: 'D11111',designation:'DérailleurVtt' },
      { nomArticle: 'Derrière VTT', reference: 'D11112',designation:'DerrièreVTT' },
      { nomArticle: 'Désinfectant Goldnett 500ml', reference: 'D11113',designation:'DésinfectantGoldnett500ml' },
      { nomArticle: 'Désodorisan', reference: 'D11114',designation:'Désodorisan' },
      { nomArticle: 'Désodorisant Aéroso', reference: 'D11115',designation:'DésodorisantAéroso' },
      { nomArticle: 'Détartrant Nickel 1', reference: 'D11116',designation:'DétartrantNickel1' },
      { nomArticle: 'Développement cyclo', reference: 'D11117',designation:'DéveloppementCyclo' },
      { nomArticle: 'Développement VTT', reference: 'D11118',designation:'DéveloppementVTT' },
      { nomArticle: 'Disque cyclo', reference: 'D11119',designation:'DisqueCyclo' },
      { nomArticle: 'Distributeur de savon automatique', reference: 'D11110',designation:'DistributeurSavonAutom' },
      { nomArticle: 'Eau de javel', reference: 'E00001',designation:'EauJavel' },
      { nomArticle: 'Eau de javel 1l B52', reference: 'E00002',designation:'EauJavel1lB52' },
      { nomArticle: 'Ecrou', reference: 'E00003',designation:'Ecrou' },
      { nomArticle: 'Ecrou ASSI  pour pneus', reference: 'E00004',designation:'EcrouASSIPneus' },
      { nomArticle: 'Encre G1490', reference: 'E00005',designation:'EncreG1490' },
      { nomArticle: 'Ensemblage', reference: 'E00006',designation:'Ensemblage' },
      { nomArticle: 'Ensemble frein', reference: 'E00007',designation:'EnsembleFrein' },
      { nomArticle: 'Enveloppe', reference: 'E00008',designation:'Enveloppe' },
      { nomArticle: 'Eponges', reference: 'E00009',designation:'Eponges' },
      { nomArticle: 'Extra Propre 75g', reference: 'E00010',designation:'ExtraPropre75' },
      { nomArticle: 'Famaky', reference: 'F00001',designation:'Famaky' },
      { nomArticle: 'Fer à repasser', reference: 'F00002',designation:'FerRepasser' },
      { nomArticle: 'Feur de signalisation ar (Selle)', reference: 'F00003',designation:'FeurSignalisationArSelle' },
      { nomArticle: 'Fil Bobine', reference: 'F00004',designation:'FilBobine' },
      { nomArticle: 'Fil de fer 0.25kgs', reference: 'F00005',designation:'FilFer0.25kgs' },
      { nomArticle: 'Filtre à eau', reference: 'F00006',designation:'FiltreEau' },
      { nomArticle: 'Flying Banner', reference: 'F00007',designation:'FlyingBanner' },
      { nomArticle: 'Fourche', reference: 'F00008',designation:'Fourche' },
      { nomArticle: 'Fourche avant (Cyclo)', reference: 'F00009',designation:'FourcheAvantCyclo' },
      { nomArticle: 'Frein à pied', reference: 'F00010',designation:'FreinPied' },
      { nomArticle: 'Frein cyclo', reference: 'F00011',designation:'FreinCyclo' },
      { nomArticle: 'Freins VTT', reference: 'F00012',designation:'FreinsVTT' },
      { nomArticle: 'Fût Bleu 250l', reference: 'F00013',designation:'FûtBleu250l' },

      { nomArticle: 'Gants (Type 1)', reference: 'G00001',designation:'GantsType1' },
      { nomArticle: 'Gants (Type2)', reference: 'G00002',designation:'GantsType2' },
      { nomArticle: 'Gel Hydroalcolique 50ml Impec', reference: 'G00003',designation:'GelHydroalcolique50mlImpec' },
      { nomArticle: 'Gel Impec 50m', reference: 'G00004',designation:'GelImpec50m' },
      { nomArticle: 'Gel WC Nickel', reference: 'G00005',designation:'GelWCNickel' },
      { nomArticle: 'Gilet Bleu Lavande', reference: 'G00006',designation:'GiletBleuLavande' },
      { nomArticle: 'Gilet fluorescent', reference: 'G00007',designation:'GiletFluorescent' },
      { nomArticle: 'Gony stockagage', reference: 'G00008',designation:'GonyStockagage' },
      { nomArticle: 'Guidon', reference: 'G00009',designation:'Guidon' },
      { nomArticle: 'Huawei Honor P2', reference: 'G00010',designation:'HuaweiHonorP2' },
      { nomArticle: 'Huawei Y5 2019', reference: 'H1111',designation:'HuaweiY52019' },
      { nomArticle: 'Huile de graissage 1kg', reference: 'H1112',designation:'HuileGraissage1kg' },
      { nomArticle: 'Huile de tounesol 1l Sunny Oil', reference: 'H1113',designation:'HuileTounesol1lSunnyOil' },
      { nomArticle: 'HTC Desire 320', reference: 'H1114',designation:'HTCDesire320' },
      { nomArticle: 'Imprimante Canon PIXMA G3411', reference: 'I0001',designation:'ImprimanteCanonPIXMAG3411' },
      { nomArticle: 'Imprimante HP Deskjet 3560', reference: 'I00002',designation:'ImprimanteHPDeskjet3560' },
      { nomArticle: 'Jante AR VTT', reference: 'J2221',designation:'JanteARVTT' },
      { nomArticle: 'Jante AV VTT', reference: 'J2222',designation:'JanteAVVTT' },
      { nomArticle: 'Jante Avant (Cyclo)', reference: 'J2223',designation:'JanteAvantCyclo' },
      { nomArticle: 'Jantes arrière', reference: 'J2224',designation:'JantesArrière' },
      { nomArticle: 'Jeux de fourche', reference: 'J2225',designation:'JeuxFourche' },
      { nomArticle: 'Kit clés 1', reference: 'K00001',designation:'KitClés1' },
      { nomArticle: 'Kit clés 2', reference: 'K00002',designation:'KitClés2' },
      { nomArticle: 'Kyranil', reference: 'K00003',designation:'Kyranil' },
      { nomArticle: 'Lame de scie', reference: 'L00001',designation:'LameScie' },
      { nomArticle: 'Lampe à Néon', reference: 'L00002',designation:'LampeNéon' },
      { nomArticle: 'Lave main Nickel 750ml', reference: 'L00003',designation:'LaveMainNickel750ml' },
      { nomArticle: 'Lave vitre Nickel 750ml', reference: 'L00004',designation:'LaveVitreNickel750ml' },
      { nomArticle: 'Lessive 350ml Nickel', reference: 'L00005',designation:'Lessive350mlNickel' },
      { nomArticle: 'LG K4', reference: 'L00006',designation:'LGK4' },
      { nomArticle: 'LG K8', reference: 'L00007',designation:'LGK8' },
      { nomArticle: 'Liquide vaisselle 1l Nickel', reference: 'L00008',designation:'LiquideVaisselle1lNickel' },
      { nomArticle: 'Machine à calculer', reference: 'M00111',designation:'MachineCalculer' },
      { nomArticle: 'Machoîre', reference: 'M01111',designation:'Machoîre' },
      { nomArticle: 'Magnette de frein VTT', reference: 'M00112',designation:'MagnetteFreinVTT' },
      { nomArticle: 'Mamelo Pa', reference: 'M00113',designation:'MameloPa' },
      { nomArticle: 'Manivelle cyclo', reference: 'M00114',designation:'ManivelleCyclo' },
      { nomArticle: 'Marqueur pour tableau blanc', reference: 'M00115',designation:'MarqueurTableauBlanc' },
      { nomArticle: 'Masque Greentsika (Rasoherina) Bleu Nuit', reference: 'M00116',designation:'MasqueGreentsikaRasoherinaBleuNuit' },
      { nomArticle: 'Mètre ruban (3m)', reference: 'M00117',designation:'MètreRuban3m' },
      { nomArticle: 'Mètre ruban 5m', reference: 'M00118',designation:'MètreRuban5m' },
      { nomArticle: 'Miel Polyfloral 500g"', reference: 'M00119',designation:'MielPolyFloral500g' },
      { nomArticle: 'Mosquito FRANCE COILS', reference: 'M00120',designation:'MosquitoFRANCECOILS' },
      { nomArticle: 'Moyeux Avant', reference: 'M00121',designation:'MoyeuxAvant' },
      { nomArticle: 'Moyeux Fixe', reference: 'M00122',designation:'MoyeuxFixe' },
      { nomArticle: 'Moyeux Roue libre', reference: 'M00123',designation:'MoyeuxRouelibre' },
      { nomArticle: 'Moyeux Roulement Arrière', reference: 'M00124',designation:'MoyeuxRoulementArrière' },
      { nomArticle: 'Moyeux Roulement Arrière Complet', reference: 'M00125',designation:'MoyeuxRoulementArrièreComplet' },
      { nomArticle: 'Multiprise parafoudre', reference: 'M00126',designation:'MultipriseParafoudre' },
      { nomArticle: 'Nettoyant sol Impec 1l', reference: 'N00001',designation:'NettoyantSolImpec 1l' },
      { nomArticle: 'Nickel liquide vaisselle 1l', reference: 'N00002',designation:'Nickelliquidevaisselle1l' },
      { nomArticle: 'Numérotateur à 6 chiffres', reference: 'N00003',designation:'Numérotateur6chiffres' },
      { nomArticle: 'Onduleur KOHLER UPS STC1000 600W', reference: 'O11111',designation:'OnduleurKOHLERUPSSTC1000600W' },
      { nomArticle: 'Oreillette Bluetooth Remax', reference: 'O11112',designation:'OreilletteBluetoothRemax' },
      { nomArticle: 'Paire de gants', reference: 'P00001',designation:'PaireGants' },
      { nomArticle: 'Papier A4 (500 feuilles)', reference: 'P00002',designation:'PapierA4500feuilles)' },
      { nomArticle: 'Papier Autocollant A4 (50pcs)', reference: 'P00003',designation:'PapierAutocollantA4' },
      { nomArticle: 'Papier plastifiant', reference: 'P00004',designation:'PapierPlastifiant' },
      { nomArticle: 'Papier transfert', reference: 'P00005',designation:'PapierTransfert' },
      { nomArticle: 'Parasol', reference: 'P00011',designation:'Parasol' },
      { nomArticle: 'Patin de freins AV/AR (VTT)', reference: 'P00012',designation:'PatinfreinsAV/ARVTT)' },
      { nomArticle: 'Pelle', reference: 'P00013',designation:'Pelle' },
      { nomArticle: 'Pelle à déchets (Préco)', reference: 'P00014',designation:'PelleDéchetsPréco)' },
      { nomArticle: 'Perche à selfie REMAX', reference: 'P00015',designation:'PercheSelfieREMAX' },
      { nomArticle: 'Perforatrice Maped', reference: 'P00016',designation:'PerforatriceMaped' },
      { nomArticle: 'Petite cuillère', reference: 'P00017',designation:'PetiteCuillère' },
      { nomArticle: 'Pétrole 1l', reference: 'P00018',designation:'Pétrole1l' },
      { nomArticle: 'Piles Durata GM', reference: 'P00019',designation:'PilesDurataGM' },
      { nomArticle: 'Pilles AAA Alcalines', reference: 'P00120',designation:'PillesAAA' },
      { nomArticle: 'Pince à découper', reference: 'P00121',designation:'PinceDécouper' },
      { nomArticle: 'Pince à linge', reference: 'P00122',designation:'Pincelinge' },
      { nomArticle: 'Pira frein', reference: 'P00123',designation:'PiraFrein' },
      { nomArticle: 'Plaque visuelles 40x60', reference: 'P00124',designation:'PlaqueVisuelles40x60' },
      { nomArticle: 'Plateau de service', reference: 'P00125',designation:'PlateauService' },
      { nomArticle: 'PNEU arrière 14000', reference: '00126',designation:'PNEUArrière14000' },
      { nomArticle: 'PNEU arrière CASCEN Tires', reference: 'P00127',designation:'PNEUArrièreCASCENTires' },
      { nomArticle: 'PNEU arrière LuckyStone', reference: 'P00128',designation:'PNEUArrièreLuckyStone' },
      { nomArticle: 'Pneu arrière Star', reference: 'P00129',designation:'PneuArrièreStar' },
      { nomArticle: 'Pneu Avant Cabelo', reference: 'P00230',designation:'PneuAvantCabelo' },
      { nomArticle: 'Pneu avant cyclo', reference: 'P00231',designation:'PneuAvantCyclo' },
      { nomArticle: 'Pestone ARPneu D', reference: '00232',designation:'PestoneARPneuD' },
      { nomArticle: 'Pneu vélo', reference: 'P00233',designation:'PneuVélo' },
      { nomArticle: 'Poignées Cyclo', reference: 'P00001',designation:'PoignéesCyclo' },
      { nomArticle: 'Poignées VTT', reference: 'P00002',designation:'PoignéesVTT' },
      { nomArticle: 'Polo Ralaivita', reference: 'P00003',designation:'PoloRalaivita' },
      { nomArticle: 'Pompe à vélo', reference: 'P00004',designation:'PompeVélo' },
      { nomArticle: 'Porte badge', reference: 'P00005',designation:'PorteBadge' },
      { nomArticle: 'Porte carte mémoire', reference: 'P00006',designation:'PorteCarteMémoire' },
      { nomArticle: 'Porte clé', reference: 'P00007',designation:'PorteClé' },
      { nomArticle: 'Porte Disque Cyclo', reference: 'P00008',designation:'PorteDisqueCyclo' },
      { nomArticle: 'Porte lame de scie', reference: 'P00009',designation:'PortelameScie' },
      { nomArticle: 'Porte Moyeux', reference: 'P00010',designation:'PorteMoyeux' },
      { nomArticle: 'Porte roue libre', reference: 'P00011',designation:'PorteRouelibre' },
      { nomArticle: 'Porte roulement', reference: 'P00012',designation:'PorteRoulement' },
      { nomArticle: 'Porte serpillère', reference: 'P00013',designation:'PorteSerpillère' },
      { nomArticle: 'Porte stylo', reference: 'P00014',designation:'PorteStylo' },
      { nomArticle: 'Porte tampon', reference: 'P00015',designation:'PorteTampon' },
      { nomArticle: 'Porte document', reference: 'P00016',designation:'PorteDocument' },
      { nomArticle: 'Pose frein', reference: 'P00017',designation:'PoseFrein' },
      { nomArticle: 'Post It', reference: 'P00018',designation:'PostIt' },
      { nomArticle: 'Poubelles Noir 80l Noir', reference: 'P00019',designation:'PoubellesNoir80lNoir' },
      { nomArticle: 'Poulie Cyclo', reference: 'P00020',designation:'PoulieCyclo' },
      { nomArticle: 'Prise programmable', reference: 'P00021',designation:'PriseProgrammable' },
      { nomArticle: 'PS Rouge paquet', reference: 'P00022',designation:'PSRougePaquet' },
      { nomArticle: 'Pulvérisateur 16l Bleu', reference: 'P00023',designation:'Pulvérisateur16lBleu' },
      { nomArticle: 'Punaises', reference: 'P00024',designation:'Punaises' },
      { nomArticle: 'Rallonge 6 entrées', reference: 'R0001',designation:'Rallonge6entrées' },
      { nomArticle: 'Rame papier A4', reference: 'R0002',designation:'RamePapierA4' },
      { nomArticle: 'Rayon AR VTT', reference: 'R00003',designation:'RayonARVTT' },
      { nomArticle: 'Rayon avant', reference: 'R00004',designation:'' },
      { nomArticle: 'Rayon roues cyclo', reference: 'R00005',designation:'' },
      { nomArticle: 'Reçus de paiement', reference: 'R00006',designation:'' },
      { nomArticle: 'Registre des employés (Partie 1)', reference: 'R00007',designation:'RegistrEmployésPartie1' },
      { nomArticle: 'Registre des employés (Partie 2)', reference: 'R00008',designation:'RegistreEmployésPartie2' },
      { nomArticle: 'Registre des employés (Partie 3)', reference: 'R00009',designation:'RegistreEmployésPartie3' },
      { nomArticle: 'Régulateur cyclo solaire', reference: 'R00010',designation:'RégulateurCycloSolaire' },
      { nomArticle: 'Répétiteur Wifi Tenda', reference: 'R00011',designation:'RépétiteurWifiTenda' },
      { nomArticle: 'Ressort frein', reference: 'R00012',designation:'RessortFrein' },
      { nomArticle: 'Rétroviseur (Paire)', reference: 'R00013',designation:'RétroviseurPaire' },
      { nomArticle: 'Rondelles rayon', reference: 'R00014',designation:'RondellesRayon' },
      { nomArticle: 'Rondelles rayon', reference: 'R00015',designation:'RondellesRayon' },
      { nomArticle: 'Roue libre VTT', reference: 'R00016',designation:'RouelibreVTT' },
      { nomArticle: 'Régulateur cyclo solair', reference: 'R00017',designation:'RégulateurCycloSolair' },
      { nomArticle: 'Répétiteur Wifi Tenda', reference: 'R00018',designation:'RépétiteurWifiTenda' },
      { nomArticle: 'Ressort frein ', reference: 'R00019',designation:'RessortFrein' },
      { nomArticle: 'Rétroviseur (Paire)', reference: 'R00020',designation:'RétroviseurPaire' },
      { nomArticle: 'Rondelles rayon', reference: 'R00021',designation:'RondellesRayo' },
      { nomArticle: 'Roue libre VTT', reference: 'R00022',designation:'RouelibreVTT' },
      { nomArticle: 'Roulement 6200', reference: 'R00023',designation:'Roulement6200' },
      { nomArticle: 'Roulement 6203', reference: 'R00024',designation:'Roulement6203' },
      { nomArticle: 'Roulement 6205', reference: 'R00025',designation:'Roulement6205' },
      { nomArticle: 'Roulement 6304', reference: 'R00026',designation:'Roulement6304' },
      { nomArticle: 'Roulement arrière', reference: 'R00028',designation:'RoulementArrière' },
      { nomArticle: 'Roulement avant', reference: 'R00029',designation:'RoulementAvant' },
      { nomArticle: 'Roulement Boudin C', reference: 'R00030',designation:'RoulementBoudinC' },
      { nomArticle: 'Roulement Central', reference: 'R00031',designation:'RoulementCentral' },
      { nomArticle: 'Sac banane noir Adidas', reference: 'S44441',designation:'SacBananeNoirAdidas' },
      { nomArticle: 'Sac de transport', reference: 'S44442',designation:'SacTransport' },
      { nomArticle: 'Sac Kraft 25X31.5X21.5, anses', reference: 'S44443',designation:'SacKraft' },
      { nomArticle: 'Sac Livraison Picnic Mate', reference: 'S44444',designation:'SacLivraisonPicnicMate' },
      { nomArticle: 'Sac poubelles 100l', reference: 'S44445',designation:'SacPoubelles100l' },
      { nomArticle: 'Sacs banane Vert', reference: 'S44446',designation:'SacsBananeVert' },
      { nomArticle: 'Salopette réparateur', reference: 'S44447',designation:'SalopetteRéparateur' },
      { nomArticle: 'Savon de lessive en barre PM', reference: 'S44448',designation:'SavonlessiveebarrePM' },
      { nomArticle: 'Scie à bois', reference: 'S44449',designation:'ScieBois' },
      { nomArticle: 'Scotch épais', reference: 'S44410',designation:'ScotchEpais' },
      { nomArticle: 'Scotch Masking Tape', reference: 'S44411',designation:'ScotchMaskingTape' },
      { nomArticle: ' Seau', reference: 'S44412',designation:' Seau' },
      { nomArticle: 'Sel fin 250g', reference: 'S44413',designation:'SelFin250g' },
      { nomArticle: 'Selle (Cyclo)', reference: 'S44414',designation:'SelleCyclo' },
      { nomArticle: 'Selle VTT', reference: 'S44415',designation:'SelleVTT' },
      { nomArticle: 'Short Livraison', reference: 'S44416',designation:'ShortLivraison' },
      { nomArticle: 'Smartphone Redmi 3X', reference: 'S44417',designation:'SmartphoneRedmi3X' },
      { nomArticle: 'Souris PC', reference: 'S44418',designation:'SourisPC' },
      { nomArticle: 'Stablisateur PlusShield 2200G', reference: 'S44419',designation:'StablisateuPlusShield2200G' },
      { nomArticle: 'Stylo Bleu', reference: 'S44420',designation:'StyloBleu' },
      { nomArticle: 'Sucre blanc 1kgs', reference: 'S44421',designation:'SucreBlanc1kgs' },
      { nomArticle: 'Surligneurs', reference: 'S44422',designation:'Surligneurs' },
      { nomArticle: 'Table de bureau', reference: 'T2200',designation:'TablBureau' },
      { nomArticle: 'Tableau Blanc', reference: 'T2201',designation:'TableauBlanc' },
      { nomArticle: 'Tampon reçu paiement', reference: 'T2202',designation:'TamponReçuPaiement' },
      { nomArticle: 'Tasse café Gasy', reference: 'T2203',designation:'TasseCaféGasy' },
      { nomArticle: 'Téléphones LG', reference: 'T2203',designation:'TéléphonesLG' },
      { nomArticle: 'Terrode', reference: 'T2204',designation:'Terrode' },
      { nomArticle: 'Tige frein"', reference: 'T2205',designation:'TigeFrein' },
      { nomArticle: 'Tiroir Mobile 3 tiroirs', reference: 'T2206',designation:'TiroirMobile3tiroirs' },
      { nomArticle: 'Torchon', reference: 'T2207',designation:'Torchon' },
      { nomArticle: 'Tournevis', reference: 'T2208',designation:'Tournevis' },
      { nomArticle: 'Tuyau court', reference: 'T2209',designation:'TuyauCourt' },
      { nomArticle: 'Valve Cyclo', reference: 'V0001',designation:'ValveCyclo' },
      { nomArticle: 'Vélo VTT (Spark Next)', reference: 'V0002',designation:'VéloVTT' },
      { nomArticle: 'Verre plastique', reference: 'V0003',designation:'VerrePlastique' },
      { nomArticle: 'Vinaigre de cidre 750ml', reference: 'V0004',designation:'VinaigreCidre750ml' },
      { nomArticle: 'Xbanner 200x160', reference: 'X000001',designation:'Xbanner 200x160' },
    ]);

    await User.createEach([
      { emailAddress: 'admin@admin.com', fullName: 'alphonsia Best', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('admin123') },
      { emailAddress: 'abc@admin.com', fullName: 'alphonsia Best', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('abc123') },
    ]);



    // eslint-disable-next-line no-undef
    await Localisation.createEach([
      { ville: 'toliara', lot: '601', code: 'Gt'},
      { ville: 'morombe', lot: '607', code: 'GM'},
    ]);


    // eslint-disable-next-line no-undef
    await Responsable.createEach([
      { Matricule: 'z1', fisrtName: 'a', lastName: 't', cin: '465132'},
      { Matricule: 'z2', fisrtName: 'b', lastName: 'z', cin: '465136'},
    ]);

    // eslint-disable-next-line no-undef
    let prod = await Produit.find();
    let resp = await Responsable.find();
    let loc = await Localisation.find();

    // eslint-disable-next-line no-undef
    await Mouvement.createEach([
      { produit: prod[0].id, reference: 'haha', TypeMouvement: true, Quantite: 5,
        Date:  moment(new Date()).format('MM-Do-YYYY') , Responsable: resp[1].id, Destination: loc[0].id},
      { produit: prod[1].id, reference: 'haha', TypeMouvement: false, Quantite: 6,
        Date:  moment(new Date()).format('MM-Do-YYYY') , Responsable: resp[0].id, Destination: loc[1].id},
    ]);
  }


};
