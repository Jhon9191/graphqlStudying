import fetch from 'node-fetch';

export const context = () => {
    return {
        getUsers: (path = '/') => {
            console.log('GET USER, chamado com path: ' + path);
            return fetch('http://localhost:3000/users' + path);
        },
    };
}