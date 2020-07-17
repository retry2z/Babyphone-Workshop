import axios from 'axios';

const productService = {
    async list() {
        return await axios.get('http://localhost:5000/origami-app-3f955/us-central1/api/origami');
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