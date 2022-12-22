import axios from 'axios';

/**
 * URLs and other api constants
 */
const constants = {
    api: {
        baseURL: '<Container App Base Url>',
    },
};

/**
 * Create an Axios Client with defaults
 */
export default axios.create({
    baseURL: constants.api.baseURL,
});