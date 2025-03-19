# To-Do List App
## Overview
This To-Do List App is a simple, React-based application that allows users to manage their daily tasks. Users can add new tasks, mark them as complete, rename them, and delete them. The app persists tasks in the browser's local storage, ensuring that tasks are saved between sessions.

## Features
- Add Tasks: Users can add new tasks to their to-do list.
- Complete Tasks: Users can mark tasks as complete.
- Rename Tasks: Users can rename existing tasks.
- Delete Tasks: Users can delete tasks from the list.
- Persistent Storage: Tasks are saved in local storage, so they persist across browser sessions.
- User Feedback: Provides feedback based on the number of tasks completed.
## Components
## App.js
This is the main component that maintains the state of the tasks and renders the list. It includes:

- State management for tasks using useState.
- Loading tasks from local storage on component mount using useEffect.
- Saving tasks to local storage with a debounce using useEffect.
- Callback functions for adding, removing, renaming, and toggling tasks.
- Dynamic messages based on the task completion rate.
## Task.js
This component represents an individual task. It includes:

- Task name display.
- Toggle button to mark the task as complete/incomplete.
- Rename functionality.
- Delete button to remove the task.
## TaskForm.js
This component handles the creation of new tasks. It includes:

- Input field for the task name.
- Submit button to add the new task.

  ## Screenshots
![Screenshot (63)](https://github.com/Mubeen-04/to-do-list/assets/172309170/1765d6af-4b54-4993-a839-0f8559121a9b)
