const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: 'Partners REST API',
    description: 'Partners REST API for AKS microservice'
}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/partners.routes.js']

swaggerAutogen(outputFile, endpointsFiles)