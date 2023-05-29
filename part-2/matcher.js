module.exports = class Matcher {
  constructor(participants = []) {
    this.participants = participants
  }

  getFemales() {
    return this.participants.filter((el) => el.gender === 'female')
  }

  getMales() {
    return this.participants.filter((el) => el.gender === 'male')
  }

  generatePairs() {
    let female = this.getFemales()
    let male = this.getMales()
    let pairs = []
    for (let woman of female) {
      for (let man of male) {
        pairs.push([woman, man])
      }
    }
    return pairs
  }

  addLike(liker, liked) {
    if (liker.likes === undefined) {
      liker.likes = []
    }
    liker.likes.push(liked)

    if (liked.likedBy === undefined) {
      liked.likedBy = []
    }
    liked.likedBy.push(liker)
  }

  getLikes(person) {
    return person.likes
  }

  whoLikes(person) {
    return person.likedBy
  }

};

