/**
 * Profiles.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {
    Matricule: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 15,
    },
    fisrtName: {
      type: 'string',
      required: true,
      maxLength: 15,
    },
    lastName: {
      type: 'string',
      required: true,
      maxLength: 15,
    },
    cin: {
      type: 'string',
      required: true,
      unique: true,
      example: 1
    }
  },

  customToJSON: function() {
    return _.omit(this, ['createdAt', 'updatedAt']);
  },
};
