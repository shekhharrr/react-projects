import Section1 from "./components/section1/Section1"

const App = () => {

  const cardData = [
    {
      img: "https://i.pinimg.com/1200x/8d/da/78/8dda783616bb311856902d6bff2eee05.jpg",
      intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tag: "Satisfied"
    },
    {
      img: "https://i.pinimg.com/736x/40/7f/8f/407f8fa7403f768f37d8587b38536f6b.jpg",
      intro: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      tag: "Underserved"
    },
    {
      img: "https://i.pinimg.com/736x/6e/41/ac/6e41ac6f1b3afc59fb5d6099ce9bf374.jpg",
      intro: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.",
      tag: "Underbanked"
    }
  ];

  return (
    <>
      <Section1 data={cardData} />
    </>
  )
}

export default App
