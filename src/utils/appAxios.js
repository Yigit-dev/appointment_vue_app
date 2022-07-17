import axios from 'axios'

export const appAxios = axios.create({
  baseURL: `https://api.airtable.com/v0/${process.env.VUE_APP_AIRTABLE_APP_ID}`,
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_AIRTABLE_API_KEY}`,
    'Content-Type': 'application/json'
  }
})
