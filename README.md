```markdown
# Product Listing Page (PLP)

This project is a fully responsive Product Listing Page (PLP) developed using **React.js**, **Next.js**, and **Tailwind CSS**. It integrates with the **FakeStoreAPI** to dynamically fetch and display product data. The page is optimized for both desktop and mobile/tablet views, ensuring a smooth and responsive user experience. It also includes sign-in and sign-up functionalities for user authentication.

## Features

- **Responsive Design:** Fully responsive across desktop, tablet, and mobile devices.
- **Dynamic Product Fetching:** Uses FakeStoreAPI to fetch and display product data.
- **Server-Side Rendering (SSR):** The page is optimized for SEO and fast loading.
- **User Authentication:** Sign-in and sign-up functionalities using mock authentication (currently only logging the credentials).
- **Product Categories:** Allows users to filter products by category (e.g., Electronics, Clothing, etc.).

## Technologies Used

- **React.js** for the frontend UI.
- **Next.js** for SSR and routing.
- **Tailwind CSS** for styling and responsiveness.
- **FakeStoreAPI** for fetching mock product data.
- **Axios** for handling API requests.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Hugs-4-Bugs/NXTWAVE-assignment-PLP.git
   ```

2. Navigate into the project folder:

   ```bash
   cd product-listing-page
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The project will be running at `http://localhost:3000`.

## Pages & Components

- **Home Page (`/`)**: Displays a list of products, categorized by type. Users can filter products by category.
- **Product Page (`/product/:id`)**: Displays detailed information about a product (to be implemented as per requirement).
- **Sign In Page (`/login`)**: Form for users to sign in.
- **Sign Up Page (`/signup`)**: Form for users to create a new account.

## API Integration

The page fetches product data dynamically from **FakeStoreAPI** using Axios. The mock API provides product details such as name, price, category, and image.

```js
import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
```

## Authentication

- **Sign Up:** Users can register by entering their name, email, and password.
- **Sign In:** Users can log in by providing their email and password.
- Both forms are handled using a simple `AuthForm` component which sends the form data to mock authentication functions.

## Hosting

The application is hosted on **Vercel** (or **Netlify**) for public access. You can view the live version [here](https://your-vercel-url).

## Screenshots

<img width="1440" alt="Screenshot 2025-04-24 at 3 18 19 PM" src="https://github.com/user-attachments/assets/91eb0ef1-8868-4ca7-8486-2f9b240f695a" />


## Future Improvements

- Implementing actual authentication using JWT or OAuth.
- Adding product details pages with more information.
- Integrating a shopping cart and checkout process.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to **FakeStoreAPI** for providing the mock product data.
- Thanks to **Tailwind CSS** for making styling easy and efficient.

