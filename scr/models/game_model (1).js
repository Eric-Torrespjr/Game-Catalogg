// src/models/Game.js
// Modelo para representar um jogo
export default class Game {
  constructor(id, title, description, imageUrl, price, rating) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
    this.rating = rating;
  }

  static fromJson(json) {
    return new Game(
      json.id,
      json.title,
      json.description,
      json.imageUrl,
      json.price,
      json.rating
    );
  }

  toJson() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      imageUrl: this.imageUrl,
      price: this.price,
      rating: this.rating
    };
  }
}
