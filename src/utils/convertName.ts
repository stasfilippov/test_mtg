export const covertName = (name: string) => {
  const arr = name.split(' ')

  if (arr.length && !arr[1]) {
    return arr[0]
  }

  return arr[0] + ' ' + arr[1].slice(0, 1).toUpperCase() + '.'
}
