const Device = require('../models/Device');

let contador = 0;
var mud = 1586185682411;
var hoje = new Date();

module.exports = {    
     
    async index(req, res) {        
        const { user_id } = req.headers;
        const device = await Device.find({ id: user_id })

        return res.json(device)
    },

    async store(req, res) {                   
        if(contador < 3){
            const { nome } = req.body;
            const { user_id } = req.headers;
            const { modelo } = req.body;

            let device = await Device.create({
                user: user_id,
                modelo,
                nome,
            });

        contador++
        return res.json(device);
        }else{
            return res.send()
        }
    },

    async update(req, res) {
        if(hoje > mud) {            
            var novaData = adicionarDiasData(30);
            mud = novaData;

            const device = await Device.findOneAndUpdate(req.params.id, req.body, { new:true })

        return res.json(device);
        }else{
            return res.send({ error: `Você poderá fazer uma nova mudança na data: ${mud}` })
        }
    },

    async destroy(req, res){
        if(hoje > mud) {
            await Device.findByIdAndRemove(req.params.id);

            contador--
            return res.send();
        }else{
            return res.send({ error: `Você poderá fazer uma nova mudança ${mud}` })
        }
    }

   
};