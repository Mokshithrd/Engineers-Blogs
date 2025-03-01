/* keeping all the required data in the context and make it 
available for all the components rather than passing values using props
There are 3 steps that need to be followed in order to create a context and use it*/

import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import useLocalStorage from 'use-local-storage';
import { useNavigate } from "react-router-dom";

//Step 1 => Creating the context
export const AppContext = createContext();

//Step 2 => Providing data to children
export default function AppContextProvider({children}){

    /*Think about the data that needs to be passed, in this case
    We'll need loading(to check data is loading or not), pageNumber, toatalPageNumber and the Posts*/

    const [loading, setLoading] = useState(false) //initailly loading is set to false
    const [pageNumber, setPageNumber] = useState(1); //initially the blog page number is 1
    const [toatalPageNumber, setToatalPageNumber] = useState(null) //initailly we do not know about the total page number
    const [posts, setPosts] = useState([]) //initailly there are no posts
    const navigate = useNavigate();

    //Data Filling
    async function fetchBlogPosts(pageNumber=1, tag=null, category){

        //till the data is fetched, we have to show loading
        setLoading(true);

        //Get the url for Api call
        let url = `${baseUrl}?page=${pageNumber}`;
        // The url for API call when tag is clicked 
        if (tag){
            url += `&tag=${tag}`;
        }
        // The url for API call when Category is clicked
        if (category){
            url += `&category=${category}`;
        }
        //Api Call
        try{
            const response = await fetch(url);
            const data = await response.json();
            setPageNumber(data.page);
            setToatalPageNumber(data.totalPages);
            setPosts(data.posts);
        }
        catch(error){
            alert('Error in fetching data');
            setPageNumber(1);
            toatalPageNumber(null);
            setPosts([]);
        }

        //once the data is fetched and no error occured then stop loading
        setLoading(false);

    }

    //Function to handle page changes
    function handlePageChange(pageNumber){
        //this handles the page change 
        // Once the initial page number changes, this will update the page number and call fetch the blogs for the same page number
        navigate({search: `?page=${pageNumber}`});
        setPageNumber(pageNumber);
    }

    //Since Dark mode is also needed, we'll write the logic here and pass the data
    // First we'll check that the user has a preferance for darkmode or not (if he/she has already set darkmode in the sytem or not)
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    //If localStorage has a 'theme' value, theme is set to that value; otherwise, it defaults to 'dark' if defaultDark is true, or 'light' if defaultDark is false.
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    // Creating a function for switching theme
    function switchTheme(){
        // for switching a theme, if theme is light set it to dark or vice versa
        const newTheme = (theme === 'light') ? 'dark' : 'light';
        setTheme(newTheme);
    }

    // Creating values that needs to be sent
    const value = {
        loading,
        setLoading, 
        pageNumber,
        setPageNumber,
        toatalPageNumber,
        setToatalPageNumber,
        posts,
        setPosts,
        fetchBlogPosts,
        handlePageChange,
        theme,
        setTheme,
        switchTheme,
        defaultDark
    }

    //Step 3 => Sending the data for consumption
    //The children component must be wrapped inside the context component 
    //Here App.js is the children (check index.js)
    return  <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
}

