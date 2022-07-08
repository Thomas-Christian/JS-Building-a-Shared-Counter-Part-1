function main() {
  const countContainer = document.querySelector("#count-container");
  const incrementButton = document.querySelector("#increment-button");
  const decrementButton = document.querySelector("#decrement-button");

  async function getData() {
    let response = await fetch("http://localhost:9001/counter");
    let data = await response.json();
    console.log(data);
    countValue = await data.value;
    countContainer.textContent = countValue;
  }

  let countValue = 0;

  getData();

  async function increment() {
    countValue++;
    countContainer.textContent = countValue;
    let response = await fetch("http://localhost:9001/counter", {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            value: countValue
        })
    })
  }

  async function decrement() {
    countValue--;
    countContainer.textContent = countValue;
    let response = await fetch("http://localhost:9001/counter", {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            value: countValue
        })
    })
  }

  incrementButton.addEventListener("click", increment);
  decrementButton.addEventListener("click", decrement);
  countContainer.textContent = countValue;
}
main();
