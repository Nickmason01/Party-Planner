const Party = require("../../models/Party");

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
        res.status(404).jsaon({ message: "Please enter your name." });
        return;
    }
    console.log(joinParty);
    res.status(200).json(joinParty);
});