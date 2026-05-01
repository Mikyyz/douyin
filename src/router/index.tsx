import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import FeedPage from "@/pages/FeedPage";
import Recommend from "@/pages/Recommend";
import AiSearch from "@/pages/AiSearch";
import Follow from "@/pages/Follow";
import { Friend } from "@/pages/Friend";
import { My } from "@/pages/My";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/jingxuan" replace />, // 关键
      },
      {
        path: "jingxuan",
        element: <FeedPage />,
      },
      {
        path: "recommend",
        element: <Recommend />,
      },
      {
        path: "aisearch",
        element: <AiSearch />,
      },
      {
        path: "follow",
        element: <Follow />,
      },
      {
        path: 'friend',
        element: <Friend />
      },
      {
        path: 'my',
        element: <My />
      }
    ],
  },
  {
    path: "*",
    element: <Navigate to="/jingxuan" replace />,
  }
]);