let text = document.getElementById("text");
      let delay = document.getElementById("delay");
      let btn = document.getElementById("btn");
      let output = document.getElementById("output");

      function promise1(timeDelay) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            output.innerHTML = `${text.value}`;
            resolve("successful");
          }, timeDelay);
        });
      }
      async function handleSubmit(event) {
          event.preventDefault();
        if (text.value == "" || delay.value == "") {
            alert("field is empty")
            return;
        }
        let timeDelay = delay.value;
        await promise1(timeDelay);
        text.value = "";
        delay.value = "";
      }