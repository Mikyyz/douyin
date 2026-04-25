import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from '@douyinfe/semi-ui'
import '@semi-bot/semi-theme-custom-light/semi.css';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme="light">
      <App />
    </ConfigProvider>
  </StrictMode>,
)
