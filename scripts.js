// Check if the element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Show or hide the scroll down image based on the paragraph visibility
function toggleScrollIndicator() {
    const scrollDownImg = document.getElementById('scrollDown');
    const problemStatementPara = document.getElementById('problemStatement');

    if (isElementInViewport(problemStatementPara)) {
        scrollDownImg.style.visibility = 'hidden';
    } else {
        scrollDownImg.style.visibility = 'visible';
    }
}


function checkCode() {
    const input = document.getElementById("secretInput").value;
    const correctCode = "MASC";  // SECRET CODE

    if (input === correctCode) {
        document.getElementById("hiddenSection").style.display = "block";
        document.getElementById("box_secretInput").style.display = "none";
    } else {
        alert("Incorrect code. Please try again.");
    }
}


// Add event listeners for scroll and resize events
window.addEventListener('scroll', toggleScrollIndicator);
window.addEventListener('resize', toggleScrollIndicator);

// Initial check
window.onload = toggleScrollIndicator;