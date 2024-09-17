import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/home/homeIndex';
import Chat from './pages/chat/chatIndex';
import Withdrawal from './pages/withdrawal/withdrawalIndex';
import CreateIndex from './pages/createNFT/createIndex';
import AuthIndex from './pages/auth/authIndex';
import AllNfts from './pages/allNfts';
import SingleNft from './pages/singleNft';
import MyNFTs from './pages/myNFTS/myNFTsIndex';
// import ErrorPage from './pages/ErrorPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route path='/' element={<Home />} />
      <Route path='/create-nft' element={<CreateIndex />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/withdrawal' element={<Withdrawal />} />
      <Route path='/all-nfts' element={<AllNfts />} />
      <Route path='/myNfts/:id' element={<MyNFTs />} />
      <Route path='/singleNft/:id' element={<SingleNft />} />
      <Route path='/login' element={<AuthIndex />} />
    </Route >
  )
)

function App() {
 
  return (
    <RouterProvider router={router} />
  );
}

export default App
// https://uigradients.com/#Twitch

