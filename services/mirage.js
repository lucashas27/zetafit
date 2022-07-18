import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          product: 'Nicorette',
          product_code: 'TEST_123456',
          branded: false
        }
      ]
    })
  }
})

export default createServer