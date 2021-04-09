{
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";

  // Map 같은거네
  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };
}
