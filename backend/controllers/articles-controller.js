const knex = require("../db.js");

// get all articles from db articles table
exports.getAllArticles = async (req, res) => {
  knex
    .select("*")
    .from("articles")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({
        message: `There was an error retrieving all articles: ${err}`,
      });
    });
};

// create new article in db articles table
exports.createNewArticle = async (req, res) => {
  knex("articles")
    .insert({
      title: req.body.title,
      summary: req.body.summary,
      date: req.body.date,
      publisher: req.body.publisher,
    })
    .then(() => {
      res.json({ message: `Article ${req.body.title} created.` });
    })
    .catch((err) => {
      res.json({
        message: `There was an error creating ${req.body.title} article: ${err}`,
      });
    });
};

// delete article from db articles table
exports.deleteArticle = async (req, res) => {
  knex("articles")
    .where("id", req.body.id)
    .del()
    .then(() => {
      res.json({ message: `Article ${req.body.id} deleted.` });
    })
    .catch((err) => {
      res.json({
        message: `There was an error deleting ${req.body.id} article: ${err}`,
      });
    });
};

// get article from db articles table
exports.getArticle = async (req, res) => {
  knex("articles")
    .where("id", req.body.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({
        message: `There was an error retrieving the article: ${err}`,
      });
    });
};

// update article in db
exports.updateArticle = async (req, res) => {
  knex("articles")
    .where("id", req.body.id)
    .update({
      title: req.body.title,
      summary: req.body.summary,
      publisher: req.body.publisher,
    })
    .then(() => {
      res.json({ message: `Article ${req.body.title} was updated.` });
    })
    .catch((err) => {
      res.json({
        message: `There was an error updating ${req.body.title} article: ${err}`,
      });
    });
};
