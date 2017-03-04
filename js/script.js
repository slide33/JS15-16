$(function() {

    $.ajax({
        url: 'https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag=goodluck&limit=10', // указываем URL и
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
});

function Human() {
  this.name = 'Bob';
  this.age = 25;
  this.height = 1.78;
  this.weight = 7;
}


function Worker() {
  this.profession = 'lawyer';
  this.salary = '100$';
  this.work = function() {
    alert('I like my work');
  };
}

function Student() {
  this.stipend = '10$';
  this.PlaceOfStudy = 'Hogwarts';
  this.tvSeries = function() {
    alert('Turn on the TV and watch TV shows');
  };
}

Student.prototype = new Worker();
Human.prototype = new Student();

var human = new Human();
console.log(human.PlaceOfStudy);
console.log(human.profession);
