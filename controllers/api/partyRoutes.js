
const router = require('express').Router();
const { Party } = require('../../models');
const withAuth = require('../../utils/auth');

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

router.post("/", withAuth, async (req, res) => {
    console.log(req.session);
        const partyCreator = req.body;

        partyCreator.user_id = req.session.user_id,
        // partyCreator.name = req.session.name,
        // partyCreator.description = req.session.description,
        // partyCreator.party_date = req.session.party_date;
        console.log(partyCreator);
        
        const newParty = await Party.create(partyCreator);

        newParty ? res.status(200).json(newParty) : res.status(400).json(err);
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


// router.get('/', async (req, res) => {
//     try {
//         const startParty = await Party.findAll({
//             include: [{ model: Party, }],
//         });
//         return res.json(startParty);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }

// });

router.get('/:id', async (req, res) => {
    try {
        const startParty = await Party.findByPk(req.params.id, {
            include: [{ model: Party, }],
        });

        return res.json(startParty);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
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


