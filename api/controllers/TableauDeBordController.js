/**
 * TableauDeBordControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    index: function(req, res, next) {
        TableauDeBord.find().populate('TableauDeBord').exec(function(err, index) {
            if (err) return Error('Error');
            // sails.log(list)
            return res.view( 'TableauDeBord/index' , {
                result: index
            });
        });
    },
    route: '/TableauDeBord'
};
