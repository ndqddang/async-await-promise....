
var fullname = document.querySelector("#name");
var age = document.querySelector("#age");
var address = document.querySelector("#address");
var statusThem = document.querySelector("#status")
let stt = 0;
var addInformation = document.querySelector(".addIf");

addInformation.addEventListener("click", () => {
    stt++;
    console.log("added")
    showInformation(stt, fullname.value, age.value, address.value, statusThem.value);
})

function showInformation(stt, fullname, age, address, statusThem) {
    var tbody = document.querySelector("tbody");
    var tr = document.createElement("tr")
    tr.innerHTML = `
                    <td>${stt}</td>
                    <td>${fullname}</td>
                    <td>${age}</td>
                    <td>${address}</td>
                    <td>${statusThem}</td>
                    <td><span class="edit" title="Edit your infomation"><ion-icon
                                name="create-outline"></ion-icon></span><span class="deleteRow" title="Trash it!"><ion-icon
                                name="trash-outline"></ion-icon></span></td>
               `;

    tbody.appendChild(tr);
    Isvalid();
    clear();

}

function clear() {
    fullname.value = " ";
    age.value = " ";
    address.value = " ";
    statusThem.value = " ";
}



let editingRow = null;

document.querySelector("tbody").addEventListener("click", (e) => {
    if (e.target.closest(".edit")) {
        document.querySelector(".addIf").style.display = "none";
        document.querySelector(".update").style.display = "block";

        // Truy vấn đến phần tử tr chứa phần tử edit được click
        editingRow = e.target.closest("tr");

        // Lấy các giá trị từ các thẻ td trong hàng tr
        const tds = editingRow.querySelectorAll("td");

        // Giả sử các giá trị cần lấy lần lượt là name, age, address, status
        document.querySelector("#name").value = tds[1].innerText;
        document.querySelector("#age").value = tds[2].innerText;
        document.querySelector("#address").value = tds[3].innerText;
        document.querySelector("#status").value = tds[4].innerText;
    }
});

document.querySelector(".update").onclick = function Update() {
    document.querySelector(".addIf").style.display = "block";
    document.querySelector(".update").style.display = "none";

    if (editingRow) {
        // Cập nhật lại các giá trị trong hàng đang chỉnh sửa
        const updatedName = document.querySelector("#name").value;
        const updatedAge = document.querySelector("#age").value;
        const updatedAddress = document.querySelector("#address").value;
        const updatedStatus = document.querySelector("#status").value;

        const tds = editingRow.querySelectorAll("td");
        tds[1].innerText = updatedName;
        tds[2].innerText = updatedAge;
        tds[3].innerText = updatedAddress;
        tds[4].innerText = updatedStatus;

        // Clear biến editingRow sau khi cập nhật xong
        editingRow = null;
    }

    // Clear các input sau khi cập nhật
    clear();
};




document.querySelector("tbody").addEventListener("click", function (e) {
    if (e.target.classList.contains("deleteRow")) {
        const parent = e.target.classList.contains("deleteRow").parentElement.parentElement;
        parent.remove();
    }
})



function Isvalid() {
    var myVar = true;
    if (fullname.value.trim() === "" ||
        age.value.trim() === "" ||
        address.value.trim() === "" ||
        statusThem.value.trim() === "") {
        alert("Bạn bắt buộc phải điền đủ thông tin nhé!");
        myVar = false;
    } else {
        console.log("success!");

        // ajsdfgjkjgjer
    }
}
