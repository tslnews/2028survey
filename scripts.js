// JavaScript for tab switching
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-link');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to the clicked tab and its corresponding panel
            tab.classList.add('active');
            const targetPanel = document.getElementById(tab.getAttribute('data-tab'));
            targetPanel.classList.add('active');
        });
    });
});
