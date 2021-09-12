const TagVideo = require('../models/Tags');

exports.createVideo = (req, res, next) => {
  const thing = new Thing({
    id: req.body.id,
    idVideo: req.body.idVideo,
    idTags: req.body.idTags
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
  Thing.deleteOne({id: req.params.id}).then(
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