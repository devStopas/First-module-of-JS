
// document.getElementById('first').addEventListener('click', function({target}){
//   console.log('padre', target);
// })
// document.getElementById('second').addEventListener('click', function({target}){
//   console.log('hijo', target);
// })
// document.getElementById('third').addEventListener('click', function(event){
//   console.log('nieto');
//   event.stopPropagation()
// })

// //bobling del negro al verde
// //captifing del verde al negro C:


var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
    // console.log(this.readyState, this.status)
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.response);
        document.write(this.response)
    } else if (this.readyState === 4 && this.status === 404) {
        console.log('No encontre nada perro');
    }
}
xhttp.open("GET", "data.json")
xhttp.send()

