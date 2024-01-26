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
    url: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bdd78e189033083.65a593cd9b0c7.png'
  },
  {
    ids: [300, 301, 302, 310, 311, 312, 313, 314, 321],
    url: 'https://images.unsplash.com/photo-1509635022432-0220ac12960b?q=80&w=1708&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    ids: [500, 501, 502, 503, 504],
    url: 'https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    ids: [511, 520, 521, 522, 531],
    url: 'https://images.unsplash.com/photo-1532203512255-3c9c9d666c50?q=80&w=3421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    ids: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622],
    url: 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?q=80&w=3290&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    ids: [711, 721, 701, 741],
    url: 'https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    ids: [731, 751, 761],
    url: 'https://images.unsplash.com/photo-1566305678344-ba64fb292f2e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    ids: [762],
    url: 'https://images.unsplash.com/photo-1475776408506-9a5371e7a068?q=80&w=3316&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    ids: [771],
    url: 'https://images.unsplash.com/photo-1549356384-62459eaf492f?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    ids: [781],
    url: 'https://images.unsplash.com/photo-1527482937786-6608f6e14c15?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    ids: [800],
    url: 'https://images.unsplash.com/photo-1611426975251-98176138fd45?q=80&w=3379&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    ids: [801, 802, 803, 804],
    url: 'https://images.unsplash.com/photo-1595661671412-e20c4a3e65cc?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]
