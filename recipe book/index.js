let data = [
    {id:1, name:"Spaghetti" , recipe:"boil pasta and add sauce"},
    {id:2, name:"grilled cheese", recipe:"grilled bread with cheese"},
    {id:3, name:"salad", recipe:"mix vegetable with dressing"}
]
            function readAll() {
                localStorage.setItem("object", JSON.stringify(data));
                var tabledata = document.querySelector(".data_table");
            
                var object = localStorage.getItem('object');
                var objectdata = JSON.parse(object);
                var elements = "";
            
                objectdata.map(record => {
                    elements += `<tr> 
                      <td> 
                        <img class="pic" src="https://www.shutterstock.com/image-vector/download-image-photo-pic-picture-260nw-1871525404.jpg" alt="${record.name}" width="50" height="50"/>
                        <input class="fileSubmit" type="file" data-id="${record.id}">
                      </td>
                      <td class="mm">${record.name}</td>
                      <td class="mm">${record.recipe}</td>
                      <td>
                        <button class="edit" onclick="edit(${record.id})">Edit</button>
                        <button class="delete" onclick="delet(${record.id})">Delete</button>
                      </td>
                    </tr>`;
                });
            
                tabledata.innerHTML = elements;
            
                // Add event listeners for file input changes
                document.querySelectorAll('.fileSubmit').forEach(input => {
                    input.addEventListener('change', function(event) {
                        let file = event.target.files[0];
                        let img = event.target.previousElementSibling;
                        if (file) {
                            img.src = URL.createObjectURL(file);
                        }
                    });
                });
            }
            
            function delet(id) {
                data = data.filter(rec => rec.id !== id);
                readAll();
            }
            
            function create() {
                document.querySelector(".create_form").style.display = "block";
                document.querySelector(".add_div").style.display = "none";
            }
            
            function add() {
                var name = document.querySelector(".name").value;
                var recipe = document.querySelector(".recipe").value;
            
                var newObj = { id: data.length + 1, name: name, recipe: recipe };
                data.push(newObj);
            
                document.querySelector(".create_form").style.display = "none";
                document.querySelector(".add_div").style.display = "block";
            
                readAll();
            }
            
            function edit(id) {
                document.querySelector('.update_form').style.display = "block";
                var obj = data.find(rec => rec.id === id);
                document.querySelector('.name_u').value = obj.name;
                document.querySelector('.recipe_u').value = obj.recipe;
                document.querySelector('.id').value = obj.id;
            }
            
            function update() {
                var id = parseInt(document.querySelector('.id').value);
                var name = document.querySelector('.name_u').value;
                var recipe = document.querySelector('.recipe_u').value;
            
                var index = data.findIndex(rec => rec.id === id);
                data[index] = { id, name, recipe };
            
                document.querySelector('.update_form').style.display = "none";
            
                readAll();
            }
            
            readAll();
            

            