function openNav() {
    document.getElementById("sidebar").style.left = "0";
}

function closeNav() {
    document.getElementById("sidebar").style.left = "-250px";
}
function openNav() {
    document.getElementById("sidebar").style.left = "0";
}

function closeNav() {
    document.getElementById("sidebar").style.left = "-250px";
}

function filterStudents() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const studentName = document.querySelector('.details p:first-child').textContent.toLowerCase();

    if (studentName.includes(searchInput)) {
        document.querySelector('.student-info').style.display = 'flex';
    } else {
        document.querySelector('.student-info').style.display = 'none';
    }
}
function openNav() {
    document.getElementById("sidebar").style.left = "0";
}

function closeNav() {
    document.getElementById("sidebar").style.left = "-250px";
}

function filterStudents() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const students = document.querySelectorAll('.student-info');

    students.forEach(student => {
        const studentName = student.getAttribute('data-name').toLowerCase();
        if (studentName.includes(searchInput)) {
            student.style.display = 'flex'; // Show matched student
        } else {
            student.style.display = 'none'; // Hide unmatched student
        }
    });
}
