
fetch('http://34.123.210.245:4000/pedidos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const jsonString = JSON.stringify(data, null, 2); // Formatear el JSON para que sea más legible
                showDialog(jsonString);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });

    function showDialog(message) {
        const dialog = document.createElement('div');
        dialog.style.position = 'fixed';
        dialog.style.left = '50%';
        dialog.style.top = '50%';
        dialog.style.transform = 'translate(-50%, -50%)';
        dialog.style.padding = '20px';
        dialog.style.backgroundColor = 'white';
        dialog.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        dialog.style.zIndex = 1000;

        const pre = document.createElement('pre');
        pre.textContent = message;
        dialog.appendChild(pre);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.addEventListener('click', function () {
            document.body.removeChild(dialog);
        });
        dialog.appendChild(closeButton);

        document.body.appendChild(dialog);
    }
