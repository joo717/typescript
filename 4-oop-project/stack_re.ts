{
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

  type CustomNode = {
    readonly value: string;
    readonly prevNode: CustomNode;
  };

  class StackImpl implements Stack {
    private node: CustomNode;
    private _size: number = 0;

    get size() {
      return this._size;
    }

    push(value: string): void {
      if (!this.node) this.node = { value: null, prevNode: null };

      const newNode = { prevNode: this.node, value };
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
        console.log(`💢 💫 ☠ 👻 👽 🐔 err ಠ ▃ ಠ`);
        return;
      }
    }
  }

  const stack = new StackImpl();
  stack.push("일");
  stack.push("이");
  stack.push("삼");
  while (stack.size !== 0) {
    stack.pop();
  }
  stack.pop();
}
