'use strict'

const normaliseContent = require('./normalise-content.browser')
const normaliseInput = require('./normalise-input')

/*
 * Transforms any of the `ipfs.add` input types into
 *
 * ```
 * AsyncIterable<{ path, mode, mtime, content: Blob }>
 * ```
 *
 * See https://github.com/ipfs/js-ipfs/blob/master/docs/core-api/FILES.md#ipfsadddata-options
 *
 * @param input Object
 * @return AsyncInterable<{ path, mode, mtime, content: Blob }>
 */
module.exports = (input) => normaliseInput(input, normaliseContent)
