/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];
  
  // ============================================
  // 🔍 Tasks
  // ============================================
  
  /*
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */
 
  const incompleteTasks = todos.filter(function(todo) { 
    return !todo.completed;
  });

  console.log("Incomplete Tasks: ", incompleteTasks);

  /* todos.filter() goes through each item in todos array.
  function(todo) {return !todo.completed; } = callback function
  !todo.completed checks whether the task is NOT completed
  if completed is false, then !false becomes true, so tasks passes filter
  if completed is true, then !true becomes false, so task is excluded
  left with new array (incompleteTasks) containing only incomplete tasks 
  */
  
  /*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */
  
  const sortedByPriority = todos.slice().sort(function(a, b) {
    return a.priority - b.priority;
  });

  console.log("Sorted by Priority: ", sortedByPriority);

  /* sort() modifies original array
  todos.slice() creates shallow copy of todos array so original stays unchanged; keeps original intact for later use
  sort() is comparison function; a and b are two elements from the array
  it compares the priority values; if result neg, a before b. if positive, b before a. if zero, stays as is 
  
  /*
  🔹 Task 3: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */
  
  const allCompleted = todos.map(function(todo) {
    return {
      ...todo,
      completed: true
    };
  });

  console.log("All Tasks Completed: ", allCompleted);


  /*
  map() goes through every item in todos array
  returns new array with transformed items (original unmodified)
  this function runs on each task object
  ...todo is spread operator; copies everything from orig task
  then we override the completed value to be true

  
  */
  //without spread operator:

  // const completedTodos = todos.map(todo => {
  //   return {
  //     task: todo.task,
  //     completed: true,
  //     priority: todo.priority
  //   };
  // });
  
  /*
  🔹 Task 4: Combine Filters
  
  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */

  const filteredAndSorted = todos
    .filter(todo => !todo.completed) //gives only tasks where completed is false... ! means NOT. filtering incomplete tasks
    .sort((a, b) => a.priority - b.priority) //sorting by priority.. lower num = higher priorty. same logic from task 2
    
    console.log("Sorted Incomplete Tasks:", filteredAndSorted);

    /* 

  
  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
  // console.log("Incomplete Tasks:", ...);
  // console.log("Sorted by Priority:", ...);
  // console.log("All Tasks Completed:", ...);
  // console.log("Sorted Incomplete Tasks:", ...);
  */