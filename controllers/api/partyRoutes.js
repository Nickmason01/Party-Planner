
const router = require('express').Router();
const { Party} = require('../../models/Party');
const withAuth = require('../../utils/auth');

router.put("/:id", async (req, res) => {
    const newParty = await Party.update(req.body, {
        where: {
            id: req.params.id,
        },
    });

    if (!newParty) {
        res.status(404).json({ message: "Please create a new party." });
        return;
    }
    console.log(newParty);
    res.status(200).json(newParty);
});


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

router.delete('/:id', withAuth, async (req, res) => {
    const partyData = await Party.destroy({
        where : {
            id: req.params.id,
            user_id: req.session.user_id,
        },
    });

    if(!partyData) {
        res.status(404).json({message: 'No party selected!'});
        return;
    }

    res.status(200).json(partyData);

});
    

module.exports = router;

