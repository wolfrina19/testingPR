const STORAGE_KEY = 'validia_recent_access_requests'
const MAX_RECENT_REQUESTS = 3

export const getRecentAccessRequests = () => {
  const rawRequests = localStorage.getItem(STORAGE_KEY)

  if (!rawRequests) {
    return []
  }

  try {
    return JSON.parse(rawRequests)
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    return []
  }
}

export const addRecentAccessRequest = (request) => {
  const nextRequests = [
    {
      id: `${request.email}-${Date.now()}`,
      ...request,
      createdAt: new Date().toISOString(),
    },
    ...getRecentAccessRequests(),
  ].slice(0, MAX_RECENT_REQUESTS)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextRequests))
  return nextRequests
}
