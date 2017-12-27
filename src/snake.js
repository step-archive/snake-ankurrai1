const Snake = function(head, body) {
  this.head = head;
  this.body = body;
}

Snake.prototype = {
  getBody: function() {
    return this.body;
  },
  getHead: function() {
    return this.head;
  },
  move: function() {
    this.body.push(this.head);
    this.head = this.head.next();
    return this.body.shift();
  },
  isColliedItSelf: function() {
    let snakeHead = this.head;
    return this.body.some(function(bodyPart) {
      return bodyPart.x == snakeHead.x && bodyPart.y == snakeHead.y;
    });
  },

  isColliedEastWall: function() {
    return this.head.x == 120 && this.head.direction == "east";
  },

  isColliedItSelf: function() {

  },

  isColliedItSelf: function() {

  },

  isColliedItSelf: function() {

  },

  grow: function() {
    this.body.unshift(new Position(Infinity, Infinity, this.direction));
  },
  turnLeft: function() {
    this.head = this.head.turnLeft();
  },
  turnRight: function() {
    this.head = this.head.turnRight();
  }
}
