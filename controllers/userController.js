exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.basicUserBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.superAdminBoard = (req, res) => {
    res.status(200).send("Super Admin Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};