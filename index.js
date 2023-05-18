fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
        const users = data.data;

        const tableBody = document.getElementById('table-body')

        users.forEach(user => {
            const tableRow = document.createElement('tr');

            const serialNumber = document.createElement('td');
            serialNumber.innerHTML = user.id;

            const email = document.createElement('td');
            email.innerHTML = user.email;

            const firstName = document.createElement('td');
            firstName.innerHTML = user.first_name;

            const lastName = document.createElement('td');
            lastName.innerHTML = user.last_name;


            const avatar = document.createElement('td');
            const image = document.createElement('img');

            image.src = user.avatar;
            avatar.appendChild(image);

            
            tableRow.appendChild(serialNumber);
            tableRow.appendChild(email);
            tableRow.appendChild(firstName);
            tableRow.appendChild(lastName);
            tableRow.appendChild(avatar);

            tableBody.appendChild(tableRow);
        })
    })
    .catch(error => console.log(error));