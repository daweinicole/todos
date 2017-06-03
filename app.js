var foo = document.getElementsByTagName("footer");
            foo.style.display = "block";
            function new(){
                foo.style.display = "none";
            }

            //删除todo
            let deletes = document.querySelectorAll('.clear-completed');
            deletes = Array.from(deletes);
            deletes.forEach((item) => {
                item.addEventListener('click', function () {
                    let index = this.parentNode.children[0].getAttribute('index');
                    localStorage.removeItem(index);
                    forBtn();
                })
            })
            