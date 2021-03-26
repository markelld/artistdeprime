## Overview

_**Project Title**  

Artiste 
  
The project inspiration came from my love for art and photography. So I decided to create a site for artist to post there work,events or anything they wish. My goal is to create a community online strictly for artist.

## MVP

> The app will include authentication and crud functionality for users to post,edit and delete there posts(only posts that belong to them). Users will also be able to comment on other users posts.  

<br>

### Goals

- secure authentication
- fully functional crud
- fully responsive design
- lay foundation for app that can scale upwards in the future

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _used to create front-end of app._ |
|      Axios       | _used for API calls to back-end._ |
| React Router Bootstrap | _navbar routing._ |
| React Router Dom | _routing for pages._ |
| React Bootstrap  | _component library for styling._ | 
|  Heroku          | _backend deployment._ | 
|  Netlify         | _frontend deployment._ | 
| Ruby on Rails    | _used to create back-end of app._ | 
| Postgresql       | _used to create database._ |

<br>

### Client (Front End)

#### Wireframes

- Desktop 
![Wireframes](https://github.com/markelld/artistedeprime/blob/main/web2.png)

- Mobile  
![Wireframes](https://github.com/markelld/artistedeprime/blob/main/mobile1.png)

#### Component Tree


#### Component Hierarchy

``` structure

src 
|__app.js 
|__index.js 
|__ Components/ 
      |__ Layout/ 
                 |__Layout.css 
                 |__Layout.jsx 
      |__Header/
                |__Header.css 
                |__Header.jsx  
      |__Footer/
                |__Footer.css 
                |__Footer.jsx                  
 |__ Screens/
      |__ SignIn/ 
                 |__SignIn.css 
                 |__SignIn.jsx 
      |__Register/
                |__Register.css 
                |__Register.jsx  
      |__Home___/
                |__Home.css 
                |__Home.jsx  
     |__PostDetail/ 
                 |__PostDetail.css 
                 |__PostDetail.jsx 
      |__PostEdit/
                |__PostEdit.css 
                |__PostEdit.jsx  
      |__Post___/
                |__Post.css 
                |__Post.jsx  
  |__ Services__/
                |__api-helper.js
                |__posts.js
                |__users.js
                |__comments.js

```

#### Component Tree

![CH](https://github.com/markelld/artistedeprime/blob/main/CH.png)

[Component tree](url) 

#### Component Breakdown 

| Component           | Type     | State   | Props     | Description   |
| ------------------- | :------: | :-----: | :-------: | :-----------: | 
| Footer              |  functional | N | N |  link to repo on contact form  |   
| Header              |  functional | Y | N |  The header will provide navigation and username state |            
| sign in/register    |  functional | N | Y | The user will be able to register for and login into their account. |
| Home                |  functional | Y | Y | The home page while render user posts and house methods passed by props |       
| PostDetails         |  functional | Y | Y | The post will render individually and users will be able to comment. | 
| Post                |  functional | Y | Y | Users will be able to post new content which will display on home page | 
| PostEdit            |  functional | Y | Y | Owners of posts will be able to delete or edit there posts |  
| Layout              |  functional | N | N | This will serve as layout for every page for after login/register| 

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: | 
| back-end auth       |    H      |   4 hrs  |       hrs     |             | 
| backend crud        |    H    |     6 hrs  |       hrs     |             | 
| front-end file structure|    H     |  2 hrs  |    hrs      |             | 
| front-end Auth      |    H      |    4 hrs  |       hrs     |             | 
| front-end axios calls |    H     |  3 hrs  |       hrs     |             |
| front-end CRUD      |    H    |     3 hrs    |       hrs     |             |
| auth testing        |    H    |     6 hrs    |       hrs     |             |  
| crud testing        |    H    |     6 hrs    |       hrs     |             | 
| Navbar routes       |    H     |    1.5 hrs  |       hrs     |             |
| App routes          |    H     |     2 hrs  |       hrs     |             |
| front-end jsx screens |   H    |     6 hrs  |       hrs     |             | 
|  create components  |    H     |     3 hrs  |       hrs     |             |
| styling components  |    H     |     3 hrs  |       hrs     |             |
| styling screens     |    H      |     6 hrs |       hrs     |             | 
| meadia queries      |    H     |     2 hrs  |       hrs     |             |
| TOTAL               |          |   57.5hrs |       hrs     |             |


### Server (Back End)

#### ERD Model 

![ERD](https://github.com/markelld/artistedeprime/blob/main/data.flow.png)


## Post-MVP

> incorportate chat room 
> 
> incorporate payment method for purchasing art,tickets
> 
> individual profile page for users 
> 
> search or filter for  home page to through posts 
***

## Code Showcase



## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
