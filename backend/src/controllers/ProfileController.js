const connection = require('../database/connection');

module.exports = {
    async  index (request, response)  {
        const ong_id = request.headers.authorization;

        const incidents = await connection('INCIDENTS')
            .where('ONG_ID', ong_id)
            .select('*');
        
            return response.json(incidents);
    }
    
};