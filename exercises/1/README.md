# Exercise 1 - Mailchimp sign up form

Implement only UI based on Mailchimp sign up form:

![form](https://user-images.githubusercontent.com/3074083/106109810-3c2d2d80-614a-11eb-967d-70b8f320d21d.png)

Reference to the Mailchimp sign up form https://login.mailchimp.com/signup/

## Required

### Layout

1. Implement 3 fields `email`, `username`, `password` and a button. Create `<Field label={} />` and `<Button/>` components:

2. Implement header and sub-header. Create `<Header />` and `<SubHeader />` components.

3. Implement footer. Create `<Footer />` components.

4. (Extra credit) - Validation component for `password` field which are grayed out if password is matching the rules.

### Logic

1. Make the form using controlled components - https://reactjs.org/docs/forms.html#controlled-components (use hooks like `useState`, `useRef`)

2. Validation:

- `email` - field is required and has to contain '@'
- `username` - field is required and has to be only lowercase
- `password` - field is required and has 1 lowercase, 1 uppercase, 1 number, 1 special character (optional), 8 characters minium

3. Include CSS inside `form.css` file

### Extra credit

- Show/hide password
- Special character validation
- Checkbox next to the button
- Split components to separate files

## Useful links

- [React forms](https://reactjs.org/docs/forms.html)
- [React hooks](https://reactjs.org/docs/hooks-state.html)
