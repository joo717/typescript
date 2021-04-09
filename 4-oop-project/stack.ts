/* 
	[메모] o(一︿一+)o
	선입후출! 후입선출!
	언어 자체에서 제공하는 array를 쓰지 않고 !!! 
		- 자료구조에 대한 이해가 있으면 쉽게 자료구조에 대한 이해가 없으면 어려울 듯
		- 연결리스트 라는 것을 사용하면 되겠다
		- head -> item1 -> item2
*/

interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

class CustomNode {
  value: string;
  prevNode: CustomNode;
  constructor() {
    this.value = null;
    this.prevNode = null;
  }
}

class StackImpl implements Stack {
  private node: CustomNode;
  private _size: number = 0;

  get size() {
    return this._size;
  }

  push(value: string): void {
    if (!this.node) this.node = new CustomNode();

    const newNode = new CustomNode();
    newNode.prevNode = this.node;
    newNode.value = value;
    this.node = newNode;
    this._size++;
  }

  pop(): string {
    try {
      if (!this.node.value) {
        throw new Error("No Data");
      }
      const returnVal = this.node.value;
      this.node = this.node.prevNode;
      console.log(
        `🚀 🛸 🪐 🌍 🌌  ||| ${returnVal} ||| ~ (oﾟvﾟ)ノ--<-<-<@☆*: .｡. o(≧▽ ≦)o .｡.:*☆`
      );
      this._size--;
      return returnVal;
    } catch {
      console.log(`💢 💫 ☠ 👻 👽 🐔 없어!  ಠ ▃ ಠ`);
      return;
    }
  }
}

const testStack = new StackImpl();
testStack.push("일");
testStack.push("이");
console.log(testStack.size);
testStack.push("삼");
testStack.pop();
testStack.pop();
console.log(testStack.size);
testStack.pop();
testStack.pop();
testStack.push("가");
testStack.push("나");
testStack.push("다");
console.log(testStack.size);
testStack.push("라");
testStack.pop();
testStack.pop();
testStack.push("나나");
testStack.push("나나나");
console.log(testStack.size);
testStack.pop();
testStack.pop();
console.log(testStack.size);
testStack.pop();
testStack.pop();
console.log(testStack.size);
