import Axios from 'axios'

const marvelInstance = Axios.create()

marvelInstance.interceptors.request.use((config) => {
  console.log(config)
  config.url = `https://gateway.marvel.com:443/v1/public/${config.url}&apikey=3d7c369fb312bff11c9a961475472c1d`
  return config
})

export const searchForSuperheros = async superHeroName => {
  const url = `characters?nameStartsWith=${superHeroName}`
  const result = await marvelInstance.get(url)
  return result.data.data.results
}