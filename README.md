# Beerflix

> Find your favourite beer! 

![img](https://github.com/gemasegarra/beerflix/blob/master/src/images/beerflix.png)

App that shows a list of beers and some info about them loading data via [The Beer API](https://beerflix-api.herokuapp.com/).

## Demo

Live version: *coming soon* .

## Installing

To run this project locally do the following:

1. Clone the project 
2. run `npm install` to install all the dependencies
3. run `npm start` to start server on http://localhost:3000/


## Features

![gif](https://github.com/gemasegarra/beerflix/blob/master/src/images/beerflix.gif)

- Main page shows a complete list of beers loaded from the API and some basic info (name, image, description) about them

- Search bar to filter beers by text or date showing a maxium of 10 results 

- Last search is saved via LocalStorage. When clicking on the Beerflix 🍺 logo localStorage data saved is removed

- Option to add likes to beers

- Detailed page for every beer with more info and a comments section (not functional yet) 

- Responsive design

![gif](https://github.com/gemasegarra/beerflix/blob/master/src/images/mobileversion.gif)

## Future improvements 

- Create a login page 
- Add and show comments
- Web accessibility and performance improvements
- Design improvements

#### Known bugs to fix 

- Filter by year is not working properly at the moment. It should be throwing results that match the API value 'firstBrewed' but right now results match the beer 'name' or the beer 'description'.   


## Built with 

Javascript, HTML, CSS, Page.js & Express

## Author 

<table>
<tr>
<td align="center"><a href="https://github.com/gemasegarra"><img src="https://avatars2.githubusercontent.com/u/40056297?v=4" width="100px;" alt="Gema avatar"/><br/><sub><b>Gema</b></sub></a><br/><a href="https://github.com/gemasegarra"></a>
</table>

#### Header pic credit:
Photo by [mnm.all](https://unsplash.com/photos/46Yad80Ynp4) on Unsplash

---

(Práctica realizada para Desarrollo frontend con JavaScript)

