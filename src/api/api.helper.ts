export const getContentType = () => ({
  'Conent-Type': 'application/json'
})

export const options = {
  headers: {
    accept: 'application/json',
    'content-type': 'multipart/form-data',
    'X-API-KEY': process.env.NEXT_PUBLIC_HRM_API_KEY
  }
}