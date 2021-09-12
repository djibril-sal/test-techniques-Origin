const Video = require('../models/Video');

exports.createVideo = (req, res, next) => {
  const thing = new Thing({
    idVideo: req.body.title,
    nom: req.body.nom,
    description: req.body.description,
    url: req.body.url,
    createdAt: req.body.createdAt,
    updateAt: req.body.updateAt
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

exports.getOneVideo = (req, res, next) => {
  Thing.findOne({
    id: req.params.idVideo
  }).then(
    (thing) => {
      res.status(200).json(thing);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyVideo = (req, res, next) => {
  const thing = new Thing({
    idVideo: req.body.title,
    nom: req.body.nom,
    description: req.body.description,
    url: req.body.url,
    createdAt: req.body.createdAt,
    updateAt: req.body.updateAt
  });
  Thing.updateOne({_id: req.params.id}, thing).then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!'
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
  Thing.deleteOne({idVideo: req.params.idVideo}).then(
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

exports.getAllVideo = (req, res, next) => {
  Thing.find().then(
    (things) => {
      res.status(200).json(things);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};