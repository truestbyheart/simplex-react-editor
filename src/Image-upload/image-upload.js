import Axios from 'axios'

export default e =>
  new Promise((resolve, reject) => {
    const baseUrl = process.env.CLOUDINARYAPI
    const basePreset = process.env.CLOUDINARYPRESET
    const imageFile = e.target.files[0]
    // eslint-disable-next-line no-undef
    const formData = new FormData()
    formData.append('file', imageFile)
    formData.append('upload_preset', basePreset)

    Axios.post(baseUrl, formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(res => {
        resolve(res.data.secure_url)
      })
      .catch(err => reject(err))
  })
