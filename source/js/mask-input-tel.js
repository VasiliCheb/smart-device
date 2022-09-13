const inputTel = document.querySelectorAll('.form__field--tel input');

const getMaskInputTel = () => {
  if (inputTel) {
    window.addEventListener("DOMContentLoaded", () => {
      [].forEach.call(inputTel,(input) => {
        let keyCode;
        function mask(evt) {
          evt.keyCode && (keyCode = evt.keyCode);
          let pos = this.selectionStart;
          if (pos < 3) evt.preventDefault();
          let matrix = "+7(___) ___ ____",
              i = 0,
              def = matrix.replace(/\D/g, ""),
              val = this.value.replace(/\D/g, ""),
              new_value = matrix.replace(/[_\d]/g, (a) => {
                  return i < val.length ? val.charAt(i++) || def.charAt(i) : a
              });
          i = new_value.indexOf("_");
          if (i != -1) {
              i < 4 && (i = 3);
              new_value = new_value.slice(0, i)
          }
          let reg = matrix.substring(0, this.value.length).replace(/_+/g, (a) => {
                  return "\\d{1," + a.length + "}"
              }).replace(/[+()]/g, "\\$&");
          reg = new RegExp("^" + reg + "$");
          if (!reg.test(this.value) || this.value.length < 4 || keyCode > 47 && keyCode < 58) this.value = new_value;
          if (evt.type == "blur" && this.value.length < 4)  this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

      });

    });

  } else {
    return;
  }
}

getMaskInputTel();
