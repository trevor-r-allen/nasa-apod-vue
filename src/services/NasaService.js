import { AppState } from '../AppState'
import { nasaApi } from './AxiosService'

class NasaService {
  async getApod (query) {
    try {
      const res = await nasaApi.get('apod?api_key=NqIcoxeti3DzbBk7bH5iFecdyauYdpWXQgtrpslr&date=' + query)
      console.log(res)
      AppState.apod = res.data
    } catch (error) {
      console.log(error)
    }
  }
}
export const nasaService = new NasaService()
