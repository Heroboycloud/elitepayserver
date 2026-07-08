// api/webhook.js
const bot = require('../bot');

module.exports = async (req, res) => {
    try {
        if (req.method === 'POST') {
            // Process the update with your existing bot
            await bot.processUpdate(req.body);
            res.status(200).json({ status: 'ok' });
        } else {
            res.status(200).json({ 
                status: 'Bot is running!',
                message: 'Webhook is active'
            });
        }
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).json({ error: error.message });
    }
};
