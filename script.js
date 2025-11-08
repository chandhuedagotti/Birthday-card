document.getElementById("generate").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const message = document.getElementById("message").value;
  const photoFile = document.getElementById("photo").files[0];

  const reader = new FileReader();
  reader.onload = function() {
    // Save everything in localStorage (no long URLs!)
    localStorage.setItem("birthdayData", JSON.stringify({
      name,
      age,
      message,
      photo: reader.result
    }));

    window.location.href = "view.html";
  };
  if (photoFile) {
    reader.readAsDataURL(photoFile);
  } else {
    // if no image, still continue
    localStorage.setItem("birthdayData", JSON.stringify({ name, age, message }));
    window.location.href = "view.html";
  }
});
