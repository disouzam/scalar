import { describe, expect, it } from 'vitest'

import { createMockServer } from '../src/createMockServer'

describe('onRequest', () => {
  it('call custom onRequest hook', async () => {
    return new Promise((resolve) => {
      const specification = {
        openapi: '3.1.0',
        info: {
          title: 'Hello World',
          version: '1.0.0',
        },
        paths: {
          '/foobar': {
            get: {
              operationId: 'foobar',
            },
          },
        },
      }

      createMockServer({
        specification,
        onRequest({ context, operation }) {
          expect(context.req.method).toBe('GET')
          expect(context.req.path).toBe('/foobar')

          expect(operation.operationId).toBe('foobar')

          resolve(null)
        },
      }).then((server) => {
        return server.request('/foobar')
      })
    })
  })
})
