// Course data
const courses = [
    {
        id: 1,
        title: "Web Development Fundamentals",
        description: "Learn the basics of HTML, CSS, and JavaScript",
        duration: "8 hours",
        progress: 75,
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600",
        instructor: "Sarah Johnson"
    },
    {
        id: 2,
        title: "Data Science Essentials",
        description: "Introduction to data analysis and visualization",
        duration: "12 hours",
        progress: 30,
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600",
        instructor: "Michael Chen"
    },
    {
        id: 3,
        title: "UX Design Principles",
        description: "Master user experience design fundamentals",
        duration: "10 hours",
        progress: 0,
        thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600",
        instructor: "Emma Davis"
    }
];

// DOM Elements
const coursesContainer = document.getElementById('coursesContainer');
const searchInput = document.getElementById('searchInput');

// Render course card
function createCourseCard(course) {
    return `
        <div class="course-card">
            <img src="${course.thumbnail}" alt="${course.title}" class="course-image">
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <div class="duration">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        ${course.duration}
                    </div>
                    <span>by ${course.instructor}</span>
                </div>
                <div class="progress-container">
                    <div class="progress-header">
                        <span class="progress-text">${course.progress}% Complete</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${course.progress}%"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render all courses
function renderCourses(coursesToRender) {
    coursesContainer.innerHTML = coursesToRender.map(course => createCourseCard(course)).join('');
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCourses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm) ||
        course.instructor.toLowerCase().includes(searchTerm)
    );
    renderCourses(filteredCourses);
});

// Initial render
renderCourses(courses);