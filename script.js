// Replace this with your deployed Google Apps Script Web App URL:
/*const scriptURL = "https://script.google.com/macros/s/AKfycbzSIEHiQtAWolu7kJfL7p0tu2fH_edZyegurUMvd2HVrXrUWOVBSIUeZSOuI1XuZrLKDw/exec";

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    message: form.message.value.trim()
  };

  if (!data.name || !data.email || !data.phone || !data.message) {
    alert("Please fill all required fields.");
    return;
  }

  try {
    const res = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const result = await res.json();
    if (result.result === "success") {
      alert("Thank you! Your inquiry has been sent.");
      form.reset();
    } else {
      console.error(result.error);
      alert("Error sending inquiry. Check console.");
    }
  } catch (err) {
    console.error(err);
    alert("Network error. Check console.");
  }
});

// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();


const scriptURL = "https://script.google.com/macros/s/AKfycbwp6wjQ9iKqlTA8jFzdtMintAXXfIyEKAWAsYNKF4JhKI2wrjblDKdZNPj4GnP6YU9OwQ/exec";

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    await fetch(scriptURL, { method: "POST", body: formData });
    alert("Thank you! Your inquiry has been sent.");
    form.reset();
  } catch (err) {
    console.error(err);
    alert("Network error. Check console.");
  }
});*/

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message")
    };

    fetch("https://script.google.com/macros/s/AKfycbz-vq0zo7mqJ2-kTxxAxYJa0tmUApHqJlUHWHrzsG5MuTU9JVlpVaTeL1xa21Y3DMRSbw/exec", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        alert("Inquiry sent successfully!");
        form.reset();
      })
      .catch(err => {
        console.error(err);
        alert("Failed to send inquiry");
      });
  });

});
