import Telegraf from 'telegraf';
import session  from 'telegraf/session';
import Stage from 'telegraf/stage';

import db from '../bd';
import { addCharacterWizard } from './actions/characters';
import { options } from './options';


class Bot {

    constructor( token ) {
        this.bot = new Telegraf(token);
    }

    configure() {
        this.configureWizards();
        
        this.bot.start((ctx) => {
            ctx.reply('Bienvenido a creación de investigadores para La llamada de Cthulhu 7ed!');
        });

        this.bot.help((ctx) => ctx.reply(this.getHelpMessage()));

        for (let i = 0, len = options.length; i < len; i++) {
            const option = options[i];

            if ( option.type === 'on' ) {
                this.bot.on(option.name, (ctx) => option.action(ctx));
            } else if ( option.type === 'command' ) {
                this.bot.command(option.name, option.action );
            } else {
                this.bot.hears(option.name, (ctx) => option.action(ctx));
            }
        }   
    }

    configureWizards() {
        const stage = new Stage([
            addCharacterWizard()
        ]);

        this.bot.use(session());
        this.bot.use(stage.middleware())
    }

    getHelpMessage() {
        let heplMessage = "";
        
        for (let i = 0, len = options.length; i < len; i++) {
            let option = options[i];
            heplMessage += `${option.name}: ${option.description}\n`;
        }

        return heplMessage;
    }

    start() {
        this.bot.startPolling();

    }

}

export default Bot;