const router = require('express').Router();
const { Party } = require('../../models');
const withAuth = require('../../utils/auth');
// put a new party by id
router.put("/:id", async (req, res) => {
    const updateParty = await Party.update(req.body, {
        where: {
            id: req.params.id,
        },
    });

    if (!updateParty) {
        res.status(404).json({ message: "Please create a new party." });
        return;
    }
    res.status(200).json(updateParty);
});
// allows party creation with authorization
router.post("/", withAuth, async (req, res) => {
    console.log(req.session);
        const partyCreator = req.body;

        partyCreator.user_id = req.session.user_id,
        console.log(partyCreator);
        
        const newParty = await Party.create(partyCreator);

        newParty ? res.status(200).json(newParty) : res.status(400).json(err);
});

// this is the potential put to add yourself to a party you want to attend. 
router.put("/:name", async (req, res) => {
    const joinParty = await Party.update(req.body, {
        where: {
            name: req.params.name,
        },
    });

    if (!joinParty) {
        res.status(404).json({ message: "Please enter your name." });
        return;
    }
    console.log(joinParty);
    res.status(200).json(joinParty);
});
// allows delete party with authorization
router.delete('/:id', withAuth, async (req, res) => {
   
    const partyData = await Party.destroy({
        where : {
            id: req.params.id,
            user_id: req.session.user_id,
        },
    });
  
    if(!partyData) {
        res.status(404).json({message: 'Sorry, this party is not your to delete.'});
        return;
    }

    res.status(200).json(partyData);

});
    

module.exports = router;


