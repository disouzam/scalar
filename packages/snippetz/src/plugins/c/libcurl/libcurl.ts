import { libcurl } from '@/httpsnippet-lite/esm/targets/c/libcurl/client'
import type { Plugin } from '@/types'
import { convertWithHttpSnippetLite } from '@/utils/convertWithHttpSnippetLite'

/**
 * c/libcurl
 */
export const cLibcurl: Plugin = {
  target: 'c',
  client: 'libcurl',
  title: 'Libcurl',
  generate(request) {
    // TODO: Write an own converter
    return convertWithHttpSnippetLite(libcurl, request)
  },
}
