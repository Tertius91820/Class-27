//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixTvShows{
  constructor(genre,movieName,length,year){
    this.genre = genre
    this.moviename = movieName
    this.length = length
    this.year = year
  }
  play(){
    alert(`Playing a ${this.genre} movie`)
  }
  stop(){
    alert(`stopped playing ${this.moviename}`)
  }
  skipIntro(){
    console.log("skipped intro")

  }
}
 let batman = new NetflixTvShows('action',"batman returns",'2:00:00', 2023)

