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