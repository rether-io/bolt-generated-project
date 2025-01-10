document.addEventListener('DOMContentLoaded', function() {
      const metricValues = document.querySelectorAll('.metric-value');

      metricValues.forEach(metricValue => {
        const targetValue = parseInt(metricValue.getAttribute('data-value'));
        let currentValue = 0;
        const increment = targetValue > 100 ? Math.ceil(targetValue / 100) : 1;

        function updateValue() {
          if (currentValue < targetValue) {
            currentValue += increment;
            if (currentValue > targetValue) {
              currentValue = targetValue;
            }
            metricValue.textContent = currentValue;
            requestAnimationFrame(updateValue);
          }
        }

        updateValue();
      });
    });
