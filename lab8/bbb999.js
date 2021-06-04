const { Observable } = rxjs;

window.onload = myFn;

function myFn() {
    document.getElementById('empsBtn').onclick = clickEvent;

    function clickEvent() {
        let len = document.getElementById('empListLength').value;
        let observable88 = Observable.create(observer => {
            fetch('https://randomuser.me/api/?results=' + len)
                .then(response => response.json())
                .then(data => {
                    observer.next(data.results);
                    //observer.complete();
                })
            //.catch(err => observer.error(err));
        });

        observable88.subscribe(data => {
            const employeeDiv = document.getElementById('employee-list');
            employeeDiv.innerHTML = '';

            data.forEach(getSingleuUserDisplay);

            function getSingleuUserDisplay(user) {
                let template = `     
                    <div class="col">
                        ${user.name.first} ${user.name.last}
                    </div>
                    <div class="col">
                        <h3>Location</h3>
                        <p>${user.location.street.number} ${user.location.street.name}</p>
                        <p>${user.location.city}, ${user.location.state} ${user.location.country} ${user.location.postcode}</p>
                    </div>     
                    `;

                const div = document.createElement('div');
                div.classList = 'row border-top';
                div.innerHTML = template;
                employeeDiv.appendChild(div);
            };
        });
    }
}