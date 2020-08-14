$('#photos').on('change', function () {
  readURL(this);
});
function readURL(input) {
  $('#photos-privew').html('');
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#photos-privew').append(`
        <div class="col-md-3 col-sm-6">
          <img class="img-thumbnail" 
          src="${e.target.result}" alt="..." />
        </div>
        `);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
function submitForm() {
  FormModalIsValid = true;
  ValidateRequireControl('#name', 'Phải nhập tên người dùng');
  ValidateRequireControl('#email', 'Phải nhập email');
  ValidateRequireControl('#password', 'Phải nhập tên người dùng');
  if ($('#email').val()) {
    ValidateRequireControlEmail('#email', 'Phải nhập email đúng định dạng');
  }
  if (FormModalIsValid) {
    $('#formCreate').submit();
  }
}
function submitUpdateForm() {
  FormModalIsValid = true;
  ValidateRequireControl('#name', 'Phải nhập tên người dùng');
  ValidateRequireControl('#password', 'Phải nhập tên người dùng');

  if (FormModalIsValid) {
    $('#formCreate').submit();
  }
}
