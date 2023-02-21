const btn = document.querySelector("button");
const select = document.querySelector("select");
const h1 = document.querySelector("h1");
const html = document.querySelector("html");
const list = document.querySelector("ul");

let days = 31;
h1.innerHTML = 'January';

select.addEventListener("change", () => {
	const choice = select.value;
	
  if (choice === "february") {
    days = 28;
  } else if (
    choice === "september" ||
    choice === "april" ||
    choice === "june" ||
    choice === "november"
  ) {
    days = 30;
  } else {
    days = 31;
	}

	function createCalender(days, choice) {
		list.innerHTML = '';
		h1.textContent = choice;
	
		for (let i = 1; i <= days ; i++) {
			const listDate = document.createElement("li");
			listDate.textContent = i;
			list.appendChild(listDate);
		}
	}
	
	createCalender(days, choice);
});


