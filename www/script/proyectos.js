
    function showEditForm(editButton) {
      var card = editButton.parentNode;
      var editForm = card.querySelector('.edit-form');
      editForm.style.display = 'block';
    }

    function updateCard(saveButton) {
      var card = saveButton.parentNode.parentNode;
      var imgInput = card.querySelector('.edit-form input:nth-child(1)');
      var nameInput = card.querySelector('.edit-form input:nth-child(2)');
      var linkInput = card.querySelector('.edit-form input:nth-child(3)');
      var img = card.querySelector('img');
      var name = card.querySelector('h3');
      var link = card.getAttribute('onclick');

      if (imgInput.value !== '') {
        img.src = imgInput.value;
      }

      if (nameInput.value !== '') {
        name.textContent = nameInput.value;
      }

      if (linkInput.value !== '') {
        link = "location.href='" + linkInput.value + "';";
      }

      card.setAttribute('onclick', link);
      card.querySelector('.edit-form').style.display = 'none';
      imgInput.value = '';
      nameInput.value = '';
      linkInput.value = '';
    }

    function addCard() {
      // Crea una nueva tarjeta
      var newCard = document.createElement('div');
      newCard.className = 'card';

      // Crea la imagen de la tarjeta
      var newImg = document.createElement('img');
      newImg.src = '';
      newImg.alt = 'Nueva imagen';
      newCard.appendChild(newImg);

      // Crea el título de la tarjeta
      var newTitle = document.createElement('h3');
      newTitle.textContent = 'Nueva tarjeta';
      newCard.appendChild(newTitle);

      // Crea el botón de edición
      var newEditButton = document.createElement('div');
      newEditButton.className = 'edit-button';
      newEditButton.textContent = '✎';
      newEditButton.onclick = function() {
        showEditForm(this);
      };
      newCard.appendChild(newEditButton);

      // Crea el formulario de edición
      var newEditForm = document.createElement('div');
      newEditForm.className = 'edit-form';
      newEditForm.style.display = 'none';

      var newImgInput = document.createElement('input');
      newImgInput.type = 'text';
      newImgInput.placeholder = 'URL de la imagen';
      newEditForm.appendChild(newImgInput);

      var newNameInput = document.createElement('input');
      newNameInput.type = 'text';
      newNameInput.placeholder = 'Nombre';
      newEditForm.appendChild(newNameInput);

      var newLinkInput = document.createElement('input');
      newLinkInput.type = 'text';
      newLinkInput.placeholder = 'URL del enlace';
      newEditForm.appendChild(newLinkInput);

      var newSaveButton = document.createElement('button');
      newSaveButton.textContent = 'Guardar';
      newSaveButton.onclick = function() {
        updateCard(this);
      };
      newEditForm.appendChild(newSaveButton);

      newCard.appendChild(newEditForm);

      // Inserta la nueva tarjeta antes del botón
      var addButton = document.querySelector('.add-button');
      addButton.parentNode.insertBefore(newCard, addButton);
    }
