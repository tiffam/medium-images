let fileTag = document.getElementById("filetag");

fileTag.addEventListener("change", function() {
  changeImage(this);
});

function changeImage(input) {
  let previewLarge = document.getElementById("preview-large"),
    previewMedium = document.getElementById("preview-medium"),
    previewSmall = document.getElementById("preview-small"),
    previewExtraSmall = document.getElementById("preview-xsmall"),
    previewContainer = document.getElementById("preview-container"),
    reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
      previewLarge.style.backgroundImage = `url(${e.target.result})`;
      previewMedium.style.backgroundImage = `url(${e.target.result})`;
      previewSmall.style.backgroundImage = `url(${e.target.result})`;
      previewExtraSmall.style.backgroundImage = `url(${e.target.result})`;
    };
    previewContainer.style.display = "block";
    reader.readAsDataURL(input.files[0]);
  }
}
