// This is a workaround to add icons without modifying components
document.addEventListener('DOMContentLoaded', () => {
  // Add employee button
  const addEmployeeBtn = document.querySelector('.btn-primary');
  if (addEmployeeBtn) {
    addEmployeeBtn.innerHTML = `
      <i class="bi bi-person-plus"></i> ${addEmployeeBtn.textContent}
    `;
  }

  // Update buttons
  document.querySelectorAll('.btn-info').forEach(btn => {
    btn.innerHTML = `
      <i class="bi bi-pencil-square"></i> ${btn.textContent}
    `;
  });

  // Delete buttons
  document.querySelectorAll('.btn-danger').forEach(btn => {
    btn.innerHTML = `
      <i class="bi bi-trash"></i> ${btn.textContent}
    `;
  });

  // Submit button
  const submitBtn = document.querySelector('.btn-success');
  if (submitBtn) {
    submitBtn.innerHTML = `
      <i class="bi bi-check-circle"></i> ${submitBtn.textContent}
    `;
  }
});