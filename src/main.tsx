import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from '@douyinfe/semi-ui'
import '@semi-bot/semi-theme-custom-light/semi.css';
// import '@semi-bot/semi-theme-custom-dark/semi.css';
import '@/theme/theme.css'
import './index.css'
import App from './App.tsx'

const mode = localStorage.getItem('theme')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={mode === 'dark' ? 'dark' : 'light'}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
