export function proxy(request: Request) {
  const url = new URL(request.url)

  // www → non-www redirect
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace('www.', '')
    return Response.redirect(url.toString(), 301)
  }

  return undefined
}
