const db = require('../dataBase/connection'); 

module.exports = {
    async listarCompartilhamento(request, response) {
        try {
           
            const sql = `
            SELECT comp_id, not_id, comp_plataforma, comp_data FROM COMPARTILHAMENTO;
            
            `;
           
            const [rows] = await db.query(sql);

            const nRegistros = rows.length;


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Compartilhamento', 
                nRegistros,
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarCompartilhamento(request, response) {
        try {


            const { not_id, comp_plataforma, comp_data } = request.body;


            const sql = `

            INSERT INTO COMPARTILHAMENTO (not_id, comp_plataforma, comp_data)
            VALUES (?, ?, ?);
            `;

            const values = [not_id, comp_plataforma, comp_data];
            
            const [result] = await db.query(sql, values);

            const dados = {
                comp_id: result.insertId,
                not_id,
                comp_plataforma,
                comp_data
            };

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Criação de Compartilhamento', 
                dados: dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarCompartilhamento(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no Compartilhamento', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarCompartilhamento(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de Compartilhamento', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  