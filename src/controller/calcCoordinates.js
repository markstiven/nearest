exports.calCoordinates = async function(parsedData, local){
    let restaurant = []
    const R = 6371e3
    const lon1 = local.longitude
    const lat1 = local.latitude
    const φ1 = local.latitude * Math.PI/180
    let distance = []
    for (const location of parsedData) {
        const lon2 = location.longitude
        const lat2 = location.latitude
        const φ2 = location.latitude * Math.PI/180
        const Δφ = (lat2-lat1) * Math.PI/180;
        const Δλ = (lon2-lon1) * Math.PI/180;

        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2)

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        distance.push(R * c)
        restaurant.push({
          name: location.name || "",
          address: location.address || "",
          city: location.city || "",
          latitude: location.latitude || "",
          longitude:location.longitude || "",
          distance: R * c || ""
      })
  }
  distance.sort()
  let retorno = []
  for (let i = 0; i <= 4; i++) {
      for (const restaurant1 of restaurant) {
          if(distance[i] === restaurant1.distance){
            retorno.push({
                name: restaurant1.name || "",
                address: restaurant1.address || "",
                city: restaurant1.city || "",
                latitude: restaurant1.latitude || "",
                longitude:restaurant1.longitude || "",
            })
          }
      }
      
  }
  return retorno
}