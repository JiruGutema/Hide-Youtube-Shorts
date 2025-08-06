document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('toggleSwitch');

  // Load the saved state and set the switch
  browser.storage.local.get('isEnabled', (data) => {
    toggleSwitch.checked = data.isEnabled !== false; // default to true
  });

  // Save the state when the switch is toggled
  toggleSwitch.addEventListener('change', () => {
    browser.storage.local.set({ isEnabled: toggleSwitch.checked });
  });
});
