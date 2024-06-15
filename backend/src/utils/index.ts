export function success(result: any, message: string) {
  return {
    code: 0,
    result,
    message
  }
}

export function error(message: string) {
  return {
    code: -1,
    message
  }
}
export function wrapperResponse(p: Promise<any>, msg: string){
  return p.then((res) => {
    return success(res, msg)
  }).catch((err) => {
    return error(err.message)
  })
}