const express = require("express");
const router = express.Router();

const questionDB = require("../modals/Question.js");

router.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const { questionName, questionUrl, user } = req.body;
    await questionDB
      .create({
        questionName,
        questionUrl,
        user,
      })
      .then(() => {
        res.status(201).send({
          status: true,
          message: "Question added succesfully",
        });
      })
      .catch((err) => {
        res.status(400).send({
          status: false,
          message: "Bad request",
        });
      });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Error while adding question",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    await questionDB
      .aggregate([
        {
          $lookup: {
            from: "answers", //collection to join
            localField: "_id", //field from input document
            foreignField: "questionId",
            as: "allAnswers", //output array field
          },
        },
      ])
      .exec()
      .then((doc) => {
        res.status(200).send(doc);
      })
      .catch((error) => {
        res.status(500).send({
          status: false,
          message: "Unable to get the question details",
        });
      });
  } catch (e) {
    res.status(500).send({
      status: false,
      message: "Unexpected error",
    });
  }
});

module.exports = router;
