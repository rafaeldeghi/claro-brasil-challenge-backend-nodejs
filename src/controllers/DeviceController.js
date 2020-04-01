const Device = require('../models/Device');

module.exports = {
     
    async index(req, res) {
        const { user_id } = req.headers;

        const device = await Device.find({ id: user_id })

        return res.json(device)
    },

    async store(req, res) {
        let contador = 3;       
        

        if(contador < 3){            

            const { phone } = req.body;
            const { user_id } = req.headers;
            const { createdAt } = req.body;
            

            let device = await Device.create({
                user: user_id,
                createdAt,
                phone,
            });

        
        return res.json(device);
        }else{
            return res.send()
        }
    },

    async update(req, res) {
        const device = await Device.findOneAndUpdate(req.params.id, req.body, { new:true })

        return res.json(device);
    },

    async destroy(req, res){
        await Device.findByIdAndRemove(req.params.id);

        return res.send();
    }

   
};