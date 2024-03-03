import Router from 'next/router'

export default function redirectTo(destination: any, { res, status }: any = {}) {
  if (res) {
    res.writeHead(status || 302, { Location: destination.asPath })
    res.end()
  } else {
    if (destination.path[0] === '/' && destination.path[1] !== '/') {
      Router.replace(destination.path, destination.asPath)
    } else {
      window.location = destination.asPath
    }
  }
}