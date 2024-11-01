import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import Subscription from './pages/Subscription.jsx'
import Channel from './pages/Channel.jsx'
import Playlists from './pages/Playlists.jsx'
import History from './pages/History.jsx'
import LikedVideos from './pages/LikedVideos.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import AuthLayout from './components/AuthLayout.jsx'
import ChannelVideos from './components/Channel/channel.videos.jsx'
import ChannelPlaylists from './components/Channel/channel.playlists.jsx'
import ChannelHome from './components/Channel/Channel.Home.jsx'
import VideoUpload from './components/VideoUpload/VideoUpload.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route path='' element={<Home />} />
        <Route path='/channel/:username' element={<Channel />}>
          <Route path='' element={<ChannelHome />} />
          <Route path='videos' element={<ChannelVideos />} />
          <Route path='playlists' element={<ChannelPlaylists />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path='/subscription' element={<Subscription />} />
          <Route path='/channel' element={<Channel />}>
            <Route path='' element={<ChannelHome />} />
            <Route path='videos' element={<ChannelVideos />} />
            <Route path='playlists' element={<ChannelPlaylists />} />
            <Route path='upload' element={<VideoUpload />} />
          </Route>
          <Route path='/history' element={<History />} />
          <Route path='/playlists' element={<Playlists />} />
          <Route path='/liked-videos' element={<LikedVideos />} />
        </Route>
      </Route>
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
