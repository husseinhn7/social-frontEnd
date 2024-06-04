import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {  loadEnv } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port  : 3000 , 
    host: true
  }
})
