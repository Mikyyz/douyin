import { FC, useEffect } from 'react'
import { RouterProvider } from "react-router-dom";
import { router } from './router';
import { useLoginStore } from '@/store/useLoginStore';
import { useAppStore } from '@/store/useAppStore';

const App: FC = () => {
  const token = useLoginStore((state) => state.token);
  console.log('token>>', token);
  const initApp = useAppStore((state) => state.initApp);
  useEffect(() => {
    if (token) {
      initApp();
    }
  }, [token])
  return (
    <RouterProvider router={router} />
  )
}

export default App
