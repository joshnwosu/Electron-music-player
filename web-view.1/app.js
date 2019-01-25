
let arr = [
  { 
    title: 'Bad blood', 
    artist: 'Taylor Swift',
    album: 'Red',
    like: false,
    time: '03:50',
    id: 1
  },
  { 
    title: '05 Perfect', 
    artist: 'Ed sheeran',
    album: 'Delux',
    like: false,
    time: '04:23',
    id: 2
  },
  { 
    title: 'Wreck it ralph', 
    artist: 'Owl city',
    album: 'Animation',
    like: true,
    time: '02:46',
    id: 3
  }
];
let myFavorite = [];

function Build() {
  this.data = {
    list: arr
  }
  this.renderItem(this.data.list);
}

Build.prototype.renderTemplate = function(item, index) {
  let template = `
    <div class="song">
      <span class="num"><h4>${index <= 9 ? '0' + (index+1) : index+1}</h4></span>
      <span class="title"><h4>${item.title}</h4></span>
      <span class="time"><h4>${item.time}</h4></span>
      <span class="artist"><h4>${item.artist}</h4></span>
      <span class="album"><h4>${item.album}</h4></span>
      <span class="like" style="${item.like == true ? "color: tomato" : ""}" onclick="b.like(${item.id})">
        <h4><i class="ion-heart"></i></h4>
      </span>
      <span class="more"><h4><i class="ion-android-more-horizontal"></i></h4></span>
    </div>
  `;
  return template
}

Build.prototype.renderItem = function(list) {
  let template = ''
  template += `
    <div class="list-header">
      <span class="num"><h5>s/n</h5></span>
      <span class="title"><h5>Title</h5></span>
      <span class="time"><h5>Time</h5></span>
      <span class="artist"><h5>Artist</h5></span>
      <span class="album"><h5>Album</h5></span>
      <span class="like"><h5>Like</h5></span>
      <span class="more"><h5>More</h5></span>
    </div>`
  template += `<div class="list-container">`
  template += list.map((el,idx)=> {
    return this.renderTemplate(el, idx);
  }).join('');
  template += `</div>`
  document.querySelector('.music-list').innerHTML = template
}

Build.prototype.like = function(id) {
  let el = this.data.list.find((x)=> x.id == id);
  el.like = !el.like;
  this.renderItem(this.data.list)
}


Build.prototype.showSongAlbumArtist = function(data) {

  console.log(data)

}


const b = new Build();


let $sideList = document.querySelectorAll('.side-nav li');
console.log($sideList)

$sideList.forEach(el=> {

  el.addEventListener('click', function() {

    $sideList.forEach(el=> {
      el.classList.remove('active')
    });

    this.classList.add('active');

    if (!this.attributes['data-view'])
      return;
    
    b.showSongAlbumArtist(this.attributes['data-view'].value);

  });

})



  