db.inventory.find()

db.inventory.find({qty : 80})

db.inventory.find( { status: { $in: [ "A", "D" ] } } )

db.inventory.find({status: { $in: [ "A", "d"], qty:{$lt:30}}})    // AND command

db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30} } ] } )    //OR command

db.inventory.findOne( { $or: [ { status: "A" }, { qty: { $lt: 30} } ] } )    //findOne command
