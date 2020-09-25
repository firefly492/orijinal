document.addEventListener('DOMContentLoaded', function(){
  const ImageList = document.getElementById('image-list');

  const createImageHTML = (blob) => {
  const imageElement = document.createElement('div');
  imageElement.setAttribute('id', "image-element")
  let imageElementNum = document.querySelectorAll('#image-element').length

  const blobImage = document.createElement('img');

  blobImage.className = 'image-li'
  blobImage.setAttribute('src', blob);

  const inputHTML = document.createElement('input')
  inputHTML.setAttribute('id', `post_image_${imageElementNum}`)
  inputHTML.setAttribute('name', 'post[images][]')
  inputHTML.setAttribute('class', 'image-element-child')
  inputHTML.setAttribute('type', 'file')

  imageElement.appendChild(blobImage);
  imageElement.appendChild(inputHTML)
  ImageList.appendChild(imageElement);

  inputHTML.addEventListener('change', (e) => {
    file = e.target.files[0];
    blob = window.URL.createObjectURL(file);

    createImageHTML(blob)
  })
};

  document.getElementById('post_image').addEventListener('change', function(e){

    const file = e.target.files[0];
    const blob = window.URL.createObjectURL(file);

    createImageHTML(blob);
  });
});