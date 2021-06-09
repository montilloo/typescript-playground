class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log("swish");
  }
}

function testDecorator(target: any, key: string): void {
  console.log("Tarage:", target);
  console.log("key:", key);
}

// testDecorator(Boat.prototype, "pilot");
