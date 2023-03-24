export function asyncRandomSecond(maxSecond = 1): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000 * maxSecond * Math.random())
  })
}

export function getRandomBoolean(probability: number): boolean {
  return Math.random() < probability
}

export async function doRandomRequest(probability = 0.8, maxSecond = 1): Promise<void> {
  await asyncRandomSecond(maxSecond)
  const isSuccess = getRandomBoolean(probability)

  if (!isSuccess) {
    throw new Error("Some random server error occured")
  }
}
