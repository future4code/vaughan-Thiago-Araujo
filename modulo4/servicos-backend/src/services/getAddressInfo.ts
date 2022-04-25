import axios from 'axios'
import { Address } from '../types/Address'

const baseUrl = "https://viacep.com.br/ws"

export const getAddressInfo = async (zipcode: string): Promise<Address | null> => {
   try {
      const response = await axios.get(`${baseUrl}/${zipcode}/json/`)
      const address: Address = {
         state: response.data.uf,
         city: response.data.localidade,
         district: response.data.bairro,
         street: response.data.logradouro
      }
      return address

   } catch (error) {
      console.error("Erro no serviço getAddressInfo: ", error)
      return null
   }
}