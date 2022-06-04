function apiBerita(){
  const d = new Date();
  const date=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+(d.getDate()-1);
  var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from='+date+'&' +
          'sortBy=popularity&' +
          'apiKey=7e4688e7890c499196c1b6397deb15ff';
  var req = new Request(url);
/*
  fetch(req)
    .then(function(response) {
        console.log(response.json());
        var obj_keys = Object.keys(response.json(0));
        var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
        hasil = response[ran_key];
        console.log(hasil);
       // console.log(response);
    })
*/
var obj;
fetch(req)
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => {console.log(obj.articles);
    var ran_key = obj.articles[Math.floor(Math.random() * obj.articles.length)];
    document.getElementById('berita').innerHTML="<strong>"+ran_key.title+"</strong><hr>"+ran_key.description
    }
  )
}