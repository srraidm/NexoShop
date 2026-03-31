// script.js

// Function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    modal.classList.add('fade-in');
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('fade-in');
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('fade-out');
    }, 500);
}

// Add event listeners for modals
document.querySelectorAll('.modal-button').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        openModal(modalId);
    });
});

// Add event listeners for closing modals
document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.closest('.modal').id;
        closeModal(modalId);
    });
});

// Function to handle category selection
function selectCategory(categoryId) {
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.classList.remove('selected');
    });
    const selectedCategory = document.getElementById(categoryId);
    selectedCategory.classList.add('selected');
}

// Add event listeners to category elements
document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', () => {
        const categoryId = category.id;
        selectCategory(categoryId);
    });
});
