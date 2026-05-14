'use strict'

let config = {
    'env': {
        isStaging: false,
        name: 'development',
        projectName: 'backend-node',
        jwtSecret: 'backend_node_practice',
        co_founder: 'Gagandeep Singh',
        adminURL: 'http://192.168.0.119:3000',
        userURL: 'http://192.168.0.119:5173',
        backendURL: 'http://192.168.0.119:3107',
        allowedOrigins: ['*'],
        server: {
            host: '127.0.0.1',
            port: '3107'
        },
        database: {
            name: "backend-node-practice",
            userName: "gagandeepsingh",
            // password: "tx79WDJFuNpSBUHR"
            password: "vBSE002PSd83qLGs"
        },
    }

}

module.exports = config