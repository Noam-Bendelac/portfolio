



export function delay(ms: number) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => resolve(), ms)
  })
}


export function mod(n: number, m: number) {
  return ((n % m) + m) % m
}

