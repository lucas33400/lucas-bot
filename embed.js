const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Mon titre')
            .setDescription('[Recherche Google](https://google.fr)')
            .setColor('#ff0000')
            .addField('Champ 1', 'Bonjour c\'est moi', true)
            .addField('Champ 2', 'blabla', true)
            .setAuthor('Lucas.', 'https://cdn.discordapp.com/attachments/759485576981250110/759762659510976522/paysage-nature-900x600.jpg', 'https://google.fr')
            .setImage('https://cdn.discordapp.com/attachments/759485576981250110/759762659510976522/paysage-nature-900x600.jpg')
            .setThumbnail('https://cdn.discordapp.com/attachments/759485576981250110/759762659510976522/paysage-nature-900x600.jpg')
            .setFooter('Mon bot perso', 'https://cdn.discordapp.com/attachments/759485576981250110/759762659510976522/paysage-nature-900x600.jpg')
            .setTimestamp()
            .setURL('https://google.fr'))
    },
    name: 'embed'
}