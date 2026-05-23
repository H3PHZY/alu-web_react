# React Inline Styling

This project covers implementing inline styling, CSS-in-JS (using tools like Aphrodite), conditional styling in JavaScript, responsive design, and CSS animations in React applications.

## Learning Objectives

By the end of this project, you should be able to explain:
- **CSS file vs. Inline styling**:
  - CSS files separate styling from logic, support pseudo-classes (e.g. `:hover`), media queries, and global selector rules easily. However, class name conflicts can happen.
  - Inline styling defines styles directly in JavaScript objects. It prevents style conflicts and makes it easy to compute values dynamically, but doesn't natively support pseudo-selectors or media queries, and can clutter markup.
- **CSS-in-JS (e.g., Aphrodite)**: How to define styles in JS and dynamically generate scoped, optimized classes that support pseudo-classes and media queries.
- **Conditional Styles in JS**: Using logic (like ternary operators or boolean evaluation) to apply different style objects based on props/state.
- **Responsive Design**: Making the UI change dynamically according to screen size using CSS or CSS-in-JS tools.
- **Animations**: Creating small animations (like keyframes) within React.

## Tasks

### [Task 0](./task_0) - Inline styling
- Copy base project from `React_component/task_5`.
- Modify `CourseListRow` to use inline styling:
  - Row background color: `#f5f5f5ab`
  - Header row background color: `#deb5b545`
- Avoid direct object instantiation inside the render function for better performance; use constant styling objects defined at the file scope.
