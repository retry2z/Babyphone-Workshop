import axios from 'axios';
import admin from './admin';

const { url } = admin();
const collection = 'rooms';

const productService = {    
    async list() {
        return await axios.get(url + collection);
    },

    async get() {

    },

    async post() {

    },

    async edit() {

    },

    async remove() {

    },
}

export default productService;