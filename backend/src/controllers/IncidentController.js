const connection = require('../database/connection');

module.exports = {
    async  index (request, response)  {
        const { page = 1 } = request.query; 

        const [count] = await connection('INCIDENTS').count()

        const incidents = await connection('INCIDENTS')
            .join('ONGS', 'ONGS.ID', '=', 'INCIDENTS.ONG_ID')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'INCIDENTS.*', 
                'ONGS.NAME',
                'ONGS.EMAIL',
                'ONGS.WHATSAPP',
                'ONGS.CITY',
                'ONGS.UF',
            ]);

        response.header('X-Total-Count', count['count(*)']);
    
        return response.json(incidents);
    },


    async  create (request, response)  {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('INCIDENTS').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incidents = await connection('INCIDENTS')
            .where('ID', id)
            .select('ONG_ID')
            .first();

        if (incidents.ONG_ID !== ong_id ) {
            return response.status(401).json({ error: 'Operation not permitted' });
        }

        await connection('INCIDENTS').where('ID', id).delete();

        return response.status(204).send();
    }
};