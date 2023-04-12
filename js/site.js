function reverseString() {
    let str = document.getElementById("inputstr").value;

    if (str.length == 0) {
        return;
    }

    let rev = "";
    for (i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }

    Swal.fire({
        backdrop: false,
        title: "APP NAME",
        text: str + " backwards is " + rev,
    });
}
