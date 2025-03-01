[Visit The Live Website](https://code-help-blogs.vercel.app/)

**Blog Website**

This project is a blog website built using React that fetches data from an external APIand displays it on various pages. It also includes a theme-switching feature,allowing users to switch between light and dark modes for an improved reading experience.

**Getting Started**

To run the project locally,follow these steps:

1. Clone the repository to your local machine.
1. Install project dependencies using npm install or yarn install.
1. Start the development server with npm start or yarn start.
1. Explore the blog website and enjoy the theme-switching feature.

**Technologies Used**

- React: For building the user interface and managing state.
- Tailwind CSS: For styling and responsive design.
- Axios: For making APIrequests.
- use-local-storage: For managing theme preferences.

**Project Structure**

**`index.js`**

- The index.js file is the entry point of the application.
- It initializes the React app,sets up the root element,and renders the main App component wrapped in a context provider.

**`App.js`**

- The App.js file is the core of the application,orchestrating key functionalities.
- It leverages React hooks and the context APIto efficiently manage and share data across components.
- Main features include:
- Fetching and displaying blog posts.
- Implementing pagination for navigating through blog pages.
- Applying theme changes,allowing users to toggle between light and dark modes.
- The useEffect hook ensures that blog posts are fetched and theme settings are applied after the component is rendered.

**`index.css`**

- The index.css file contains the project's styling,utilizing the Tailwind CSS framework.
- Custom properties (CSS variables) are defined for light and dark mode,allowing for easy theming customization.
- Different styles for light and dark modes are specified based on the chosen theme.

**Blog Website Components**

This project comprises several React components that together create a blog website. Each component has a specific role in rendering and managing different aspects of the website.

**Component Descriptions 
`BlogDetails.jsx`**

- The BlogDetails component is responsible for rendering detailed information about a blog post.
- It displays the post's title,author,category,date,content,and tags.
- Clickable links are provided for navigation to related categories and tags.

**`Darkmode.js`**

- The Darkmode component is responsible for rendering and managing the dark mode and light mode theme toggle button.
- It utilizes the useContext hook to access the theme and theme-switching function from the context.
- The button allows users to switch between dark and light themes,and the icon changes accordingly.

**`Header.js`**

- The Header component represents the website's header section.
- It displays the website's title and includes the Darkmode component for theme toggling.
- The header also applies styling and shadow effects based on the selected theme.

**`Pagenation.js`**

- The Pagenation component handles pagination controls for navigating between blog pages.
- It retrieves data from the context,including the current page number and total page count.
- Users can click "Previous"and "Next"buttons to navigate between pages,and the component updates accordingly.

**`Posts.js`**

- The Posts component is responsible for rendering blog posts.
- It utilizes context data to display either a loading spinner or a list of blog posts.
- The component also handles edge cases,such as when no posts are found or when posts contain tags.

**`ScrollToTop.jsx`**

- ScrollToTop is a utility component that automatically scrolls the window to the top when the URLpath changes.
- It enhances navigation by ensuring users start at the top of the page when accessing different content.

**`Spinner.jsx`**

- The Spinner component renders a loading spinner to improve the user experience during data loading.
- It creates a visual indicator of loading progress and provides feedback to users.

**Blog Page Application**

This project is a blog page application built using React and React Router. It allows users to browse and view blog posts organized by categories and tags. The application also provides features like dark mode,pagination,and navigation between related blog posts.

**Pages Home**

- The Home page displays a list of all blog posts.
- Users can navigate through different pages of blog posts using pagination.
- The page supports dark mode for improved user experience.

**Category Page**

- The Category Page displays blog posts related to a specific category.
- Users can navigate back to the previous page or explore more posts in the same category.
- Dark mode is available for better readability.

**Tag Page**

- The Tag Page displays blog posts associated with a particular tag.
- Users can easily go back to the previous page or explore other posts with the same tag.
- The dark mode feature enhances the reading experience.

**Blog Page**

- The Blog Page allows users to view a single blog post in detail.
- Users can also see related blog posts.
- Navigation back to the previous page is supported,and dark mode enhances the appearance.

**Context Management**

- The application utilizes React Context to manage and share data across components.
- The context stores information such as loading status,current page number,total page count,and blog posts.
- Dark mode functionality is also integrated,allowing users to switch between light and dark themes.

**Component Interaction**

- These components interact with the central application context (AppContext) to access and manage data,such as theme preferences,blog posts,and pagination.
- The components use hooks like useContext and useState to ensure responsive and dynamic user interactions.

**Styling**

- Styling is achieved using Tailwind CSS classes and custom CSS properties.
- The components adapt their appearance based on the selected theme,providing a cohesive user experience.

**Dependencies**

- React: For building the user interface.
- React Icons: For displaying theme toggle icons.
- Tailwind CSS: For styling and responsive design.
- use-local-storage: For managing theme preferences.

**AppContext.js**

In this project,the AppContext.js file serves as the cornerstone for managing and distributing data across various components. It adheres to the React Context API,establishing a central hub for storing and sharing critical information throughout the application's lifecycle.

**Context Creation Steps**

**Step 1: Creating the Context**

The initial step involves the creation of a context using createContext from React. This context acts as a container,housing the data intended for dissemination among components.

**Step 2: Providing Data to Children**

The AppContextProvider function operates as a wrapper enveloping the entire application. It facilitates the dissemination of data to all child components,streamlining access and updates to essential state variables. These variables encompass:

- loading: Aboolean flag indicating whether data retrieval is currently in progress.
- pageNumber: Tracks the current page number of the blog posts being displayed.
- toatalPageNumber: Stores the total number of available pages.
- posts: An array designed to hold retrieved blog posts.
- theme: Responsible for managing the application's theme,spanning both light and dark modes.

**Step 3: Sending Data for Consumption**

The final step involves the creation of a value object. This object amalgamates all pertinent data and functions that necessitate sharing with child components. The AppContext.Provider component encapsulates the entire application,granting access to the value object for all subscribing child components.

**Key Data and Functions**

**Data Variables**

- loading: Aboolean variable that signals whether data is actively being fetched.
- pageNumber: Keeps a record of the current page number for blog posts.
- toatalPageNumber: Stores the total count of available pages.
- posts: An array that houses the fetched blog posts.
- theme: Governs the application's theme,including both light and dark modes.

**Functions**

- fetchBlogPosts(pageNumber): Afunction tasked with initiating APIcalls to retrieve blog posts based on the provided page number.
- handlePageChange(pageNumber): Manages page navigation by updating the pageNumber and triggering fresh data retrieval.
- switchTheme(): Facilitates toggling between light and dark theme modes within the application.

**Theme Handling**

The context also boasts an embedded theme management mechanism,affording users the flexibility to switch between light and dark modes. The default theme is determined by user system preferences,but it can be customized and persisted using local storage.

**Usage**

To access the data and functions made available by the context,child components can effortlessly import and utilize the useContext hook in conjunction with AppContext.

**Dependencies**

The context leverages the use-local-storage package to proficiently manage and persist user theme preferences.

**Contribution**

Contributions to this project are welcome!If you'd like to contribute,please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and submit a pull request.
