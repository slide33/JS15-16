$(function() {

  var search = $('#submit').on('click', function(e) {
    var result = $('#text').val().split('');
    $.ajax({
        url: 'https://api.tenor.co/v1/search?key=LIVDSRZULELA'+ '&tag=' + result + '&limit=10',
        dataType: "json",
        success: function(data, textStatus) {
            var firstGif = data.results[2].media[0].gif.url;
            $('.firstGif').attr('src', firstGif);
            var secondGif = data.results[3].media[0].gif.url;
            $('.secondGif').attr('src', secondGif);
            var thirdGif = data.results[4].media[0].gif.url;
            $('.thirdGif').attr('src', thirdGif);
            var fourthGif = data.results[5].media[0].gif.url;
            $('.fourthGif').attr('src', fourthGif);
        }
    });
    e.preventDefault();
  });
});

function Human() {
  this.name = 'Bob';
  this.age = 25;
  this.height = 1.78;
  this.weight = 7;
}

function Worker(profession, salary, work) {
  this.profession = profession;
  this.salary = salary;
  this.work = work;
}

function Student(stipend, PlaceOfStudy, tvSeries) {
  this.stipend = stipend;
  this.PlaceOfStudy = PlaceOfStudy;
  this.tvSeries = tvSeries;
}

Student.prototype = new Worker('lawyer', '100$', function(){
  alert('I like my work');
});
Human.prototype = new Student('10$', 'Hogwarts', function() {
  alert('Turn on the TV and watch TV shows');
});

var human = new Human();
console.log(human.PlaceOfStudy);
console.log(human.profession);
