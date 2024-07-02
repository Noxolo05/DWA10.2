document.addEventListener('DOMContentLoaded', () => {
    const counterValueElement = document.getElementById('counterValue');
    const addButton = document.getElementById('addButton');
    const subtractButton = document.getElementById('subtractButton');
    const resetButton = document.getElementById('resetButton');
    const resetAlert = document.getElementById('resetAlert');
  
    let counterValue = 0;
  
    function updateCounter() {
      counterValueElement.textContent = counterValue;
    }
  
    addButton.addEventListener('click', () => {
      counterValue += 1;
      updateCounter();
    });
  
    subtractButton.addEventListener('click', () => {
      if (counterValue > 0) {
        counterValue -= 1;
        updateCounter();
      }
    });
  
    resetButton.addEventListener('click', () => {
      counterValue = 0;
      updateCounter();
      resetAlert.show();
    });
  
    resetAlert.addEventListener('sl-after-hide', () => {
      resetAlert.hide();
    });
  });
  