const Tags = require('../models/Tags');

exports.createVideo = (req, res, next) => {
  const thing = new Thing({
    idTags: req.body.idTags,
    valeur: req.body.valeur
  });
  thing.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};



exports.deleteVideo = (req, res, next) => {
  Thing.deleteOne({idTags: req.params.idTags}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};