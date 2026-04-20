import api from './api'

export const requestAccess = async (payload) => {
  // À confirmer avec le backend :
  // endpoint exact + noms exacts des champs
  const response = await api.post('/access-requests', payload)
  return response.data
}