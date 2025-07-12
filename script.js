document.getElementById("smoothieForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    alert('name: ', formData.get("name"));

});