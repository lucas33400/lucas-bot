const config = require('../config.json'),
    fs = require('fs'),
    Discord = require('discord.js')
 
module.exports = {
    run: async (message, args, client) => {
        if (Object.values(client.db.tickets).some(ticket => ticket.author === message.author.id)) return message.channel.send('Vous avez déjà un ticket d\'ouvert.')
        const channel = await message.guild.channels.create(`ticket ${message.author.username}`, {.then(sent => sent.delete({timeout: 5e3}))
            type: 'text',
            parent: config.ticket,
            permissionOverwrites: [{
                id: message.guild.id,
                deny: 'VIEW_CHANNEL'
            }, {
                id: message.author.id,
                allow: 'VIEW_CHANNEL'
            }, ...config.ticket.roles.map(id => ({
                id,
                allow: 'VIEW_CHANNEL'
            }))]
        })
        client.db.tickets[channel.id] = {
            author: message.author.id
        }
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        channel.send(new Discord.MessageEmbed()
            .setDescription(`Bonjour ${message.member}, bienvenue dans votre ticket. Nous allons nous occuper de vous.`))
        message.channel.send(`Votre ticket ${channel} a été créé !`)

        console.log(`Le ticket ${channel} a été créé !`)
    },
    name: 'ticket',
    guildOnly: true
}
