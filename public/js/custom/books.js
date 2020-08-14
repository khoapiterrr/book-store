$('#photos').on('change', function () {
  readURL(this);
});
function readURL(input) {
  $('#photos-privew').html('');
  if (input.files) {
    Array.from(input.files).forEach((item) => {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#photos-privew').append(`
        <div class="col-md-3 col-sm-6">
          <img class="img-thumbnail" 
          src="${e.target.result}" alt="..." />
        </div>
        `);
      };
      reader.readAsDataURL(item);
    });
  }
}
function submitForm() {
  FormModalIsValid = true;
  ValidateRequireControl('#name', 'Phải nhập tên sách');
  ValidateRequireControl('#price', 'Phải nhập giá');
  ValidateRequireControl('#description', 'Phải nhập mô tả');

  if (FormModalIsValid) {
    $('#formCreate').submit();
  }
}
