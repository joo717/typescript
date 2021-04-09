{
  type Video = {
    title: string;
    author: string;
    description: string;
  };
  // [1, 2].map((item) => item * item); // [1,4]
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]; // for...in
  };
  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };
  const animal2: ReadOnly<Animal> = {
    name: "cat",
    age: 3,
  };
  animal2.name = "cka";

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };
  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    description: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
