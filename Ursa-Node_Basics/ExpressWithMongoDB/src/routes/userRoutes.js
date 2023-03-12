//<====================Lec15March6: Schemas Models, saving a document, querrying a document===================>
const express = require("express");
const {
  getAllUsers,
  createUser,
//   getUserByEmail,
  getUserByAge,
  createMultiplePlayers,
  getPlayers,
  updatePlayer
} = require("../controllers/userController");

const router = express.Router();

//http://localhost:7500/user
router.get("/all", getAllUsers);
router.get("/", getUserByAge);
router.post("/", createUser); //ye tumhare usercontrollers se aa raha ha//ye slash default ha to kuch bhi pass mat karna
// router.get("/:email", getUserByEmail);//: iske wajeh se error aa raha tha

//player route
router.post("/player", createMultiplePlayers);
router.get("/player", getPlayers);
router.patch("/player/:id", updatePlayer);//id ko acces karte ha through column:(params)


module.exports = router;

//<========================End Lec15March6=============================>
