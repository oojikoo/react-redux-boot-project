# React Project Template

### packages in use

- 



### Project Structure

```
/.circleci --- circleci 
/.vscode  --- vscode configureation
/build --- files(favicons..) for build 
/dist --- dist output 
/assets --- all assets images, videos, audios ...
/src --- source directory
  App.tsx
  /pages -- page root component based Routes, all page starts from here.
     Home/ --- folder style
       index.ts
       Home.tsx
     Home.tsx
  /components -- all components
    /layout -- layout related
      /AppWrapper.tsx -- Basic AppLayout
    /navigations -- navigation, route related
      RootNavigator.tsx -- root navigator
      DashboardNavigator.tsx -- sub navigator example
    /containers(optional) -- for container / component design pattern
      /home
        UserCard.container.tsx -- components group with store connected
    /partials 
      /shared
        Footer.tsx
        Navbar.tsx
        ProfileCard.tsx
      /home
        /Intro -- folder style
          index.ts
          Intro.tsx
        Intro.tsx
    /ui
      Icon.tsx -- SVG icon component
      Button.tsx
      HeaderText.tsx
      Icon.tsx
  /services
    apiManager.ts -- api instance 
    authApi.service.ts -- authentication api
    userApi.service.ts -- user api
    productApi.service.ts -- product api 
    connectSocket.service.ts -- socket connection 
  /types
    index.ts -- types for typescript
  /utils 
    analytics/
      pixel.ts
    constants.ts -- all constants
    functions.ts
    apiConstants.ts
    env.ts
  /hooks
    userInput.ts
  /providers
  /contexts
  /store
    /user  -- duck folder style
      index.ts
    user.store.ts -- duck file style
    useStore.ts
  /sagas
  	user.saga..ts
    rootSaga.ts
 
    
```

