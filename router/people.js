const express = require("express");
const { JavaPost,getPeople,updatePeople, deletePerson } = require("../utils/people/people")

const peopleRouter = express.Router();


peopleRouter.get("/", getPeople)

peopleRouter.post("/", JavaPost)

peopleRouter.put("/:id", updatePeople)

peopleRouter.delete("/:id", deletePerson)

module.exports = peopleRouter;