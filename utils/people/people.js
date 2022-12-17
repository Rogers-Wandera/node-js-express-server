 const {people} = require("../../data");
 
 const JavaPost = (req,res)  => {
    const { name } = req.body;
    const id = new Date().getTime().toString();

    const person = {id,name}
    let newPerson = [...people, person]

    if(name) {
        return res.status(200).json(newPerson)
    }

    if(!name) {
        res.status(404).send("Please provide your name")
    }
 }

 const getPeople = (req,res)  => {
    res.status(200).json(people);
 }

 const updatePeople = (req,res)  => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((p) => p.id === parseInt(id))

    if(person) {
        let editPerson = people.filter((per) => {
           if(per.id === parseInt(id)) {
                per.name = name;
           }
           return per
        })
        return res.status(200).json(editPerson)
    }

    if(!person) {
        return res.status(404).send("The person does not exist")
    }
 }

 const deletePerson = (req,res) => {
    const {id} = req.params;

    const person = people.find((p) => p.id === parseInt(id))

    if(person) {
        let deletePerson = people.filter((person) => person.id !== parseInt(id))
        return res.status(200).json(deletePerson)
    }

    if(!person) {
        return res.status(404).send("Person does not exist")
    }
 }

 module.exports = {
    JavaPost,
    getPeople,
    updatePeople,
    deletePerson
 }