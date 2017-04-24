# React is Awesome!
---
Welcome to your first foray into the world of ReactJS!

### Release 0

Work through the official [React tutorial](https://facebook.github.io/react/tutorial/tutorial.html).
<p>*Note: do this in a different folder outside this repo.*</p>

### Release 1: Setup

<p>In this release you'll be building an app using api data from the React is Awesome Backend</p>

#### To get started:
1. Clone down the [backend](https://github.com/sea-chorus-frogs-2017/react-is-awesome-backend)
2. In the react-is-awesome-backend directory type:
```
$ be bundle
$ be rake db:setup
$ rails s
```

<p>Once your server is running try the following command in your command line from the `/react-is-awesome` directory:</p>

```
$ curl localhost:3000/books/1
```
<p>If everything is working correctly your response should look similar to the following:</p>

```
{"id":1,"title":"Look Homeward, Angel","author":"Luigi Balistreri","publisher":"Hodder Headline","genre":"Mythology","created_at":"2017-04-21T23:12:15.051Z","updated_at":"2017-04-21T23:12:15.051Z"}
```
### Release 2: Wireframing/planning

<p>In this you'll go read [the documentation](https://github.com/sea-chorus-frogs-2017/react-is-awesome-backend) for the backend provided and see what kind of app you can build.</p>
<p>Current available endpoints pertain to users, books, and friends.</p>

Some possible apps:

  - A library interface
  - A Goodreads clone
  - What else?

<p>When you have decided on you app that you're going to build start designing it! Start by wireframing one of the index pages. What components are necessary?</p>
<p>When you have your wireframe done get approval from an instructor before you start building</p>

### Release 3: Build your app!
** Good luck! **

To connect to the backend, you have add a couple of keys to your .ajax calls:
```
  $.ajax({
    ...
    crossDomain: true,
    xhrFields: { withCredentials: true },
    ...
  })
```
