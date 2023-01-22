const db = require('../config/db');

module.exports = {
    async insert(req, res) {
        let datas = {
            "titulo": req.body.titulo,
            "descricao": req.body.descricao,
            "prazo": req.body.prazo
        }

        try {
            let response = await db.query('INSERT INTO tarefa SET ?', [datas]);
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },

    async get(req, res){
        try {
            let response = await db.query('SELECT * FROM tarefa')
            res.json(response[0])
        } catch (error) {
            console.log(error)
        }
    },

    async update(req, res){
        let id = req.params.id

        let datas = {
            "titulo": req.body.titulo,
            "descricao": req.body.descricao,
            "prazo": req.body.prazo
        }

        try {
            let response = await db.query('UPDATE tarefa SET ? WHERE id = ?', [datas, id])
            res.json(response[0])
        } catch (error) {
            console.log(error)
        }
    },

    async find(req, res){
        let id = req.params.id
        
        try {
            let response = await db.query(`SELECT * FROM tarefa WHERE id = ${id}`)
            res.json(response[0])
        } catch (error) {
            console.log(error)
        }
    },    

    async delete(req, res){
        let id = req.params.id

        try {
            let response = await db.query(`DELETE FROM tarefa WHERE id= ${id}`)
            res.json(response[0])
        } catch (error) {
            console.log(error)
        }
    }

}