# React with Typescript & Sass examples.

## Routing
 - react-router-dom v6
 ```js
    // in index.tsx
    <BrowserRouter>  
      <App />
    </BrowserRouter>
 ```
 ```js
    // in App.tsx
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/intro" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
 ```