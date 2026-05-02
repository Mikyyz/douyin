import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from '@douyinfe/semi-ui'
import '@semi-bot/semi-theme-custom-light/semi.css';
// import '@semi-bot/semi-theme-custom-dark/semi.css';
import '@/theme/theme.css'
import './index.css'
import App from './App.tsx'

const mode = localStorage.getItem('theme')

const root = document.getElementById('root')
if (!root) {
  throw new Error('Root element not found')
}

createRoot(root).render(
  <StrictMode>
    <ConfigProvider theme={mode === 'dark' ? 'dark' : 'light'}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
