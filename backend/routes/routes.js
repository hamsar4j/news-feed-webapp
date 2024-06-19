const express = require("express");
const controllerActions = require("../controllers/articles-controller");
const router = express.Router();

// Create
router.post("/create", controllerActions.createNewArticle);
// Read
router.get("/all", controllerActions.getAllArticles);
// Update
router.post("/update", controllerActions.updateArticle);
// Delete
router.put("/delete", controllerActions.deleteArticle);

module.exports = router;
