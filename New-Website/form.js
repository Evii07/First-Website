document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const input = document.getElementById("nlist").value;

    document.getElementById("simple_box").innerHTML = `
    <div class="list_box">
      <p id="text_list">${input}</p>
    </div>
    `;
});