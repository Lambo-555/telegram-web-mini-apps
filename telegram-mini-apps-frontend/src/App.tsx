import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { MainButton, useShowPopup } from "@vkruglikov/react-telegram-web-app";

function App() {
  const showPopup = useShowPopup();

  const handleClick = () =>
    showPopup({
      message: "Hello, I am popup",
    });

  return <MainButton text="SHOW POPUP" onClick={handleClick} />;

  const [list, setList] = useState<
    {
      title: string;
      year: number;
      url: string;
    }[]
  >([
    {
      url: "https://m.media-amazon.com/images/M/MV5BMTcyMjdlYmUtNjQ1Zi00YTg3LTliNTgtZmNkOTRmYzEzYTMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      year: 2000,
      title: "Big Momma's House",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BNTYwODI4NjcwOV5BMl5BanBnXkFtZTgwMzU0OTk5MTE@._V1_.jpg",
      year: 1966,
      title: "Torn Curtain",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BMjQxNjE3NjYxN15BMl5BanBnXkFtZTgwMTk2NDQ3NjM@._V1_.jpg",
      year: 2018,
      title: "Mary Poppins Returns",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BZjRiMTdlY2QtZGE3YS00YjQzLTk5MmUtNjVjMjUzYWRiMWNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      year: 1982,
      title: "Vrijdag de dertiende - Deel 3",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BMjEyOTkwNzI4OV5BMl5BanBnXkFtZTYwNzk0MDg5._V1_.jpg",
      year: 2002,
      title: "Feardotcom",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BMTA1NDI0OTkwNDNeQTJeQWpwZ15BbWU3MDQ3Nzc1MjE@._V1_.jpg",
      year: 2004,
      title: "A Cinderella Story",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BYmFlNTA1NWItODQxNC00YjFmLWE3ZWYtMzg3YTkwYmMxMjY2XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_.jpg",
      year: 1954,
      title: "Sabrina",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BZmZkMGNmNTItNDY1NS00ZGM3LTg5OTYtZWNlMGZiMDE2ZDdkXkEyXkFqcGdeQXVyNzc0MTgzMzU@._V1_.jpg",
      year: 2018,
      title: "The Delinquent Season",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BMGQ0N2U0YzMtNWIxYi00NWVhLWI3OTYtNTE5YjU0YTQwMGYxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      year: 1983,
      title: "Silkwood",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg",
      year: 2018,
      title: "Spider-Man: Een nieuw universum",
    },
  ]);

  const [movie, setMovie] = useState<{
    title: string;
    year: number;
    url: string;
  }>({
    url: "https://m.media-amazon.com/images/M/MV5BNTYwODI4NjcwOV5BMl5BanBnXkFtZTgwMzU0OTk5MTE@._V1_.jpg",
    year: 1966,
    title: "Torn Curtain",
  });

  const getRandomMovie = () => {
    const randomId: number = Math.floor(Math.random() * list.length);
    if (list[randomId].title === movie.title) {
      getRandomMovie();
    } else {
      setMovie(list[randomId]);
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.url} />
      <Card.Body>
        <Card.Title>Title: {movie.title}</Card.Title>
        <Card.Text>Year: {movie.year}</Card.Text>
        <Button variant="primary" onClick={getRandomMovie}>
          Select another random movie!
        </Button>
      </Card.Body>
    </Card>
  );
}

export default App;
