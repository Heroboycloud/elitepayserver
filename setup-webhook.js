// setup-webhook.js
require('dotenv').config();

async function setupWebhook() {
    const token = process.env.TELEGRAM_TOKEN;
    const webhookUrl = process.env.WEBHOOK_URL;
    
    if (!webhookUrl) {
        console.error('❌ WEBHOOK_URL not set in .env');
        process.exit(1);
    }

    try {
        // Remove old webhook
        await fetch(`https://api.telegram.org/bot${token}/deleteWebhook`);
        
        // Set new webhook
        const response = await fetch(`https://api.telegram.org/bot${token}/setWebhook?url=${webhookUrl}`);
        const data = await response.json();
        
        if (data.ok) {
            console.log('✅ Webhook set successfully!');
            console.log(`📍 URL: ${webhookUrl}`);
        } else {
            console.error('❌ Failed:', data.description);
        }
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

setupWebhook();
