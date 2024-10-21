About My Frontend Personal Project

The Task Management App is designed to help users efficiently create, organize, and manage tasks. It offers a simple and intuitive interface where users can add tasks, edit them, mark tasks as complete, and categorize them. The project focuses on delivering a responsive and user-friendly design using modern frontend tools and techniques.

1. Planning & Inspiration

For inspiration, I looked at several existing task management apps, such as Todoist and Microsoft To-Do, which prioritize clean UI and ease of use. I sketched a few wireframes on paper to visualize the layout, including how task lists would appear on both desktop and mobile screens. I also drew flow diagrams to outline user interactions, such as adding, editing, and completing tasks.

Useful References:

    •	Todoist
    •	Microsoft To-Do
    •	Simple wireframes and flow diagrams were created to guide the UI layout and user flows.

2. Tech Stack

   • HTML: Structure of the app.
   • CSS (with Flexbox/GRID): Responsive layout and styling.
   • JavaScript: Used for interactivity (adding/editing/deleting tasks, toggling task completion).
   • React: The core framework for building the UI components and handling state management.
   • React Hooks: For managing local state in functional components (e.g., useState, useEffect).
   • LocalStorage: Used to persist user data (tasks) even after page reload.

7. Key Features

    1.	Task Creation and Management:
	•	Add new tasks with descriptions, priorities, categories, and due dates.
	•	Edit, update, or delete tasks.
	•	Mark tasks as complete or incomplete.
	2.	Priority-Based Task Sorting:
	•	Sort tasks by priority levels: High, Medium, and Low.
	•	Apply color gradients to visually distinguish task priorities.
	3.	Task Filtering and Search:
	•	Filter tasks by text, priority, category, or due date.
	•	Search bar allows dynamic search across multiple fields, including newly added categories.
	4.	Category Management:
	•	Predefined categories (e.g., Personal, Work).
	•	Option to create custom categories on-the-fly and assign tasks to them.
	5.	Due Date Sorting:
	•	Automatically sort tasks by due date, with nearest tasks at the top and undated tasks at the bottom.
	6.	Responsive Design:
	•	Mobile and desktop-friendly layout.
	•	Tasks and features adapt seamlessly to different screen sizes.
	7.	Visual Indicators:
	•	Bold task names for better readability.
	•	Task labels (priority, category, due date) displayed with consistent styling.
	8.	Completion Tracking:
	•	Visual representation of completed tasks (e.g., strikethroughs and checkboxes).
	9.	User-Friendly Interface:
	•	Simple navigation with clear buttons for adding, editing, and deleting tasks.
	•	Clean UI inspired by popular task management tools.
	10.	Local Storage Integration:
	•	Tasks saved locally in the browser to persist across sessions without needing a server.

3. Why This Stack?

I chose React for its component-based architecture, which allows the app to be scalable and modular. The use of React Hooks simplifies state management without needing complex tools like Redux. For persistence, LocalStorage was ideal as it keeps user data on the client side without needing a backend. HTML and CSS were natural choices for structuring and styling the app, while JavaScript enhances interactivity.

4. What I Enjoyed

I enjoyed building dynamic user interfaces with React, especially using Hooks for state management. It was rewarding to see how components re-render based on state changes, making the app feel responsive and real-time. I also enjoyed the CSS aspect, where I could experiment with responsive design, ensuring the app worked smoothly on mobile and desktop.

5. What I Found Challenging

One challenge was implementing the LocalStorage feature, ensuring tasks persist after page reload while syncing them with React’s state. Another tricky part was designing a clean yet functional interface that adapts to various screen sizes, as responsiveness required careful thought with CSS Flexbox and Grid.

6. Link to Netlify App - https://67117189cfdb12c2f4749afe--radiant-sfogliatella-2ca49d.netlify.app/

