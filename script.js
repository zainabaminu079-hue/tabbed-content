const tabs = document.querySelectorAll('.tab-btn');
const panes = document.querySelectorAll('.content-pane');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = tab.dataset.target;
        const targetPane = document.getElementById(targetId);

        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Remove active class from all content panes
        panes.forEach(p => p.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Add active class to matching content pane
        targetPane.classList.add('active');
    });
});
