let products = [];

    function addProduct() {
      const name = document.getElementById("productName").value.trim();
      const price = document.getElementById("productPrice").value.trim();

      if (!name || !price) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
      }

      products.push({ name, price });
      renderTable();

      document.getElementById("productName").value = "";
      document.getElementById("productPrice").value = "";
    }

    function deleteProduct(index) {
      products.splice(index, 1);
      renderTable();
    }

    function renderTable() {
      const table = document.getElementById("productTable");
      table.innerHTML = "";

      products.forEach((p, i) => {
        table.innerHTML += `
          <tr>
            <td>${i + 1}</td>
            <td>${p.name}</td>
            <td>${p.price}</td>
            <td><button onclick="deleteProduct(${i})">Xóa</button></td>
          </tr>
        `;
      });
    }