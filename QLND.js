 let users = [];

    function addUser() {
      const name = document.getElementById("userName").value.trim();
      const email = document.getElementById("userEmail").value.trim();

      if (!name || !email) {
        alert("Vui lòng nhập đủ Tên và Email!");
        return;
      }

      users.push({ name, email });
      renderUserTable();

      // Reset form
      document.getElementById("userName").value = "";
      document.getElementById("userEmail").value = "";
    }

    function deleteUser(index) {
      users.splice(index, 1);
      renderUserTable();
    }

    function renderUserTable() {
      const table = document.getElementById("userTable");
      table.innerHTML = "";

      users.forEach((u, i) => {
        table.innerHTML += `
          <tr>
            <td>${i + 1}</td>
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td><button onclick="deleteUser(${i})">Xóa</button></td>
          </tr>
        `;
      });
    }