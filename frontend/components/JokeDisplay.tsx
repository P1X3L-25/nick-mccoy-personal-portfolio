"use client";

import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

interface Joke {
  setup: string;
  punchline: string;
  type: string;
  id: number;
}

export default function JokeDisplay() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
      if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
      const data = await res.json();
      setJoke(data);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Box sx={{ mt: 8, py: 4, px: 3, bgcolor: "background.paper", borderRadius: 2 }}>
      <Typography variant="h6">Random Joke</Typography>

      {loading && (
        <Typography sx={{ mt: 1 }}>- Loading...</Typography>
      )}

      {error && (
        <Typography color="error" sx={{ mt: 1 }}>Error: {error}</Typography>
      )}

      {joke && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">{joke.setup}</Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, mt: 1 }}>{joke.punchline}</Typography>
        </Box>
      )}

      <Button variant="contained" onClick={fetchJoke} sx={{ mt: 3 }}>
        New Joke
      </Button>
    </Box>
  );
}
