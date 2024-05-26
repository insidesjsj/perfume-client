import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Home from './pages/home';
import Mypage from './pages/mypage';
import NaverCallback from './pages/naverCallback';
import NotFound from './pages/notfound';
import Result from './pages/result';
import PerfumeInfo from './pages/perfumeInfo';
import Layout from './layouts/layout';
import NoHeaderLayout from './layouts/noHeaderLayout';
import MatchingPage from './pages/matchingpage';
import MatchFail from './pages/matchfail';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="main" element={<Main/>}/>
                    <Route path="mypage" element={<Mypage/>}/>
                    <Route path="callback" element={<NaverCallback/>}/>
                    <Route path="match" element={<MatchingPage/>}/>
                    <Route path="matchfail" element={<MatchFail/>}/>
                    <Route path="/result" element={<Result />}/>
                    <Route path="/perfumeInfo/:id" element={<PerfumeInfo/>}/>
                </Route>
                <Route path="*" element={<NoHeaderLayout/>}>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
