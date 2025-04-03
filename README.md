# EduBizz - Teacher Management System

EduBizz is a **Teacher Management System** built using **React** and **TypeScript**, with **Supabase** as the backend for authentication and data storage. It allows administrators to manage teachers efficiently by adding and removing teacher records.

## Features

- **Email Authentication**: Secure login and signup using Supabase Auth.
- **Add Teachers**: Admins can add teacher details to the database.
- **Remove Teachers**: Delete teacher records from Supabase.
- **View Teacher List**: Fetch and display a list of teachers from the database.
- **Responsive UI**: Fully responsive interface for seamless user experience.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Supabase (Auth + Database)
- **State Management**: React Context API / Redux (optional)

## Installation & Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/rautela-abhiishek/edubizz.git
   cd edubizz
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the Application**
   ```sh
   npm run dev
   ```

## Usage

1. **Sign Up/Login** using email authentication.
2. **Add Teachers** by filling out the required details.
3. **Remove Teachers** from the system.
4. **View Teacher List** stored in Supabase.

## Folder Structure

```
EduBizz/
│── src/
│   ├── components/    # Reusable UI components      
│   ├── context/       # Context API for state management
│   ├── App.tsx        # Main application file
│── .env               # Environment variables
│── package.json
│── README.md
```

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the GNU General License. 



