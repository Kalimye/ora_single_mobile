var btn = document.querySelectorAll(".tab-btn a");
var con = document.querySelectorAll(".tab-con ul");

btn.forEach((item, index) => {
    item.onclick = function () {
        for (var j = 0; j < btn.length; j++) {
            btn[j].classList.remove("active");
            con[j].classList.remove("active-con");
        }
        btn[index].classList.add("active");
        con[index].classList.add("active-con")
    }
});