

document.getElementById('share_button').addEventListener('click', function() {
    let toggleItem = document.getElementById('toggle_menu');

    // Ελέγξτε αν η ορατότητα είναι hidden
    if (toggleItem.style.visibility === 'hidden') {
        toggleItem.style.visibility = 'visible';  // Κάνει το μενού ορατό
        toggleItem.style.opacity = '1';           // Ορατό με opacity 1
    } else {
        toggleItem.style.visibility = 'hidden';  // Κρύβει το μενού
        toggleItem.style.opacity = '0';           // Κρύβει με opacity 0
    }
});
