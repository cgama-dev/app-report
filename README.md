# appjsreport

-> PDF System Generation [handlebars](http://handlebarsjs.com/) with phantom pdf

## Technologies:
* Front-end: Semantic-UI , React, Redux-Saga
* Back-end: Nodejs, Express, JsReport, Phantom-pdf
* DB: MongoDB

## Run this project (Linux Ubuntu)

> yarn loader

> yarn start 

## Rest just sending data
-> Do a post with for **"/generate"**, sending as data:
```javascript
{
    projectName: projectname,
    data: data
}
```
-> Example:
```javascript
{
    projectName: "myproject",
    data: {
		name: "Jonh Doe",
		age: 24,
		city: "Belem"
	}
}
```

## Developers:
* Cleyton Gama
* Pedro Ramos
