import React, { useContext, useEffect } from 'react';
import './index.css';
import { AppContext } from './context/AppContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './pages/Home';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';
import BlogPage from './pages/BlogPage';
import ScrollToTop from './components/ScrollToTop';

function App() {

  //using data from context
  const {fetchBlogPosts,theme, setTheme, defaultDark} = useContext(AppContext);

  const [searchParams, setsearchParams] = useSearchParams();
  const location = useLocation();

  // Fetch blog posts based on the URL's pathname and search parameters.
  useEffect( () =>{
    // Extract the 'page' parameter from search parameters or default to 1.
    const page = searchParams.get('page') ?? 1;

    if (location.pathname.includes('tags')){
      // Extract the tag from the URL, replace hyphens with spaces, and fetch posts.
      const tag = location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchBlogPosts(Number(page), tag);
    }
    else if (location.pathname.includes('categories')){
      // Extract the category from the URL, replace hyphens with spaces, and fetch posts.
      const category = location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      // If none of the above, then just fetch the posts
      fetchBlogPosts(Number(page));
    }

  },[location.pathname, location.search]);

  //darkmode/lightmode must also be applied after render
  useEffect(() => {
  if (defaultDark){
  setTheme('dark');
    }
  },[]);


  return (
    <div className='w-full h-full box-border overflow-x-hidden'>
    <ScrollToTop/>
      {/* creating routes for different pages  */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/categories/:category' element={<CategoryPage/>} />
        <Route path='/tags/:tag' element={<TagPage/>} />
        <Route path='/blog/:blogId' element={<BlogPage/>} />
      </Routes>
    </div>

  );
}

export default App;

