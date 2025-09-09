document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('toggleBtn');
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content');
  const navText = sidebar.querySelectorAll('span');

  toggleBtn.addEventListener('click', () => {
    const sidebarOpen = sidebar.classList.contains('w-64');

    if (sidebarOpen) {
      // Tutup sidebar
      sidebar.classList.replace('w-64', 'w-16');
      content.classList.replace('ml-64', 'ml-16');
      navText.forEach(span => span.classList.add('hidden'));
    } else {
      // Buka sidebar
      sidebar.classList.replace('w-16', 'w-64');
      content.classList.replace('ml-16', 'ml-64');
      navText.forEach(span => span.classList.remove('hidden'));
    }
  });
});

