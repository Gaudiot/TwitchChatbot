import 'dotenv/config'
import 'dotenv-defaults/config'
import 'reflect-metadata';

import './shared/containers/index'

import Twitch from './twitch';

// Create a client with our options
const execute = async () => {
    const twitch = new Twitch();
    await twitch.init();
}

execute();