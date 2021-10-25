# Simple device management web app
> simple crud containing database, backend and frontend

## Project description
This is a simple device management web app, Has two types of objects, which are:
 - Category: name and an ID;
 - Device: ID, Category, color and partNumber;

Note that Device contains the Category Object in its composition.
The Web App must be able to create, list, and delete objects.

## Requirements
![Badge](https://img.shields.io/static/v1?label=Docker&message=0.9.1&color=blue)

[Docker](https://www.docker.com)  is an open platform for developing, shipping, and running applications. Docker provides the ability to package and run an application in a loosely isolated environment called a container.

![Badge](https://img.shields.io/static/v1?label=Node.js&message=12.22.7&color=green)

[Node.js](https://nodejs.org/en/)  It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.


![Badge](https://img.shields.io/static/v1?label=npm&message=6.14.15&color=green)

[npm](https://www.npmjs.com) is the default package manager for the JavaScript runtime environment Node.js.

![Badge](https://img.shields.io/static/v1?label=Nest.js&message=8.1.4&color=green)

[Nest.js](https://nestjs.com) is a Node.js framework based on TypeScript and JavaScript.

![Badge](https://img.shields.io/static/v1?label=TypeORM&message=0.2.38&color=green)

[TypeORM](https://typeorm.io/#/) is an Object Relational Mapper library running in node. js and written in TypeScript. ... js).

![Badge](https://img.shields.io/static/v1?label=Angular&message=9&color=red)

[Angular](https://angular.io) is a platform for building mobile and desktop web applications.

## Installation

### Database
Run the database using docker
```bash
docker-compose up -d
```
### Back-end
Inside the back-end folder, install the Nest.js project dependencies using npm
```bash
npm install --save @nestjs/typeorm typeorm mysql2
```
Up the back-end
```bash
nest start
```
### Front-end
Inside the front-end folder, install the project dependencies using npm
```bash
npm install
```
Up the front-end
```bash
ng serve
```
## Usage
Browse through the pages using the ToolBar

![image-toolbar](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ec18cfdd-5876-45cb-8027-daa06cf754f1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211025T230126Z&X-Amz-Expires=86400&X-Amz-Signature=c10884cdd8313347af4cdc873328945065c4fb01c8af4cf3edd77b5d54fdeb87&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"Untitled.png")

Fill in the fields and click in add button.
```Note that the fields have requirements```, which are

Device:
- Category: A dropdown selection you can choose from all categories available
- Color: letters only, max size 16
- partNumber: positive integer

Category:
- Name: Must not be empty, max size 128 chars.


![image-click-add-button](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9366be24-fdf6-453e-9a23-1f5ffc20a996/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211025T230313Z&X-Amz-Expires=86400&X-Amz-Signature=08dd6c861ec35f3fb3d1e60062da285feadf85c011832b25a5584da934f29ab8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"Untitled.png")


Delete an object by clicking in delete button

![image-delete-button](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d4f83f5c-7316-40f2-9251-08c2af8bc478/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211025T230542Z&X-Amz-Expires=86400&X-Amz-Signature=5994fbfdddcb5bbf27a928562266820837bfd5e54d3fb4163ee76014879b34c6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"Untitled.png") 


Page overview

![image-page-overview](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2ab6b2e4-12d7-4beb-8429-46376e5a83a0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211025T230708Z&X-Amz-Expires=86400&X-Amz-Signature=c0eab139ee2e706a008eed5a50637b292339e863e2bc6cc9e82a3c1b464b5327&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"Untitled.png")
