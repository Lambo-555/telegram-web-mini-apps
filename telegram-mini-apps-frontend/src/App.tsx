import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import {
  MainButton,
  useShowPopup,
  useThemeParams,
} from "@vkruglikov/react-telegram-web-app";

function App() {
  const movieList: {
    title: string;
    year: number;
    url: string;
  }[] = [
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
  ];

  const [movie, setMovie] = useState<{
    title: string;
    year: number;
    url: string;
  }>({
    url: "https://m.media-amazon.com/images/M/MV5BNTYwODI4NjcwOV5BMl5BanBnXkFtZTgwMzU0OTk5MTE@._V1_.jpg",
    year: 1966,
    title: "Torn Curtain",
  });

  // will show native Telegram popup
  const showPopup = useShowPopup();
  
  // get theme data from user current Telegram settings
  const themeData = useThemeParams();

  // on click button inside telegram the function bellow will be handled
  const handleClickMainButton = async () => {
    showPopup({
      title: "About",
      message: "App provide random movies from 'best movies' list",
    });
  };

  const getRandomMovie = () => {
    const randomId: number = Math.floor(Math.random() * movieList.length);
    if (movieList[randomId].title === movie.title) {
      getRandomMovie();
    } else {
      setMovie(movieList[randomId]);
    }
  };

  return (
    <Card style={{ width: "100%", backgroundColor: themeData[1].bg_color }}>
      <Card.Body>
        <Card.Title>Title: {movie.title}</Card.Title>
        <Card.Text>Year: {movie.year}</Card.Text>
        <Button
          variant="primary"
          onClick={getRandomMovie}
          style={{
            backgroundColor: themeData[1].button_color,
            color: themeData[1].button_text_color,
            border: "none",
          }}
        >
          Show me random movie!
        </Button>
        <MainButton text="Show about info" onClick={handleClickMainButton} />
      </Card.Body>
      <Card.Img variant="bottom" src={movie.url} />
    </Card>
  );
}

export default App;
