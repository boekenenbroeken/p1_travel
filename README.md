# Events Travel Frontend assignment

This repo contains the frontend assignment for applicants. We would like to use this assignment to get some insight into your process of thought. You don't have to worry, you can not fail this assignment as it's not a test. We like to use this assignment as a starting point for the interview conversation 🙂

The repository contains two projects: **Frontend** & **API**, you will be working only in the Frontend, but will utilize the API for fetching data.

## Assignment

The assigment is to finish this mini-application that can add and show tickets using the API. We've already provided a basic folder structure, UI components and initialized the redux store.

### Pre-installed and used packages
- React-hook-form - Form state management package
- Mantine UI - UI component library
- Redux toolkit - Simplified redux state management
- Prettier - This project supports prettier

### Still missing in the application
- Routing
- Api calls to the backend to populate the app with data
- Implementation of the redux store to save the data from the API
- Form validation (<b>TIP!</b> React-hook-form integrates easily with Yup: https://github.com/jquense/yup) 

### Requirements

- The project should use TypeScript
- The provided API should be used to fetch and post data
- The home and list page should be accessible by URL (so Routing should be used)
- Use functional components
- Use React Hooks
- Use Redux (toolkit) to manage state
- Use margins and paddings consistently

### Delivery
- You can send a `.zip` with your code.
- You can create a `GitHub` repo, but please make it **private**.

**Note:** If you are stuck on a specific requirement and can't continue, consider just skipping it so you can continue with the rest.

**Home**

This is where an user can add new tickets. This screen is really basic. It just contains a navbar, a form with a few input fields and an add button.
![Home](https://firebasestorage.googleapis.com/v0/b/fe-assignment-d05f6.appspot.com/o/ticket-form.png?alt=media&token=3657cf34-7bf9-4d58-a74e-a85796ddaf57)

**List**

This is where a list of all the tickets are shown
![Home](https://firebasestorage.googleapis.com/v0/b/fe-assignment-d05f6.appspot.com/o/ticket-list.png?alt=media&token=976758f0-c167-4d95-8215-2e64498a28bc)

#### Colors, fonts and logo's

- The Events Travel logo can be found at `frontend/public/ET-logo.png`
- Colors
  - Blue: `#2e93bf`
  - Light grey: `#707070`
  - White: `#ffffff`
  - Red: `red`
- Use whatever font you like best ;)

## API Documentation

### Usage

- Install dependencies with `yarn install`
- Run the server with `yarn start` or `yarn dev`
- The api will be accessible at [http://locahost:5000](http://localhost:5000 ) 
- We have a Postman collection available in the `api` directory

### Specifications

#### Interfaces

##### Ticket

```
interface Ticket {
  id: number;
  email: string;
  title: string;
  description: string;
  price: number;
  amount: number;
  supplier: string;
}
```

#### Endpoints

##### Get all tickets

- URL:
  `/tickets`
- Method:
  `GET`
- Success Response

```
interface GetTicketsResponse {
  data: Ticket[];
}
```

##### Add new ticket

- URL:
  `/tickets`
- Method:
  `POST`
- Request parameters

```
interface PostTicketsRequest {
  ticket: Ticket;
}
```

- validations

`ticket` cannot be `null | undefined`

`ticket.email` must be a valid email

`ticket.price` must be a number

`ticket.amount` must be a number

- Success Response

```
interface GeneralResponse {
  message: string
}
```

- Validation Error Response

```
interface ValidationErrorResponse {
  message: string,
  valid: boolean
}
```

