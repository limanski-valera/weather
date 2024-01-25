export const formattedTemp = (temp) => Math.round(temp)

export const formattedWindSpeed = (speedIdMeters) => Math.round(speedIdMeters * 3.573 * 10) / 10

export const textWindDirection = (deg) => {
  if (deg < 23) return 'North'
  else if (deg < 68) return 'Northeast'
  else if (deg < 113) return 'East'
  else if (deg < 158) return 'Southeast'
  else if (deg < 203) return 'South'
  else if (deg < 248) return 'Southwest'
  else if (deg < 292) return 'West'
  else if (deg < 338) return 'Northwest'
  else return 'North'
}

export const divisionOfDays = (arr) => {
  let result = []
  result.push(
    arr.filter((item) => new Date(item.dt_txt).getDate() === new Date(arr[0].dt_txt).getDate())
  )
  result.push(
    arr.filter(
      (item) => new Date(item.dt_txt).getDate() === new Date(arr[arr.length - 1].dt_txt).getDate()
    )
  )
  return result
}

export const getHourFromTimeString = (string) => {
  const hours = new Date(string)?.getHours()
  if (hours < 10) return `0${hours}`
  else return hours
}

export const weatherGif = [
  {
    ids: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232],
    url: 'https://i.gifer.com/Rnik.gif'
  },
  {
    ids: [300, 301, 302, 310, 311, 312, 313, 314, 321],
    url: 'https://i.gifer.com/lKD.gif'
  },
  {
    ids: [500, 501, 502, 503, 504],
    url: 'https://i.gifer.com/QAOA.gif'
  },
  {
    ids: [511, 520, 521, 522, 531],
    url: 'https://i.gifer.com/3VsO.gif'
  },
  {
    ids: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622],
    url: 'https://i.gifer.com/YY5R.gif'
  },
  {
    ids: [711, 721, 701, 741],
    url: 'https://i.gifer.com/IKSm.gif'
  },
  {
    ids: [731, 751, 761],
    url: 'https://i.gifer.com/iIK.gif'
  },
  {
    ids: [762],
    url: 'https://i.gifer.com/8OKc.gif'
  },
  {
    ids: [771],
    url: 'https://i.gifer.com/604.gif'
  },
  {
    ids: [781],
    url: 'https://i.gifer.com/2QhR.gif'
  },
  {
    ids: [800],
    url: 'https://i.gifer.com/2swA.gif'
  },
  {
    ids: [801, 802, 803, 804],
    url: 'https://i.gifer.com/Sdxg.gif'
  }
]
