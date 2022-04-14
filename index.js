var validations = {
    required: function(value){
      return value !== '';
    },
    email: function(value){
      return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
  }
  function validate() {
    var form = document.getElementById('form'),
        input = form.querySelector('input'),
        errorMessage = document.querySelector(".error-message")
    
    form.addEventListener('submit', function(e){
      console.log("IS ERROR", !validations.required(input.value) || !validations.email(input.value))
      
      if (!validations.required(input.value) || !validations.email(input.value)) {
        errorMessage.className = "error-message show-error";
      } else {
        errorMessage.className = "error-message";
      }

      e.preventDefault();
    }, false)

    input.addEventListener('change', (e) => {
      if (input.value === '') {
        errorMessage.className = "error-message";
      }
    })
  }
  validate();
  